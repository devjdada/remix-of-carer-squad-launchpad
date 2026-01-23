import Navigation from "@/components/Navigation";
import { Users, Target, Heart, Award } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
const About = () => {
  const milestones = [{
    year: "2019",
    title: "Foundation",
    description: "CARER SQUAD was established with a vision to empower youth"
  }, {
    year: "2020",
    title: "Expansion",
    description: "Launched 10+ new training programmes"
  }, {
    year: "2022",
    title: "Recognition",
    description: "Received prestigious accolades for youth empowerment within and outside the commission"
  }, {
    year: "2024",
    title: "Growth",
    description: "Trained over 500 students with 85% success rate"
  }];
  const values = [{
    icon: <Target size={40} className="text-sky" />,
    title: "Excellence",
    description: "We strive for excellence in every programme, ensuring our students receive world-class training."
  }, {
    icon: <Users size={40} className="text-lime" />,
    title: "Community",
    description: "Building a supportive community where learners grow together and support each other's success."
  }, {
    icon: <Heart size={40} className="text-sky" />,
    title: "Empowerment",
    description: "Empowering young minds with skills and confidence to succeed in the modern workforce."
  }, {
    icon: <Award size={40} className="text-lime" />,
    title: "Innovation",
    description: "Constantly updating our curriculum to match industry trends and emerging technologies."
  }];
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">CARER SQUAD</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We're on a mission to transform lives through quality skills training, 
              creating opportunities for young adults to thrive in the modern economy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                ​Carer’s Squad is a service unit established in August 2019 to support challenged and indigent members of the church through structured empowerment and welfare initiatives. Operating under the leadership of Pastor Dennis Allagoa and a dedicated executive team, the Squad provides practical support across key areas including skill acquisition, educational assistance, transportation, welfare distribution, and medical intervention.
              </p>
              <p>
                ​Our flagship Skill Acquisition Program trains members in vocational fields such as tailoring, ICT, hairdressing, catering, welding, scaffolding, makeup, and driving. Graduates receive start-up kits that enable them to begin earning immediately and build sustainable livelihoods. Through additional interventions—such as funding student fees, providing food and clothing, supporting medical cases, and facilitating transportation for new members—Carer’s Squad remains committed to uplifting the church community with compassion, structure, and measurable impact.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-accent" />
              
              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`} style={{
                animationDelay: `${index * 0.2}s`
              }}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-card p-6 rounded-2xl shadow-lg hover-lift">
                        <div className="text-3xl font-bold text-sky mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-lime rounded-full transform -translate-x-1/2 border-4 border-background" />
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => <div key={index} className="text-center p-6 rounded-2xl bg-card hover-lift animate-scale-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="inline-block p-4 rounded-2xl bg-muted mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Behind CARER SQUAD is a dedicated team of educators, industry professionals, 
              and support staff committed to your success. Our instructors bring years of 
              real-world experience and a passion for teaching the next generation.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-2xl hover-lift">
                <div className="w-24 h-24 rounded-full bg-gradient-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-1">Leadership Team</h3>
                <p className="text-sm text-muted-foreground">Experienced educators and business leaders</p>
              </div>
              <div className="p-6 bg-card rounded-2xl hover-lift">
                <div className="w-24 h-24 rounded-full bg-gradient-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-1">Instructors</h3>
                <p className="text-sm text-muted-foreground">Industry professionals with hands-on expertise</p>
              </div>
              <div className="p-6 bg-card rounded-2xl hover-lift">
                <div className="w-24 h-24 rounded-full bg-gradient-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-1">Support Staff</h3>
                <p className="text-sm text-muted-foreground">Dedicated to your learning experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;