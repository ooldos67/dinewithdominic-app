"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Recipe = {
  title: string;
  image: string;
  description: string;
};

const recipes: Recipe[] = [
  {
    title: "Spaghetti Carbonara",
    image: "/recipes/carbonara.jpg",
    description:
      "A classic Roman pasta with eggs, cheese, pancetta, and pepper.",
  },
  {
    title: "Thai Green Curry",
    image: "/recipes/green-curry.jpg",
    description: "Creamy, spicy curry made with fresh herbs and coconut milk.",
  },
  {
    title: "Avocado Toast",
    image: "/recipes/avocado-toast.jpg",
    description:
      "Sourdough toast topped with smashed avocado and chili flakes.",
  },
];

export default function FeaturedRecipes() {
  return (
    <div className="flex items-center justify-center">
      <Carousel className="w-full max-w-fit">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
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
