import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";
const Hero = () => {
  return <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="CARER SQUAD Training" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Empower Your Future With{" "}
              <span className="text-lime">Skills That Matter</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Join CARER'S SQUAD and unlock your potential through hands-on training, expert mentorship, and real-world experience designed for your success.                
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/registration">
                <Button size="lg" className="bg-lime text-graphite hover:bg-lime/90 hover-glow text-lg px-8 py-6">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/programmes">
                <Button size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20 text-lg px-8 py-6">
                  Explore Programmes
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 animate-scale-in">
                <div className="p-3 rounded-xl bg-lime/20">
                  <Users className="text-lime" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">500+</div>
                  <div className="text-sm text-primary-foreground/80">Students Trained</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 animate-scale-in" style={{
              animationDelay: "0.1s"
            }}>
                <div className="p-3 rounded-xl bg-sky/20">
                  <Award className="text-sky" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">15+</div>
                  <div className="text-sm text-primary-foreground/80">Programmes</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 animate-scale-in" style={{
              animationDelay: "0.2s"
            }}>
                <div className="p-3 rounded-xl bg-lime/20">
                  <TrendingUp className="text-lime" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">85%</div>
                  <div className="text-sm text-primary-foreground/80">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>;
};
export default Hero;