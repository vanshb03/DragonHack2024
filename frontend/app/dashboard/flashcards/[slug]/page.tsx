import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Flashcard from "../_components/Flashcard";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="w-full h-dvh flex justify-center items-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <Flashcard key={index} question="What the sigma" answer="I am sigma" />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}