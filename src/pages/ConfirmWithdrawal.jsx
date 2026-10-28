import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";

export default function ConfirmWithdrawal() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const amount = Number(state?.amount || 50000);
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const updatePin = (index, value) => {
    const digit = value.replace(/[^0-9]/g, "").slice(-1);
    const nextPin = [...pin];
    nextPin[index] = digit;
    setPin(nextPin);
    if (digit && index < pin.length - 1) inputs.current[index + 1]?.focus();
  };

  const handlePinKeyDown = (index, event) => {
    if (event.key === "Backspace" && !pin[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="mx-auto max-w-[1120px]">
      <header className="flex h-[58px] items-center md:h-20">
        <Button variant="icon" size="icon" onClick={() => navigate(-1)} aria-label="Go back" className="justify-start">
          <Icon name="arrow-left" size={31} />
        </Button>
        <h1 className="mx-auto pr-12 text-[24px] font-bold text-[#0d652f] md:text-[29px]">
          Confirm Withdrawal
        </h1>
      </header>

      <section className="relative mt-16 overflow-hidden rounded-[26px] border border-[#ededed] bg-white px-5 pb-7 pt-10 shadow-[0_12px_18px_rgba(32,51,40,.10)] sm:px-7 md:mt-12 md:rounded-[30px] md:px-12 md:pb-10 md:pt-12">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[110px] bg-[#063d27] opacity-95" />

        <div className="relative border-b border-[#dfdfdf] pb-10 text-center md:pb-12">
          <p className="text-[16px] text-[#555] md:text-[20px]">Withdrawal Amount</p>
          <p className="mt-5 text-[34px] font-semibold leading-none tracking-[-1.5px] md:text-[47px]">
            ₦{amount.toLocaleString("en-NG")}
          </p>
        </div>

        <dl className="grid gap-8 px-2 py-9 text-[17px] md:gap-10 md:px-0 md:py-12 md:text-[22px]">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-[#555]">Bank</dt>
            <dd className="flex items-center gap-2 font-semibold">
              <span className="h-3 w-3 rounded-full bg-[#063d27]" /> GTBank
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-[#555]">Account</dt>
            <dd className="font-semibold">•••• 4821</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-[#555]">Time</dt>
            <dd className="font-semibold">Instant</dd>
          </div>
        </dl>

        <div className="flex gap-4 rounded-[17px] border border-[#dfdfdf] bg-white px-4 py-5 md:px-6 md:py-6">
          <Icon name="shield" size={31} />
          <p className="text-[14px] font-medium leading-relaxed text-[#555] md:text-[19px]">
            Make sure your bank account details are correct before proceeding. Transactions are final.
          </p>
        </div>
      </section>

      <Button size="large" fullWidth onClick={() => setShowPin(true)} className="mt-10">
        Confirm
      </Button>

      {showPin && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#d9e2db]/55 backdrop-blur-[3px] md:items-center"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowPin(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="withdraw-pin-title"
            className="mb-24 w-full rounded-t-[34px] bg-white px-7 pb-10 pt-12 shadow-[0_-12px_40px_rgba(4,31,22,.18)] md:mb-0 md:max-w-[620px] md:rounded-[34px] md:px-12"
          >
            <h2 id="withdraw-pin-title" className="text-center text-[25px] font-bold md:text-[31px]">
              Enter Wallet PIN
            </h2>
            <p className="mx-auto mt-5 max-w-[470px] text-center text-[18px] leading-relaxed text-[#555] md:text-[21px]">
              To confirm this withdrawal, enter your 4-digit PIN.
            </p>

            <div className="mt-10 grid grid-cols-4 gap-3 md:gap-5">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => { inputs.current[index] = element; }}
                  type="password"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => updatePin(index, event.target.value)}
                  onKeyDown={(event) => handlePinKeyDown(index, event)}
                  aria-label={`PIN digit ${index + 1}`}
                  className="h-20 w-full rounded-[16px] border border-[#dedede] text-center text-[23px] font-semibold outline-none focus:border-[#0d652f] md:h-24"
                />
              ))}
            </div>

            <Button
              size="success"
              fullWidth
              disabled={pin.some((digit) => !digit)}
              onClick={() => navigate("/withdraw/success", { state: { amount } })}
              className="mt-10 md:text-[23px]"
            >
              Confirm Withdrawal
            </Button>
          </section>
        </div>
      )}
    </div>
  );
}
