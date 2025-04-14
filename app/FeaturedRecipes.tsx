"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card, CardContent } from "@/components/ui/card";
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
    <div className="text-center w-full max-w-2xl mx-auto">
      <h2 className="text-xl my-4">Featured Recipes</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="rounded-2xl"
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <div className="relative h-56 w-full rounded-xl overflow-hidden mb-4">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {recipe.description}
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
