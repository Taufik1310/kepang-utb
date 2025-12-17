import Typography from "@/components/_shared/Typography";
import AboutHistoryTimeline from "./Timeline";

export default function AboutHistory() {
  return (
    <section className="mt-4 px-6 md:mt-20 md:px-32 lg:px-48">
      <Typography animate size="title" weight="bold" text="SEJARAH SINGKAT" />
      <AboutHistoryTimeline />
    </section>
  );
}
