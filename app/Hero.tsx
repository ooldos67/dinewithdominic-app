import { Button } from "@/components/ui/button";
import React from "react";

export default function Hero() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Eat real food.</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Find your next midweek meal, sweet snack, quick fix, special salad,
          mouthwatering marvel or weeekend wonder!
        </p>
        <Button className="my-5" variant="custom">
          Explore
        </Button>
      </div>
    </div>
  );
}
