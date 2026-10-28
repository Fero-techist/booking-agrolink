import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";

export default function WithdrawalSuccess() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const amount = Number(state?.amount || 50000);

  return (
    <div className="mx-auto min-h-[calc(100svh-74px)] max-w-[1120px] px-1 pb-24 pt-16 md:flex md:min-h-[calc(100svh-160px)] md:items-center md:pb-0 md:pt-0">
      <section className="w-full rounded-[34px] bg-white px-6 py-12 text-center shadow-[0_18px_40px_rgba(4,31,22,.08)] sm:px-10 md:rounded-[40px] md:px-16 md:py-14">
        <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border-[9px] border-[#063d27] bg-white md:h-36 md:w-36">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[#063d27] text-white md:h-24 md:w-24">
            <Icon name="check" size={43} />
          </span>
        </div>

        <h1 className="mt-8 text-[28px] font-bold leading-tight md:text-[38px]">Transaction Successful</h1>
        <p className="mt-4 text-[18px] leading-relaxed text-[#555] md:text-[22px]">
          We're processing your request.
        </p>

        <dl className="mt-12 grid gap-7 rounded-[20px] border border-[#dfdfdf] px-6 py-7 text-left text-[16px] md:gap-8 md:px-10 md:py-9 md:text-[21px]">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-[#555]">Amount</dt>
            <dd className="font-semibold">₦{amount.toLocaleString("en-NG")}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-[#555]">Type</dt>
            <dd className="font-semibold">Withdrawal</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-[#555]">Status</dt>
            <dd className="flex items-center gap-2 rounded-full bg-[#dff0e5] px-4 py-2 font-semibold text-[#0d652f]">
              <span aria-hidden="true">↻</span> Successful
            </dd>
          </div>
        </dl>

        <div className="mt-10 grid gap-5">
          <Button
            size="success"
            fullWidth
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            Done
          </Button>
          <Button
            variant="outline"
            size="success"
            fullWidth
            onClick={() => navigate("/withdraw/transaction", { state: { amount } })}
            className="rounded-full"
          >
            View Transaction
          </Button>
        </div>
      </section>
    </div>
  );
}
