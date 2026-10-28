import Button from "./Button.jsx";
import Icon from "./Icon.jsx";

export default function WalletBalanceCard({
  balance = "₦12,540.00",
  totalBookings = 9,
  pendingBookings = 3,
  onWithdraw,
}) {
  return (
    <section
      className="min-h-[278px] rounded-[26px] px-7 py-6 text-white shadow-[0_18px_25px_rgba(0,0,0,.08)] sm:min-h-[390px] sm:rounded-[34px] sm:px-12 sm:py-10 md:min-h-[460px] md:rounded-[43px] md:px-[66px] md:pb-[38px] md:pt-14"
      style={{
        background:
          "radial-gradient(circle at 73% 10%, rgba(3,97,49,.3), transparent 32%), linear-gradient(145deg, #073e27 0%, #041f16 100%)",
      }}
    >
      <p className="mb-2 text-[14px] tracking-[.2px] text-white/90 sm:text-[16px] md:mb-3 md:text-[22px]">
        WALLET BALANCE
      </p>
      <p className="m-0 text-[34px] font-semibold leading-none tracking-[-2px] sm:text-[47px] md:text-[74px] md:tracking-[-3px]">
        {balance}
      </p>

      <div className="my-7 grid grid-cols-2 gap-3 sm:gap-6 md:mb-[34px] md:mt-[52px] md:gap-9">
        <div className="min-h-[64px] rounded-[13px] border border-[#64a278]/40 bg-[#104a30]/20 px-3.5 py-3 sm:min-h-[112px] sm:rounded-[21px] sm:px-7 sm:py-6 md:min-h-[130px] md:px-7 md:pb-5 md:pt-7">
          <span className="block text-[13px] leading-[1.1] text-[#60b77d] sm:text-[16px] md:text-[21px]">
            Total Bookings
          </span>
          <strong className="mt-2 block text-[22px] leading-none sm:mt-3 sm:text-[25px] md:mt-4 md:text-[31px]">
            {totalBookings}
          </strong>
        </div>
        <div className="min-h-[64px] rounded-[13px] border border-[#64a278]/40 bg-[#104a30]/20 px-3.5 py-3 sm:min-h-[112px] sm:rounded-[21px] sm:px-7 sm:py-6 md:min-h-[130px] md:px-7 md:pb-5 md:pt-7">
          <span className="block text-[13px] leading-[1.1] text-[#60b77d] sm:text-[16px] md:text-[21px]">
            Pending Bookings
          </span>
          <strong className="mt-2 block text-[22px] leading-none sm:mt-3 sm:text-[25px] md:mt-4 md:text-[31px]">
            {pendingBookings}
          </strong>
        </div>
      </div>

      <Button
        variant="secondary"
        size="large"
        fullWidth
        onClick={onWithdraw}
        className="gap-3 sm:h-[68px] sm:gap-4 sm:rounded-[16px] sm:text-[20px] md:gap-[18px] md:rounded-[18px] md:text-[25px]"
      >
        <Icon name="withdraw" size={27} />
        <span>Withdraw</span>
      </Button>
    </section>
  );
}
