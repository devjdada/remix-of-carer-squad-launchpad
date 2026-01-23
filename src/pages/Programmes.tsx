import Navigation from "@/components/Navigation";
import ProgrammeCard from "@/components/ProgrammeCard";
import { 
  Scissors, 
  Sparkles, 
  ChefHat, 
  Flame,
  Laptop,
  HardDrive,
  Car,
  Search,
  Anchor,
  Paintbrush,
  Gem
} from "lucide-react";

const Programmes = () => {
  const programmes = [
    {
      title: "Tailoring & Fashion Design",
      description: "Learn garment construction, pattern cutting, sewing mastery, and finishing techniques—preparing trainees for careers in fashion or independent tailoring.",
      duration: "6 Months",
      level: "Beginner",
      icon: <Scissors size={32} className="text-sky" />
    },
    {
      title: "Hairdressing & Hair Braiding",
      description: "Gain practical skills in hair styling, braiding techniques, hair treatments, and salon operations for both professional and personal beauty businesses.",
      duration: "4 Months",
      level: "Beginner",
      icon: <Scissors size={32} className="text-lime" />
    },
    {
      title: "Makeup Artistry",
      description: "Structured training in modern makeup techniques, product application, and client preparation for beauty, bridal, and event work.",
      duration: "3 Months",
      level: "Beginner",
      icon: <Sparkles size={32} className="text-sky" />
    },
    {
      title: "Catering & Culinary Skills",
      description: "Hands-on culinary training covering baking, pastry, food preparation, hygiene, and small-scale catering business setup.",
      duration: "5 Months",
      level: "Beginner",
      icon: <ChefHat size={32} className="text-lime" />
    },
    {
      title: "Welding & Fabrication",
      description: "Technical instruction in welding processes, metal fabrication, and safety procedures suitable for industrial and commercial construction environments.",
      duration: "6 Months",
      level: "Intermediate",
      icon: <Flame size={32} className="text-sky" />
    },
    {
      title: "ICT (Information & Communication Technology)",
      description: "Digital literacy and software training that equips participants with essential computer and productivity skills for today's workplace.",
      duration: "4 Months",
      level: "Beginner",
      icon: <Laptop size={32} className="text-lime" />
    },
    {
      title: "ICT Hardware",
      description: "Practical training on computer hardware installation, troubleshooting, repairs, upgrades, diagnostics, and maintenance for ICT support roles.",
      duration: "5 Months",
      level: "Intermediate",
      icon: <HardDrive size={32} className="text-sky" />
    },
    {
      title: "Driving",
      description: "A structured driving program designed to teach safe driving, road rules, vehicle handling, and preparation for official licensing.",
      duration: "2 Months",
      level: "Beginner",
      icon: <Car size={32} className="text-lime" />
    },
    {
      title: "NDT – Non-Destructive Testing",
      description: "Specialized training in industrial inspection techniques that assess the integrity of materials and equipment without causing damage—ideal for oil & gas, manufacturing, and engineering sectors.",
      duration: "4 Months",
      level: "Advanced",
      icon: <Search size={32} className="text-sky" />
    },
    {
      title: "Rigging",
      description: "Hands-on instruction in lifting operations, load management, safety procedures, and equipment handling for rigging roles in construction and industrial environments.",
      duration: "5 Months",
      level: "Intermediate",
      icon: <Anchor size={32} className="text-lime" />
    },
    {
      title: "Painting",
      description: "Training in professional painting techniques, surface preparation, coatings application, and finishing methods for decorative or industrial painting work.",
      duration: "3 Months",
      level: "Beginner",
      icon: <Paintbrush size={32} className="text-sky" />
    },
    {
      title: "Bead Making & Fascinator Crafting",
      description: "Creative skills development in bead design, jewelry creation, and fascinator craftsmanship—perfect for fashion accessories, bridal work, or small business startups.",
      duration: "3 Months",
      level: "Beginner",
      icon: <Gem size={32} className="text-lime" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Training <span className="text-lime">Programmes</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Choose from our comprehensive range of industry-leading programmes designed 
              to equip you with in-demand skills for the modern workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Programme Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programmes.map((programme, index) => (
                <div key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                  <ProgrammeCard {...programme} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Programmes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Why Choose Our <span className="text-gradient">Programmes</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-card hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-sky">Hands-On Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every programme includes real-world projects and practical assignments. 
                  You'll build a portfolio of work that showcases your skills to potential employers.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-lime">Industry Certification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Earn recognized certifications upon completion that validate your skills 
                  and make your resume stand out in the job market.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-sky">Expert Instructors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn from professionals currently working in the industry who bring 
                  real-world insights and current best practices to every session.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-lime">Career Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get job placement assistance, resume reviews, interview preparation, 
                  and access to our network of hiring partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Your Learning Journey</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-muted/50 hover-lift">
                <div className="text-4xl font-bold text-sky mb-3">01</div>
                <h3 className="font-bold mb-2">Enroll</h3>
                <p className="text-sm text-muted-foreground">Choose your programme and register online</p>
              </div>

              <div className="p-6 rounded-2xl bg-muted/50 hover-lift">
                <div className="text-4xl font-bold text-lime mb-3">02</div>
                <h3 className="font-bold mb-2">Learn</h3>
                <p className="text-sm text-muted-foreground">Attend classes and complete projects</p>
              </div>

              <div className="p-6 rounded-2xl bg-muted/50 hover-lift">
                <div className="text-4xl font-bold text-sky mb-3">03</div>
                <h3 className="font-bold mb-2">Practice</h3>
                <p className="text-sm text-muted-foreground">Build your portfolio with real work</p>
              </div>

              <div className="p-6 rounded-2xl bg-muted/50 hover-lift">
                <div className="text-4xl font-bold text-lime mb-3">04</div>
                <h3 className="font-bold mb-2">Succeed</h3>
                <p className="text-sm text-muted-foreground">Get certified and land your dream job</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;
