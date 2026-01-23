import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProgrammeCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: React.ReactNode;
  backgroundImage?: string;
}

const ProgrammeCard = ({ title, description, duration, level, icon, backgroundImage }: ProgrammeCardProps) => {
  return (
    <Card className="group p-6 hover-lift hover:border-sky transition-all duration-300 animate-fade-in relative overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-20 transition-opacity duration-300"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="space-y-4 relative z-10">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-sky/10 to-lime/10 w-fit group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-sky transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="px-3 py-1 rounded-full bg-muted">
            <span className="font-medium">Duration:</span> {duration}
          </div>
          <div className="px-3 py-1 rounded-full bg-muted">
            <span className="font-medium">Level:</span> {level}
          </div>
        </div>

        <Link to="/registration">
          <Button variant="ghost" className="group/btn mt-2 text-sky hover:text-sky">
            Learn More 
            <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProgrammeCard;
