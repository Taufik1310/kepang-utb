import Typography from "@/components/_shared/Typography";
import AboutHistoryTimeline from "./Timeline";

export default function AboutHistory() {
  return (
    <section className="mt-32 px-6 md:px-32 lg:px-48">
      <Typography animate size="title" weight="bold" text="SEJARAH SINGKAT" />
      <AboutHistoryTimeline />
    </section>
  );
}
