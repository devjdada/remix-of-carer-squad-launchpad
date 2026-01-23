import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Handshake, Award, Users, Target } from "lucide-react";

const Partners = () => {
  const partners = [
    { name: "Tech Solutions Ltd", role: "Technology Partner" },
    { name: "Creative Agency Co", role: "Design Partner" },
    { name: "Digital Marketing Hub", role: "Industry Partner" },
    { name: "Innovation Center", role: "Training Partner" },
    { name: "Skills Foundation", role: "Education Partner" },
    { name: "Youth Empowerment Org", role: "Community Partner" },
    { name: "Career Development Institute", role: "Career Partner" },
    { name: "Deacons Board", role: "Support Partner" },
  ];

  const acknowledgments = [
    {
      icon: <Award size={40} className="text-lime" />,
      title: "Pastoral Board",
      description: "We're grateful for the support and prayers from the State Pastor, Resident Pastor and Asst. Pastor, amongst other which has made our mission possible and seamless."
    },
    {
      icon: <Users size={40} className="text-sky" />,
      title: "Carer's Squad Committee",
      description: "Thank you to the members of the Carer's Squad Committee who champion youth empowerment and skills development within the commission."
    },
    {
      icon: <Handshake size={40} className="text-lime" />,
      title: "Industry Experts",
      description: "Our instructors and mentors from leading companies who share their expertise with our students."
    },
    {
      icon: <Target size={40} className="text-sky" />,
      title: "Donors & Sponsors",
      description: "Generous sponsors who provide scholarships and resources to deserving students."
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
              Our <span className="text-lime">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Together, we're building a brighter future for young professionals. 
              Thank you to our partners and supporters who make our mission possible.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Strategic <span className="text-gradient">Partners</span>
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-accent mx-auto mb-4" />
                  <h3 className="font-bold mb-1">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Special <span className="text-gradient">Acknowledgments</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {acknowledgments.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-8 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-4 rounded-2xl bg-muted flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Become a <span className="text-gradient">Partner</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Join us in empowering the next generation! Partner organizations benefit from:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover-lift">
                <h3 className="text-lg font-bold mb-2 text-sky">Talent Pipeline</h3>
                <p className="text-muted-foreground">
                  Access to skilled graduates trained in modern, in-demand skills
                </p>
              </Card>

              <Card className="p-6 hover-lift">
                <h3 className="text-lg font-bold mb-2 text-lime">Brand Visibility</h3>
                <p className="text-muted-foreground">
                  Showcase your commitment to youth development and community impact
                </p>
              </Card>

              <Card className="p-6 hover-lift">
                <h3 className="text-lg font-bold mb-2 text-sky">Custom Training</h3>
                <p className="text-muted-foreground">
                  Collaborate on curriculum development aligned with your industry needs
                </p>
              </Card>

              <Card className="p-6 hover-lift">
                <h3 className="text-lg font-bold mb-2 text-lime">Social Impact</h3>
                <p className="text-muted-foreground">
                  Make a meaningful difference in your community through skills development
                </p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Interested in partnering with CARER SQUAD?
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 bg-lime text-graphite font-bold rounded-xl hover:bg-lime/90 hover-glow transition-all"
              >
                Contact Us About Partnerships
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
