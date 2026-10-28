import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";

const statuses = ["New", "Accepted", "Declined"];

const requests = [
  {
    id: 1,
    status: "New",
    initials: "BA",
    name: "Bisi Adeyemi",
    specialization: "Sunrise Poultry",
    location: "Ibadan, Oyo",
    topic: "Poor weight gain in 4-week broilers",
    date: "9 Oct",
    time: "10:00–11:00 WAT",
    consultation: "Online call",
    amount: "₦10,000",
    age: "15 min ago",
    reply: "Reply by 18:00 today",
  },
  {
    id: 2,
    status: "New",
    initials: "TB",
    name: "Tunde Balogun",
    specialization: "Poultry",
    location: "Abeokuta, Ogun",
    topic: "Housing & biosecurity review",
    date: "12 Oct",
    time: "09:00 WAT",
    consultation: "Farm visit",
    amount: "₦25,000",
    age: "New request",
    reply: "Received today",
  },
  {
    id: 3,
    status: "New",
    initials: "GE",
    name: "Grace Eze",
    specialization: "Livestock",
    location: "Ibadan, Oyo",
    topic: "Feed planning for a small goat herd",
    date: "13 Oct",
    time: "14:00–15:00 WAT",
    consultation: "Online call",
    amount: "₦10,000",
    age: "New request",
    reply: "Received today",
  },
  {
    id: 4,
    status: "Accepted",
    initials: "KO",
    name: "Kunle Ogunleye",
    specialization: "Dairy",
    location: "Iseyin, Oyo",
    topic: "Milk quality improvement plan",
    date: "14 Oct",
    time: "11:30 WAT",
    consultation: "Farm visit",
    amount: "₦30,000",
    age: "Accepted",
    reply: "Confirmed yesterday",
  },
  {
    id: 5,
    status: "Declined",
    initials: "AN",
    name: "Amaka Nwosu",
    specialization: "Crop",
    location: "Enugu",
    topic: "Maize disease diagnosis",
    date: "8 Oct",
    time: "09:00 WAT",
    consultation: "Online call",
    amount: "₦8,000",
    age: "Declined",
    reply: "Reviewed yesterday",
  },
];

export default function Bookings() {
  const navigate = useNavigate();
  const [activeStatus, setActiveStatus] = useState("New");
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const visibleRequests = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return requests.filter((request) => {
      const matchesStatus = request.status === activeStatus;
      const matchesQuery = !normalizedQuery || [
        request.name,
        request.specialization,
        request.location,
        request.topic,
      ].some((value) => value.toLowerCase().includes(normalizedQuery));

      return matchesStatus && matchesQuery;
    });
  }, [activeStatus, query]);

  const counts = Object.fromEntries(statuses.map((status) => [
    status,
    requests.filter((request) => request.status === status).length,
  ]));

  return (
    <section className="pb-5 md:pb-10">
      <header className="max-w-4xl">
        <h1 className="m-0 text-[26px] font-bold leading-[1.08] tracking-[-.8px] text-[#063d27] sm:text-[29px] md:text-[34px]">
          Consultation requests
        </h1>
        <p className="mt-3 max-w-[590px] text-[14px] leading-[1.45] text-[#858a86] sm:text-[15px] md:mt-4 md:text-[18px]">
          Review farm needs and choose how you can help.
        </p>
      </header>

      <div className="mt-10 grid h-[58px] grid-cols-3 items-center rounded-[15px] bg-white p-1 shadow-[0_12px_30px_rgba(17,42,27,.025)] md:mt-14 md:h-[78px] md:rounded-[18px]">
        {statuses.map((status) => (
          <Button
            key={status}
            variant="ghost"
            size="small"
            active={activeStatus === status}
            onClick={() => setActiveStatus(status)}
            className={`h-full min-w-0 rounded-[11px] px-1 text-[13px] transition-all duration-200 sm:text-[14px] md:text-[17px] ${activeStatus === status ? "bg-white font-bold text-[#063d27] shadow-[0_8px_18px_rgba(17,42,27,.09)] hover:bg-white" : "text-[#858a86]"}`}
            aria-pressed={activeStatus === status}
          >
            {status} ({counts[status]})
          </Button>
        ))}
      </div>

      <div className="relative mt-7 md:mt-9">
        <label className="flex h-[58px] items-center gap-3 rounded-[15px] bg-white px-5 shadow-[0_12px_30px_rgba(17,42,27,.025)] md:h-[78px] md:rounded-[18px] md:px-7">
          <Icon name="search" size={27} />
          <span className="sr-only">Search requests</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by farmer or farm name"
            className="min-w-0 flex-1 border-0 bg-transparent text-[14px] text-[#18251d] outline-none placeholder:text-[#8a8d89] sm:text-[14px] md:text-[16px]"
          />
        </label>
        <Button
          variant="icon"
          size="icon"
          onClick={() => setShowFilters((current) => !current)}
          className="absolute right-1 top-1/2 h-[52px] w-[52px] -translate-y-1/2 md:right-3 md:h-[64px] md:w-[64px]"
          aria-label="Toggle filters"
          aria-expanded={showFilters}
        >
          <Icon name="filter" size={27} />
        </Button>
        {showFilters && (
          <div           className="absolute right-0 top-[66px] z-10 w-[190px] rounded-2xl border border-[#edf0ed] bg-white p-3 text-[13px] shadow-xl md:top-[86px] md:text-[14px]">
            Showing {activeStatus.toLowerCase()} requests
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-7 md:mt-12 md:gap-9">
        {visibleRequests.map((request) => (
          <article
            key={request.id}
            className="relative rounded-[23px] border border-[#eff1ee] bg-white px-5 py-5 shadow-[0_13px_24px_rgba(20,48,30,.09)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_rgba(20,48,30,.12)] sm:px-7 sm:py-7 md:rounded-[30px] md:p-8"
          >
            <div className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[14px] md:text-[16px]">
              <span className={`rounded-[8px] px-3 py-1.5 text-[11px] leading-none sm:text-[12px] md:text-[13px] ${request.status === "New" ? "bg-[#fff2d9] text-[#9a6a13]" : request.status === "Accepted" ? "bg-[#e7f4eb] text-[#1a7136]" : "bg-[#f1eeee] text-[#777777]"}`}>
                {request.age}
              </span>
              <span className="text-[#8c928d]">{request.reply}</span>
            </div>

            <div className="mt-6 grid grid-cols-[52px_1fr] items-center gap-4 md:mt-8 md:grid-cols-[82px_1fr] md:gap-6">
              <div className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#f1f2f0] text-[19px] font-bold text-[#063d27] md:h-[82px] md:w-[82px] md:text-[26px]">
                {request.initials}
              </div>
              <div className="min-w-0">
                <h2 className="m-0 text-[16px] font-bold leading-none md:text-[20px]">{request.name}</h2>
                <p className="mt-2.5 text-[13px] leading-none text-[#858a86] md:mt-3 md:text-[14px]">
                  {request.specialization} · {request.location}
                </p>
              </div>
            </div>

            <h3 className="mb-3 mt-6 text-[15px] font-semibold leading-[1.25] md:mb-4 md:mt-7 md:text-[18px]">
              {request.topic}
            </h3>
            <p className="m-0 text-[13px] leading-none text-[#8a8f8b] md:text-[14px]">
              {request.date} · {request.time}
            </p>

            <div className="mt-7 flex items-center gap-3 md:mt-9">
              <span className={`rounded-[8px] px-3 py-1.5 text-[13px] leading-none md:px-4 md:py-2 md:text-[14px] ${request.consultation === "Online call" ? "bg-[#dff1e7] text-[#063d27]" : "bg-[#eef4e8] text-[#063d27]"}`}>
                {request.consultation}
              </span>
              <strong className="text-[15px] md:text-[18px]">{request.amount}</strong>
            </div>

            <Button
              size="success"
              fullWidth
              className="mt-7 md:mt-9"
              onClick={() => navigate(`/bookings/${request.id}`, { state: { request } })}
            >
              Review request
            </Button>
          </article>
        ))}

        {visibleRequests.length === 0 && (
          <div className="rounded-[23px] bg-white p-10 text-center text-[15px] text-[#858a86] shadow-[0_13px_24px_rgba(20,48,30,.08)]">
            No {activeStatus.toLowerCase()} requests found.
          </div>
        )}
      </div>
    </section>
  );
}
