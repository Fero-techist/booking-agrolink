import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import WalletBalanceCard from "../components/WalletBalanceCard.jsx";

const sessions = [
  { icon: "phone", title: "Online Call: John Doe", time: "Today, 10:00 AM" },
  { icon: "farm", title: "Farm Visit: Jane Smith", time: "Tomorrow, 2:00 PM" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <WalletBalanceCard onWithdraw={() => navigate("/withdraw")} />

      <section className="mt-10 md:mt-[61px]">
        <div className="mb-7 flex items-center justify-between md:mb-[43px]">
          <h2 className="m-0 text-[20px] font-bold tracking-[-1px] sm:text-[23px] md:text-[27px]">
            Upcoming Sessions
          </h2>
          <Button
            variant="ghost"
            size="small"
            className="gap-2 px-0 text-[15px] sm:text-[16px] md:gap-3 md:text-[20px]"
          >
            View All{" "}
            <Icon
              name="arrow"
              size={24}
            />
          </Button>
        </div>
        <div className="grid gap-4 sm:gap-6">
          {sessions.map((session) => (
            <article
              className="grid min-h-24.5 grid-cols-[58px_1fr_25px] items-center gap-3 rounded-3xl border border-[#eee] bg-white px-3.5 py-4 text-left shadow-[0_15px_22px_rgba(32,51,40,.10)] sm:min-h-[116px] sm:grid-cols-[66px_1fr_30px] sm:gap-4 sm:rounded-[27px] sm:px-4 md:min-h-[142px] md:grid-cols-[86px_1fr_58px] md:gap-[22px] md:rounded-[35px] md:px-7"
              key={session.title}
            >
              <div className="grid h-14.5 w-14.5 place-items-center rounded-[18px] bg-white text-[#188445] shadow-[0_10px_18px_rgba(0,0,0,.07)] sm:h-[66px] sm:w-[66px] sm:rounded-[20px] md:h-[86px] md:w-[86px] md:rounded-3xl">
                <Icon
                  name={session.icon}
                  size={25}
                />
              </div>
              <div className="min-w-0">
                <h3 className="mb-2 text-[15px] font-semibold leading-[1.05] sm:text-[17px] md:mb-4 md:text-[23px]">
                  {session.title}
                </h3>
                <p className="m-0 text-[13px] leading-none text-[#929292] sm:text-[14px] md:text-[19px]">
                  {session.time}
                </p>
              </div>
              <Button
                variant="icon"
                size="icon"
                className="h-12 w-12 place-self-center justify-self-center"
                aria-label={`Save ${session.title}`}
              >
                <Icon
                  name="bookmark"
                  size={21}
                />
              </Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
