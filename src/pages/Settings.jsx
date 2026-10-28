import { useState } from "react";
import Button from "../components/Button.jsx";

const options = [
  { id: "appointments", label: "Appointment reminders", detail: "Get notified before a session" },
  { id: "messages", label: "New message alerts", detail: "Know when a farmer sends a message" },
  { id: "marketing", label: "Product updates", detail: "Occasional news and platform improvements" },
];

export default function Settings() {
  const [enabled, setEnabled] = useState({ appointments: true, messages: true, marketing: false });

  return (
    <section className="pb-8">
      <header>
        <h1 className="m-0 text-[26px] font-bold leading-[1.08] tracking-[-.8px] text-[#063d27] sm:text-[29px] md:text-[34px]">
          Settings
        </h1>
        <p className="mt-3 text-[14px] text-[#858a86] md:text-[16px]">
          Manage your profile and app preferences.
        </p>
      </header>

      <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2">
        <section className="rounded-[24px] border border-[#edf0ed] bg-white p-5 shadow-[0_12px_26px_rgba(20,48,30,.06)] sm:p-7">
          <h2 className="m-0 text-[18px] font-bold md:text-[21px]">Profile</h2>
          <div className="mt-6 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
              alt="Christiana"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <strong className="block text-[15px] md:text-[17px]">Christiana Okafor</strong>
              <span className="mt-1 block text-[13px] text-[#858a86] md:text-[14px]">Agriculture consultant</span>
            </div>
          </div>
          <Button variant="outline" size="compact" className="mt-6">Edit profile</Button>
        </section>

        <section className="rounded-[24px] border border-[#edf0ed] bg-white p-5 shadow-[0_12px_26px_rgba(20,48,30,.06)] sm:p-7">
          <h2 className="m-0 text-[18px] font-bold md:text-[21px]">Notifications</h2>
          <div className="mt-5 grid gap-5">
            {options.map((option) => (
              <div key={option.id} className="flex items-center justify-between gap-4">
                <div>
                  <strong className="block text-[14px] md:text-[15px]">{option.label}</strong>
                  <span className="mt-1 block text-[12px] leading-[1.35] text-[#858a86] md:text-[13px]">{option.detail}</span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={enabled[option.id]}
                  aria-label={option.label}
                  onClick={() => setEnabled((current) => ({ ...current, [option.id]: !current[option.id] }))}
                  className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${enabled[option.id] ? "bg-[#0d6533]" : "bg-[#daddda]"}`}
                >
                  <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${enabled[option.id] ? "translate-x-6" : "translate-x-1"}`} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
