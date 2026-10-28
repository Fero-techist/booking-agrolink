import Button from "./Button.jsx";
import Icon from "./Icon.jsx";

export default function Topbar() {
  return (
    <header className="flex h-[58px] items-center justify-between bg-transparent md:h-24 md:border-b md:border-[#edf0ed] md:bg-white md:px-12">
      <div className="flex items-center gap-4 md:gap-5">
        <img
          className="h-12 w-12 flex-none rounded-full object-cover shadow-[0_3px_10px_rgba(0,0,0,.12)] md:h-[58px] md:w-[58px]"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"
          alt="Profile"
        />
        <div>
          <h1 className="mb-1 text-[16px] font-bold leading-[1.1] md:mb-1 md:text-[19px]">Welcome Back</h1>
          <p className="m-0 text-[12px] leading-[1.1] text-[#333] md:text-[14px]">Check available product</p>
        </div>
      </div>

      <Button variant="icon" size="icon" className="relative h-11 w-11 md:h-14 md:w-14" aria-label="Notifications">
        <Icon name="bell" size={29} />
        <span className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#fdbf36]" />
      </Button>
    </header>
  );
}
