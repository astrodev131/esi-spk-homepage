import React from "react";

interface ButtonProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface StyledButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  className = "",
  children,
}) => {
  return (
    <button
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      className={`px-4  text-black rounded disabled:bg-gray-400 hidden md:block ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(90.41deg, #32FFDC 8.08%, #33FFFF 93.22%)",
      }}
    >
      <div className="font-medium">{children}</div>
    </button>
  );
};

const StyledButton: React.FC<StyledButtonProps> = ({
  onClick,
  className = "",
  children,
}) => {
  return (
    <button
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      type="submit"
      className={` hidden md:flex justify-center gap-2 -ml-0 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto border-[#33FFFF] before:absolute  before:transition-all text-[#33FFFF] before:duration-500 before:hover:w-full before:-left-full before:-top-full before:hover:left-0 before:hover:bottom-0 before:rounded-[5px] before:bg-white hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-00 relative z-10 px-4 py-2 overflow-hidden border-[1px] rounded-[5px] group ${className}`}
    >
      {children}
    </button>
  );
};

export { Button, StyledButton };
