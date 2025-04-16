import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface RecipeCardProps {
  imageUrl: string;
  title: string;
  cookingTime: string;
}

export default function RecipeCard({
  imageUrl,
  title,
  cookingTime,
}: RecipeCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={400}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">⏱ {cookingTime}</p>
      </CardContent>
    </Card>
  );
}
