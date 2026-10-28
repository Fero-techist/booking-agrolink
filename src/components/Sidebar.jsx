import { NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";

const navItems = [
  { label: "Home", icon: "home", to: "/" },
  { label: "Bookings", icon: "calendar", to: "/bookings" },
  { label: "Wallet", icon: "wallet", to: "/wallet" },
  { label: "Setting", icon: "settings", to: "/settings" },
];

export default function Sidebar() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[272px] flex-col border-r border-[#e9ece9] bg-white px-6 py-8 md:flex">
        <NavLink to="/" className="flex items-center gap-3 px-2 pb-8 text-[#08371f] no-underline" aria-label="Agri Consult home">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-[13px] bg-[#0d6533] text-[23px] font-extrabold text-white">A</span>
          <span className="hidden text-[16px] font-bold xl:block">Agri Consult</span>
        </NavLink>

        <nav className="grid gap-2.5" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `flex h-[54px] items-center gap-4 rounded-[13px] px-4 text-[14px] no-underline transition-all duration-200 ${isActive ? "bg-[#eef6f0] font-bold text-[#0d6533] shadow-[inset_3px_0_0_#0d6533]" : "text-[#555d57] hover:bg-[#f7faf8]"}`}
            >
              <Icon name={item.icon} size={25} />
              <span className="hidden xl:block">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto flex items-center gap-3 border-t border-[#edf0ed] px-2 pt-5">
          <img className="h-[42px] w-[42px] rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80" alt="" />
          <div className="hidden grid-cols-1 xl:grid"><strong className="text-[14px]">Christiana</strong><span className="text-[12px] text-[#878d89]">Customer</span></div>
        </div>
      </aside>

      <nav       className="fixed inset-x-0 bottom-0 z-30 grid h-[74px] grid-cols-4 items-center border-t border-[#edf0ed] bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => `flex h-full flex-col items-center justify-center gap-1 no-underline ${isActive ? "text-[#f5b23b]" : "text-black"}`}
          >
            <Icon name={item.icon} size={24} />
            <span className="text-[13px]">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
