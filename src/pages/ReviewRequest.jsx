import { useLocation, useNavigate, useParams } from "react-router-dom";
import chick from "../assets/cick.svg";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";

const requestFallback = {
  id: 1,
  initials: "BA",
  name: "Bisi Adeyemi",
  specialization: "Sunrise Poultry",
  location: "Ibadan, Oyo",
  topic: "Poor weight gain in 4-week broilers",
  date: "Fri, 9 Oct 2026",
  time: "10:00–11:00",
  consultation: "Online call",
  amount: "₦10,000",
};

export default function ReviewRequest() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { requestId } = useParams();
  const request = state?.request ?? requestFallback;

  return (
    <section className="pb-8">
      <Button
        variant="icon"
        size="icon"
        onClick={() => navigate(-1)}
        aria-label="Back to requests"
        className="mb-3 -ml-3 md:hidden"
      >
        <Icon
          name="arrow-left"
          size={27}
        />
      </Button>

      <header>
        <h1 className="m-0 text-[26px] font-bold leading-[1.08] tracking-[-.8px] text-[#063d27] sm:text-[29px] md:text-[34px]">
          Review requests
        </h1>
        <p className="mt-3 text-[14px] leading-[1.4] text-[#858a86] sm:text-[14px] md:mt-4 md:text-[16px]">
          Request #AG-104{requestId} · Received 8 Oct
        </p>
      </header>

      <div className="mt-7 rounded-[18px] border border-[#edf0ed] bg-white px-5 py-5 shadow-[0_12px_26px_rgba(20,48,30,.06)] sm:px-7 md:mt-9 md:rounded-[24px] md:px-8 md:py-7">
        <span className="inline-flex rounded-[8px] bg-[#fff1d8] px-3 py-2 text-[12px] leading-none text-[#a56b11] md:text-[13px]">
          Awaiting your response
        </span>

        <div className="mt-6 grid grid-cols-[52px_1fr] items-center gap-4 md:mt-7 md:grid-cols-[72px_1fr]">
          <div className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#edf5f0] text-[18px] font-bold text-[#063d27] md:h-[72px] md:w-[72px] md:text-[22px]">
            {request.initials}
          </div>
          <div>
            <h2 className="m-0 text-[17px] font-bold md:text-[22px]">
              {request.name}
            </h2>
            <p className="mt-2 text-[13px] leading-none text-[#858a86] md:text-[14px]">
              {request.specialization} · {request.location}
            </p>
          </div>
        </div>

        <dl className="mt-7 grid grid-cols-[82px_1fr] gap-x-4 gap-y-4 text-[14px] md:mt-8 md:grid-cols-[160px_1fr] md:gap-x-8 md:gap-y-5 md:text-[16px]">
          <dt className="text-[#858a86]">Session</dt>
          <dd className="m-0 font-semibold">{request.date}</dd>
          <dt className="text-[#858a86]">Time</dt>
          <dd className="m-0 font-semibold">{request.time} · WAT</dd>
          <dt className="text-[#858a86]">Format</dt>
          <dd className="m-0 font-semibold">
            {request.consultation} · English
          </dd>
          <dt className="text-[#858a86]">Fee</dt>
          <dd className="m-0 font-semibold">{request.amount} · 1 hour</dd>
        </dl>
      </div>

      <article className="mt-8 md:mt-10">
        <h2 className="m-0 text-[21px] font-bold tracking-[-.4px] text-[#063d27] md:text-[25px]">
          Farmer's concern
        </h2>
        <h3 className="mt-5 text-[16px] font-semibold leading-[1.35] md:text-[19px]">
          {request.topic}
        </h3>
        <p className="mt-4 text-[15px] leading-[1.55] text-[#202521] md:text-[17px]">
          “My broilers are eating well but gaining weight slowly. The litter is
          wet near the drinkers. Can you review my feeding and housing routine?”
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:gap-5">
          <img
            src={chick}
            alt="Young chicks gathered together"
            className="aspect-[1.05] w-full rounded-[14px] object-cover"
          />
          <img
            src={chick}
            alt="Close-up of chicks"
            className="aspect-[1.05] w-full rounded-[14px] object-cover"
          />
        </div>
        <p className="mt-4 text-[13px] text-[#858a86] md:text-[14px]">
          Submitted in English · First consultation
        </p>
      </article>

      <footer className="mt-8 border-t border-[#edf0ed] pt-7 md:mt-10 md:pt-9">
        <Button
          variant="outline"
          size="large"
          fullWidth
        >
          Decline request
        </Button>
        <Button
          size="large"
          fullWidth
          className="mt-4"
        >
          Accept & confirm session
        </Button>
        <p className="mt-5 text-[13px] leading-[1.5] text-[#858a86] md:text-[14px]">
          Please respond by 18:00 WAT today. Declining lets the farmer find
          another consultant.
        </p>
      </footer>
    </section>
  );
}
