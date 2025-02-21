import { useEffect, useState } from "react";

function useScrollWidth(
  ref: React.RefObject<HTMLElement>,
  minWidth = 10,
  maxWidth = 200
) {
  const [width, setWidth] = useState(minWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const newWidth = Math.min(
          maxWidth,
          Math.max(minWidth, maxWidth * (1 - rect.top / windowHeight))
        );
        setWidth(newWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, minWidth, maxWidth]);

  return width;
}

export default useScrollWidth;
