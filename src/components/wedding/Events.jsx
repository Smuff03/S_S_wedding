import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Shirt, ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { WEDDING } from "@/data/weddingData";
import { Lotus } from "./Monogram";
import { MaskedLines, FadeUp, Eyebrow } from "./Motion";
const formatDate = (iso) => {
  const d = new Date(iso);
  const day = d.getDate();
  const suffix = (day % 10 === 1 && day !== 11) ? 'st' : (day % 10 === 2 && day !== 12) ? 'nd' : (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
  const month = d.toLocaleString('en-US', { month: 'short' });
  const year = d.getFullYear();
  const hour24 = d.getHours();
  const hour = hour24 % 12 === 0 ? 12 : hour24 % 12;
  const minute = d.getMinutes().toString().padStart(2, '0');
  const ampm = hour24 >= 12 ? 'pm' : 'am';
  return `${day}${suffix} ${month} ${year} ${hour}:${minute} ${ampm}`;
};

const MetaRow = ({ icon: Icon, label, value }) => (
    <div className="flex items-start gap-4">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-goldlight">
            <Icon size={13} strokeWidth={1.7} />
        </span>
        <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-ivory/45">{label}</p>
            <p className="mt-1 text-sm leading-relaxed text-ivory/85 md:text-[15px]">{value}</p>
        </div>
    </div>
);

const EventRow = ({ ev, i }) => {
    const { t, lang } = useLang();
    const flip = i % 2 === 1;

    return (
        <div
            data-testid={`event-card-${ev.id}`}
            className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-20"
        >
            <FadeUp className={`relative ${flip ? "lg:order-2" : ""}`}>
                <p className="text-stroke-gold font-cinzel pointer-events-none absolute -top-12 left-0 z-10 text-7xl md:text-8xl">
                    {ev.num}
                </p>
                <div
                    className={`relative overflow-hidden ${i % 2 === 0 ? "arch" : ""}`}
                    style={{ boxShadow: "0 40px 90px rgba(0,0,0,0.4)" }}
                >
                    <motion.img
                        src={ev.img}
                        alt={ev.name[lang]}
                        loading="lazy"
                        initial={{ scale: 1.12 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.06]"
                    />
                    <div
                        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                        style={{ background: `linear-gradient(160deg, ${ev.accent}33, transparent 60%)` }}
                    />
                </div>
                <div className={`pointer-events-none absolute -inset-3 border border-gold/25 ${i % 2 === 0 ? "arch" : ""}`} />
            </FadeUp>

            <div className={flip ? "lg:order-1" : ""}>
                <FadeUp>
                    <p className="font-cinzel text-xs tracking-[0.4em]" style={{ color: ev.accent }}>
                        {ev.num} — {t.events.eyebrow}
                    </p>
                    <h3 className="mt-4 font-serif text-4xl text-ivory md:text-5xl">
                        {ev.name[lang]}
                    </h3>
                </FadeUp>
                <FadeUp delay={0.15} className="mt-9 space-y-5">
                    <MetaRow icon={Calendar} label={t.events.datetime} value={formatDate(ev.start)} />
                    <a href={ev.maps} target="_blank" rel="noopener noreferrer" className="inline-block"><MetaRow icon={MapPin} label={t.events.venue} value={ev.venue} />
<MetaRow icon={MapPin} label={t.events.address} value={ev.address} /></a>
                    <a href={ev.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center ml-2">
                      <MapPin size={18} strokeWidth={1.8} className="text-goldlight" />
                    </a>
                    <MetaRow icon={Shirt} label={t.events.dress} value={ev.note} />
                </FadeUp>
                <FadeUp delay={0.25}>
                    <a
                        data-testid={`event-directions-${ev.id}`}
                        href={ev.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-flex items-center gap-2 border border-gold/50 px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.28em] text-goldlight transition-all duration-300 hover:bg-gold hover:text-burgundydeep"
                    >
                        {t.events.directions}
                        <MapPin size={13} strokeWidth={1.8} />
                    </a>
                </FadeUp>
            </div>
        </div>
    );
};

export const Events = () => {
    const { t } = useLang();
    return (
        <section
            id="events"
            data-testid="events"
            className="relative overflow-hidden bg-[#FAF9F6] px-6 py-24 text-ivory md:px-14 md:py-36 lg:px-20"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,164,106,0.1),transparent_55%)]" />
            <Lotus className="animate-spin-slower absolute -left-32 top-1/3 h-[460px] w-[460px] opacity-[0.05]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <Eyebrow className="justify-center">{t.events.eyebrow}</Eyebrow>
                    <MaskedLines
                        lines={[t.events.heading]}
                        className="mt-8 font-serif text-4xl text-ivory md:text-6xl"
                    />
                    <FadeUp delay={0.2}>
                        <p className="mt-6 font-serif text-lg italic text-ivory/60">
                            {t.events.sub}
                        </p>
                    </FadeUp>
                </div>

                <div className="mt-8 divide-y divide-gold/15">
                    {WEDDING.events.map((ev, i) => (
                        <EventRow key={ev.id} ev={ev} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
