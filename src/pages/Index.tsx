import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProgrammeCard from "@/components/ProgrammeCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import hairdressingBg from "@/assets/hairdressing-bg.jpg";
import {
  Scissors, 
  Sparkles, 
  ChefHat,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const featuredProgrammes = [
    {
      title: "Tailoring & Fashion Design",
      description: "Learn garment construction, pattern cutting, sewing mastery, and finishing techniques for careers in fashion or independent tailoring.",
      duration: "6 Months",
      level: "Beginner",
      icon: <Scissors size={32} className="text-sky" />
    },
    {
      title: "Hairdressing & Hair Braiding",
      description: "Gain practical skills in hair styling, braiding techniques, hair treatments, and salon operations for professional and personal beauty businesses.",
      duration: "4 Months",
      level: "Beginner",
      icon: <Scissors size={32} className="text-lime" />,
      backgroundImage: hairdressingBg
    },
    {
      title: "Catering & Culinary Skills",
      description: "Hands-on culinary training covering baking, pastry, food preparation, hygiene, and small-scale catering business setup.",
      duration: "5 Months",
      level: "Beginner",
      icon: <ChefHat size={32} className="text-sky" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      programme: "Digital Marketing Graduate",
      quote: "CARER SQUAD transformed my career! The hands-on training and supportive community gave me the confidence to launch my own digital agency."
    },
    {
      name: "Michael Chen",
      programme: "Web Development Graduate",
      quote: "The instructors are incredible, and the curriculum is super relevant to what employers actually want. Got hired before I even finished!"
    }
  ];

  const highlights = [
    "Industry-recognized certifications",
    "Flexible learning schedules",
    "Career support & job placement",
    "Modern facilities & equipment",
    "Skills/personal development",
    "Hands-on project-based learning"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">CARER SQUAD</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just another training center. We're your partner in building a successful future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="text-lime flex-shrink-0 mt-1" size={20} />
                <span className="font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programmes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Programmes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of industry-leading training programmes designed for today's job market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {featuredProgrammes.map((programme, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProgrammeCard {...programme} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/programmes">
              <Button size="lg" variant="outline" className="hover-lift">
                View All Programmes <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Student <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who are now thriving in their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials">
              <Button size="lg" variant="outline" className="hover-lift">
                Read More Stories <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl opacity-90">
              Join hundreds of successful graduates who transformed their lives with CARER SQUAD. Your future starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/registration">
                <Button size="lg" className="bg-lime text-graphite hover:bg-lime/90 hover-glow text-lg px-8 py-6">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20 text-lg px-8 py-6"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src={logo} 
                alt="Carer Squad Logo" 
                className="h-20 w-auto mb-4 brightness-0 invert drop-shadow-lg"
              />
              <p className="text-sm opacity-80">
                Empowering the next generation through skills-based training.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/about" className="hover:text-lime transition-colors">About</Link></li>
                <li><Link to="/programmes" className="hover:text-lime transition-colors">Programmes</Link></li>
                <li><Link to="/testimonials" className="hover:text-lime transition-colors">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Information</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/mission" className="hover:text-lime transition-colors">Mission & Vision</Link></li>
                <li><Link to="/partners" className="hover:text-lime transition-colors">Partners</Link></li>
                <li><Link to="/admission-status" className="hover:text-lime transition-colors">Admission Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Get Started</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/registration" className="hover:text-lime transition-colors">Apply Now</Link></li>
                <li><Link to="/contact" className="hover:text-lime transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm opacity-60 pt-8 border-t border-primary-foreground/10">
            © 2025 CARER SQUAD. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
