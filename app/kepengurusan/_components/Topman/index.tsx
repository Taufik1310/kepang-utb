import Typography from "@/components/_shared/Typography";
import ManagementTopmanChairman from "./Chairman";
import ManagementTopmanSecretary from "./Secretary";

export default function ManagementTopman() {
  return (
    <section className="mt-32 flex flex-col items-center justify-center px-6 md:px-24 lg:px-32">
      <Typography
        animate
        size="title"
        weight="bold"
        text="TOP MANAJEMEN ( TOPMAN )"
      />
      <div className="mt-12 flex flex-col gap-8">
        <ManagementTopmanChairman />
        <ManagementTopmanSecretary />
      </div>
    </section>
  );
}
