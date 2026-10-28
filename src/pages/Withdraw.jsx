import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";

const quickAmounts = ["₦10,000", "₦50,000", "₦100,000", "₦150,000"];

export default function Withdraw() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("50000");

  return (
    <div className="mx-auto max-w-[1120px]">
      <header className="flex h-[58px] items-center md:h-20">
        <Button variant="icon" size="icon" onClick={() => navigate(-1)} aria-label="Go back" className="justify-start">
          <Icon name="arrow-left" size={31} />
        </Button>
        <h1 className="mx-auto pr-12 text-[24px] font-bold text-[#0d652f] md:text-[29px]">Withdraw</h1>
      </header>

      <div className="mt-16 md:mt-12">
        <h2 className="text-[25px] font-semibold leading-tight md:text-[31px]">Withdraw Funds</h2>
        <p className="mt-3 text-[17px] text-[#3f413f] md:text-[20px]">
          Transfer available funds to your bank account.
        </p>

        <section className="mt-9 rounded-[26px] border border-[#ededed] bg-white px-5 pb-7 pt-6 shadow-[0_12px_18px_rgba(32,51,40,.10)] sm:px-7 md:mt-10 md:rounded-[30px] md:px-10 md:pb-10 md:pt-8">
          <label htmlFor="withdraw-amount" className="text-[18px] font-semibold md:text-[21px]">
            Enter withdrawal amount
          </label>
          <input
            id="withdraw-amount"
            inputMode="numeric"
            value={amount}
            onChange={(event) => setAmount(event.target.value.replace(/[^0-9]/g, ""))}
            className="mt-5 h-20 w-full rounded-[17px] border border-[#dedede] px-5 text-[26px] font-semibold outline-none focus:border-[#0d652f] md:h-[92px] md:text-[31px]"
          />
          <p className="mt-4 flex items-center gap-2 text-[13px] text-[#777] md:text-[15px]">
            <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-[#777] text-[11px] font-bold">i</span>
            You can withdraw up to ₦245,000.
          </p>

          <div className="-mr-5 mt-12 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] sm:-mr-7 md:-mr-10 md:mt-14">
            {quickAmounts.map((quickAmount) => {
              const numericAmount = quickAmount.replace(/[^0-9]/g, "");
              const active = amount === numericAmount;
              return (
                <Button
                  key={quickAmount}
                  variant="amount"
                  size="small"
                  active={active}
                  onClick={() => setAmount(numericAmount)}
                  className="h-auto min-w-[158px] rounded-full px-5 py-3 text-[16px] md:min-w-[180px] md:py-4 md:text-[19px]"
                >
                  {quickAmount}
                </Button>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-[26px] border border-[#ededed] bg-white px-5 py-7 shadow-[0_12px_18px_rgba(32,51,40,.10)] sm:px-7 md:mt-10 md:rounded-[30px] md:px-10 md:py-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-semibold md:text-[24px]">Withdraw To</h2>
              <p className="mt-3 text-[16px] text-[#4a4b49] md:text-[20px]">Withdraw into your personal account</p>
            </div>
            <Button variant="ghost" size="small" className="shrink-0 px-0 text-[14px] md:text-[18px]">
              Change Account
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-[20px] border border-[#dedede] px-4 py-5 md:px-8">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#f5f7f5] md:h-20 md:w-20">
              <Icon name="bank" size={31} />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <strong className="text-[17px] md:text-[23px]">GTBank</strong>
                <span className="rounded-full bg-[#dff0e5] px-3 py-1.5 text-[11px] font-semibold uppercase text-[#0d652f] md:text-[14px]">
                  ◆ VERIFIED
                </span>
              </div>
              <p className="mt-2 truncate text-[15px] text-[#595b59] md:text-[20px]">Samuel Okoye •••• 4821</p>
            </div>
          </div>
        </section>

        <Button
          size="large"
          fullWidth
          onClick={() => navigate("/withdraw/confirm", { state: { amount } })}
          disabled={!amount || Number(amount) <= 0}
          className="mt-10"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
