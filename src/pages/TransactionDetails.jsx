import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";

export default function TransactionDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const amount = Number(state?.amount || 50000);
  const details = [
    ["Bank", "GTBank"],
    ["Account", "•••• 4821"],
    ["Time", "Instant"],
    ["Date", "12 Sep 2025"],
    ["Reference", "WD-4821-0912"],
  ];

  return (
    <div className="mx-auto max-w-[1120px]">
      <header className="flex h-[58px] items-center md:h-20">
        <Button variant="icon" size="icon" onClick={() => navigate(-1)} aria-label="Go back" className="justify-start">
          <Icon name="arrow-left" size={31} />
        </Button>
        <h1 className="mx-auto pr-12 text-[24px] font-bold text-[#0d652f] md:text-[29px]">
          Transaction Details
        </h1>
      </header>

      <section className="relative mt-16 overflow-hidden rounded-[26px] border border-[#ededed] bg-white px-5 pb-7 pt-10 shadow-[0_12px_18px_rgba(32,51,40,.10)] sm:px-7 md:mt-12 md:rounded-[30px] md:px-12 md:pb-10 md:pt-12">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[110px] bg-[#063d27] opacity-95" />

        <div className="border-b border-[#dfdfdf] pb-10 text-center md:pb-12">
          <p className="text-[16px] text-[#555] md:text-[20px]">Receipt</p>
          <p className="mt-5 text-[34px] font-semibold leading-none tracking-[-1.5px] md:text-[47px]">
            ₦{amount.toLocaleString("en-NG")}
          </p>
        </div>

        <dl className="grid gap-8 px-2 py-9 text-[17px] md:gap-10 md:px-0 md:py-12 md:text-[22px]">
          {details.map(([label, value]) => (
            <div className="flex items-center justify-between gap-4" key={label}>
              <dt className="text-[#555]">{label}</dt>
              <dd className="flex items-center gap-2 font-semibold">
                {label === "Bank" && <span className="h-3 w-3 rounded-full bg-[#063d27]" />}
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <Button size="large" fullWidth onClick={() => navigate("/wallet")} className="mt-10">
        Confirm
      </Button>
    </div>
  );
}
