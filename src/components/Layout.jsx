import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  const isCompactPage = pathname === "/withdraw" || pathname === "/withdraw/confirm" || pathname === "/withdraw/success" || pathname === "/withdraw/transaction";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f7f9f7] pt-[22px] md:pl-[272px] md:pt-0">
      <Sidebar />

      <section className="min-w-0">
        {!isCompactPage && <Topbar />}
        <main className={`mx-auto max-w-7xl px-[22px] pb-[calc(7.5rem+env(safe-area-inset-bottom))] md:px-12 md:pb-20 ${isCompactPage ? "pt-0 md:pt-10" : "mt-7 md:mt-0 md:pt-[54px]"}`}>
          <Outlet />
        </main>
      </section>

      {!isCompactPage && (
        <Button
          variant="chat"
          size="chat"
          className="fixed bottom-[calc(84px+env(safe-area-inset-bottom))] right-[18px] z-40 md:bottom-8 md:right-8"
          aria-label="Open chat"
        >
          <Icon
            name="chat"
            size={20}
          />
          <span>Chat</span>
        </Button>
      )}
    </div>
  );
}
