import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export default function MerchProductDetailGallery({
  pics,
}: {
  pics: string[];
}) {
  return (
    <div className="flex w-full items-center justify-center p-4 lg:w-7/12 lg:p-0">
      <Carousel className="w-10/12 md:w-8/12 lg:w-6/12">
        <CarouselContent>
          {pics.map((pic, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square w-full">
                <Image src={`${pic}`} alt={pic} fill className="object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
