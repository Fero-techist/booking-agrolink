import React from "react";

const variants = {
  primary:
    "bg-[#063d27] text-white hover:bg-[#052f1e] focus-visible:outline-[#063d27]",
  secondary:
    "bg-[#fdbf36] text-[#0d2022] hover:bg-[#f2ad27] focus-visible:outline-[#fdbf36]",
  outline:
    "border-2 border-[#063d27] bg-transparent text-[#063d27] hover:bg-[#eef6f0] focus-visible:outline-[#063d27]",
  ghost:
    "bg-transparent text-[#0d652f] hover:bg-[#eef6f0] focus-visible:outline-[#0d652f]",
  amount:
    "border border-[#cfcec9] bg-white text-[#111] hover:border-[#0d652f]",
  icon:
    "bg-transparent text-[#082d1c] hover:bg-[#eef6f0] focus-visible:outline-[#063d27]",
  chat:
    "bg-[#08703a] text-white shadow-[0_16px_24px_rgba(11,58,35,.36)] hover:bg-[#06592e] focus-visible:outline-[#08703a]",
};

const sizes = {
  small: "h-10 px-4 text-[14px]",
  medium: "h-14 px-6 text-[16px]",
  large: "h-[64px] px-6 text-[17px] md:h-[82px] md:text-[22px]",
  success: "h-[64px] px-6 text-[17px] md:h-[78px] md:text-[20px]",
  compact: "h-12 px-4",
  icon: "h-12 w-12 p-0",
  chat: "h-20 w-20 flex-col gap-1 rounded-full text-[13px] md:h-[118px] md:w-[118px] md:gap-2 md:text-[22px]",
};

export default function Button({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  active = false,
  className = "",
  type = "button",
  children,
  ...props
}) {
  const activeClasses = variant === "amount" && active
    ? "border-[#0d652f] text-[#082d1c]"
    : "";

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-[15px] font-semibold outline-none transition-[transform,background-color,border-color,box-shadow,opacity] duration-200 active:scale-[.985] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${activeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
