import Navigation from "@/components/Navigation";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
const Mission = () => {
  const coreValues = [{
    icon: <Heart size={40} className="text-lime" />,
    title: "Empowerment",
    description: "We believe in empowering every individual with the skills and confidence needed to succeed in their chosen career path."
  }, {
    icon: <Lightbulb size={40} className="text-sky" />,
    title: "Innovation",
    description: "We constantly evolve our curriculum and teaching methods to stay ahead of industry trends and technological advances."
  }, {
    icon: <Target size={40} className="text-lime" />,
    title: "Excellence",
    description: "We're committed to delivering world-class training that meets and exceeds international standards of quality."
  }, {
    icon: <Eye size={40} className="text-sky" />,
    title: "Transparency",
    description: "We operate with honesty and integrity, building trust through open communication and accountability."
  }];
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Mission <span className="text-lime">&</span> Vision
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Driving change through education, one skilled professional at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block p-4 rounded-2xl bg-lime/10 mb-6">
                  <Target size={60} className="text-lime" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    To provide accessible, high-quality skills training that empowers young adults 
                    to secure meaningful employment and build successful careers in the modern economy.
                  </p>
                  <p>To provide structured support to members through skill acquisition programs, educational interventions, transportation assistance, empowerment initiatives, welfare distribution, and medical support—ensuring that individuals are equipped with practical tools, resources, and opportunities for sustainable personal and economic growth.</p>
                  <p>
                    Through hands-on training, expert mentorship, and industry partnerships, we 
                    transform potential into performance, helping our students not just find jobs, 
                    but launch fulfilling careers.
                  </p>
                </div>
              </div>

              <div className="space-y-6 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <Card className="p-6 hover-lift bg-gradient-to-br from-sky/5 to-lime/5">
                  <h3 className="font-bold text-xl mb-3 text-sky">Accessible Education</h3>
                  <p className="text-muted-foreground">
                    Making quality skills training available to all, regardless of background or financial status.
                  </p>
                </Card>

                <Card className="p-6 hover-lift bg-gradient-to-br from-lime/5 to-sky/5">
                  <h3 className="font-bold text-xl mb-3 text-lime">Industry-Relevant</h3>
                  <p className="text-muted-foreground">
                    Curriculum designed in partnership with employers to teach skills that matter today.
                  </p>
                </Card>

                <Card className="p-6 hover-lift bg-gradient-to-br from-sky/5 to-lime/5">
                  <h3 className="font-bold text-xl mb-3 text-sky">Career Success</h3>
                  <p className="text-muted-foreground">
                    Supporting students from enrollment through job placement and beyond.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6 animate-fade-in">
                <Card className="p-6 hover-lift bg-gradient-to-br from-lime/5 to-sky/5">
                  <h3 className="font-bold text-xl mb-3 text-lime">Regional Leadership</h3>
                  <p className="text-muted-foreground">
                    Become the leading skills training institution across West Africa.
                  </p>
                </Card>

                <Card className="p-6 hover-lift bg-gradient-to-br from-sky/5 to-lime/5">
                  <h3 className="font-bold text-xl mb-3 text-sky">1,000+ Graduates</h3>
                  <p className="text-muted-foreground">
                    Train over 1,000 skilled professionals in the next five years.
                  </p>
                </Card>

                <Card className="p-6 hover-lift bg-gradient-to-br from-lime/5 to-sky/5">
                  <h3 className="font-bold text-xl mb-3 text-lime">Innovation Hub</h3>
                  <p className="text-muted-foreground">
                    Create an innovation center where students can launch startups and projects.
                  </p>
                </Card>
              </div>

              <div className="order-1 md:order-2 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="inline-block p-4 rounded-2xl bg-sky/10 mb-6">
                  <Eye size={60} className="text-sky" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    To build a self-sufficient and empowered church community where challenged and indigent members gain access to skills, education, welfare, and support systems that enable them to achieve stable livelihoods and contribute productively to society.
                  </p>
                  <p>
                    We envision a future where unemployment among youth is dramatically reduced 
                    because they possess the practical, market-ready skills employers need.
                  </p>
                  <p>
                    By 2030, we aim to have trained over 1,000 successful professionals who are 
                    contributing meaningfully to their communities and the economy, creating a 
                    ripple effect of prosperity and opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Our Core <span className="text-gradient">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from curriculum design to student support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => <Card key={index} className="p-8 text-center hover-lift animate-scale-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="inline-block p-4 rounded-2xl bg-muted mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our <span className="text-gradient">Impact Goals</span>
            </h2>

            <div className="space-y-6">
              <Card className="p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-4xl font-bold text-lime">01</div>
                  <h3 className="text-2xl font-bold">Youth Unemployment Reduction</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Contribute to reducing youth unemployment by 20% in our community through 
                  comprehensive skills training and job placement support.
                </p>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-4xl font-bold text-sky">02</div>
                  <h3 className="text-2xl font-bold">Economic Empowerment</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Enable 1,000+ students annually to increase their earning potential by 
                  at least 50% within one year of graduation.
                </p>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-4xl font-bold text-lime">03</div>
                  <h3 className="text-2xl font-bold">Community Development</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Create a sustainable ecosystem where our graduates give back by mentoring 
                  new students and investing in their communities.
                </p>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-4xl font-bold text-sky">04</div>
                  <h3 className="text-2xl font-bold">Investment in Growth</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Consistently invest in vocational training, educational support, and start-up tools, 
                  empowering individuals with practical skills and resources to achieve self-reliance and long-term productivity.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Mission;