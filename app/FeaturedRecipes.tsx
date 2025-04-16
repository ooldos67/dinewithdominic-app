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
import RecipeCard from "@/components/RecipeCard";

type Recipe = {
  title: string;
  imageURL: string;
  cookingTime: string;
  description?: string;
};

const recipes: Recipe[] = [
  {
    imageURL: "/recipes/carbonara.jpg",
    title: "Spaghetti Carbonara",
    cookingTime: "20 mins",
    description:
      "A classic Roman pasta with eggs, cheese, pancetta, and pepper.",
  },
  {
    imageURL: "/recipes/green-curry.jpg",
    title: "Thai Green Curry",
    cookingTime: "30 mins",
    description: "Creamy, spicy curry made with fresh herbs and coconut milk.",
  },
  {
    imageURL: "/recipes/avocado-toast.jpg",
    title: "Avocado Toast",
    cookingTime: "10 mins",
    description:
      "Sourdough toast topped with smashed avocado and chili flakes.",
  },
  ,
  {
    imageURL: "/recipes/green-curry.jpg",
    title: "Thai Green Curry",
    cookingTime: "30 mins",
    description: "Creamy, spicy curry made with fresh herbs and coconut milk.",
  },
  {
    imageURL: "/recipes/avocado-toast.jpg",
    title: "Avocado Toast",
    cookingTime: "10 mins",
    description:
      "Sourdough toast topped with smashed avocado and chili flakes.",
  },
  {
    imageURL: "/recipes/green-curry.jpg",
    title: "Thai Green Curry",
    cookingTime: "30 mins",
    description: "Creamy, spicy curry made with fresh herbs and coconut milk.",
  },
  {
    imageURL: "/recipes/avocado-toast.jpg",
    title: "Avocado Toast",
    cookingTime: "10 mins",
    description:
      "Sourdough toast topped with smashed avocado and chili flakes.",
  },
  {
    imageURL: "/recipes/green-curry.jpg",
    title: "Thai Green Curry",
    cookingTime: "30 mins",
    description: "Creamy, spicy curry made with fresh herbs and coconut milk.",
  },
  {
    imageURL: "/recipes/avocado-toast.jpg",
    title: "Avocado Toast",
    cookingTime: "10 mins",
    description:
      "Sourdough toast topped with smashed avocado and chili flakes.",
  },
];

export default function FeaturedRecipes() {
  return (
    <div className="flex items-center justify-center">
      <Carousel className="w-full max-w-5xl">
        <CarouselContent className="-ml-1">
          {recipes.map((recipe, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-2">
                <RecipeCard
                  imageUrl={recipe.imageURL}
                  title={recipe.title}
                  cookingTime={recipe.cookingTime}
                />
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
