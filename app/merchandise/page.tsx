import MerchCatalog from "./_components/Catalog";
import MerchTitle from "./_components/Title";

export default function Merch() {
  return (
    <div className="mt-24 flex flex-col items-center gap-16 px-6 md:px-24 lg:px-32">
      <MerchTitle />
      <MerchCatalog />
    </div>
  );
}
