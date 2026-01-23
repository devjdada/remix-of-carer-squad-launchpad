import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  programme: string;
  quote: string;
  rating?: number;
}

const TestimonialCard = ({ name, programme, quote, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="p-6 hover-lift transition-all duration-300 animate-fade-in relative overflow-hidden">
      {/* Decorative Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10">
        <Quote size={60} className="text-sky" />
      </div>

      <div className="space-y-4 relative z-10">
        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-lime text-lime" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-lg leading-relaxed italic text-foreground">
          "{quote}"
        </p>

        {/* Student Info */}
        <div className="pt-4 border-t border-border">
          <div className="font-bold text-lg">{name}</div>
          <div className="text-sm text-muted-foreground">{programme}</div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent" />
    </Card>
  );
};

export default TestimonialCard;
