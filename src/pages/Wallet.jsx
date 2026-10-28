import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import WalletBalanceCard from "../components/WalletBalanceCard.jsx";

const transactions = [
  { title: "Fund Wallet", date: "17:31:02 - 12/09/2025", type: "IN", status: "Successful" },
  { title: "Osun Valley Farms", date: "17:31:02 - 12/09/2025", type: "OUT", status: "Successful" },
  { title: "Fund Wallet", date: "17:31:02 - 12/09/2025", type: "IN", status: "Successful" },
  { title: "Osun Valley Farms", date: "17:31:02 - 12/09/2025", type: "OUT", status: "Successful" },
];

export default function Wallet() {
  const navigate = useNavigate();

  return (
    <>
      <WalletBalanceCard onWithdraw={() => navigate("/withdraw")} />

      <section className="mt-10 md:mt-[61px]">
        <div className="mb-7 flex items-center justify-between md:mb-[43px]">
          <h2 className="m-0 text-[20px] font-bold tracking-[-1px] sm:text-[23px] md:text-[27px]">
            Transaction History
          </h2>
          <Button variant="ghost" size="small" className="px-0 text-[15px] sm:text-[16px] md:text-[20px]">
            See all
          </Button>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {transactions.map((transaction, index) => (
            <article
              key={`${transaction.title}-${index}`}
              className="grid min-h-[98px] grid-cols-[1fr_auto] items-center gap-x-3 rounded-[24px] border border-[#eee] bg-white px-5 py-5 shadow-[0_15px_22px_rgba(32,51,40,.10)] sm:min-h-[116px] sm:rounded-[27px] sm:px-7 md:min-h-[142px] md:rounded-[35px] md:px-10"
            >
              <h3 className="text-[15px] font-semibold leading-none sm:text-[17px] md:text-[22px]">{transaction.title}</h3>
              <span
                className={`rounded-full px-3 py-2 text-[11px] font-semibold leading-none md:text-[14px] ${
                  transaction.type === "IN"
                    ? "bg-[#dff0e5] text-[#19833a]"
                    : "bg-[#ffefdf] text-[#d66b17]"
                }`}
              >
                {transaction.type} <span aria-hidden="true">{transaction.type === "IN" ? "↙" : "↗"}</span>
              </span>

              <p className="mt-7 text-[13px] leading-none text-[#8f918e] sm:text-[14px] md:text-[19px]">
                {transaction.date}
              </p>
              <p className="mt-7 text-right text-[13px] leading-none text-[#8f918e] sm:text-[14px] md:text-[19px]">
                {transaction.status}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
