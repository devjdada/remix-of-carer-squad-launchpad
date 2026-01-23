import Navigation from "@/components/Navigation";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Empowering Digital Futures",
      programme: "ICT Graduate (2021)",
      quote: "Through the Carer's Squad ICT training program, one of our participants transitioned from limited digital exposure to becoming fully equipped with employable tech skills. After completing the program, the graduate received a laptop during the empowerment ceremony—an essential tool that enabled an immediate start in offering ICT services. Today, they are building a sustainable income stream, showcasing the transformative power of structured digital training."
    },
    {
      name: "From Training to Culinary Enterprise",
      programme: "Catering Graduate (2021)",
      quote: "The catering program produced an outstanding success story as one trainee excelled through intensive hands-on sessions. During the empowerment phase, they received an industrial oven, burners, and a gas cylinder—tools that allowed them to start their own catering operations immediately after graduation. Their journey demonstrates how practical training and proper equipment can turn passion into a thriving business."
    },
    {
      name: "Stitching Pathways to Livelihood",
      programme: "Tailoring & Fashion Graduate (2022)",
      quote: "A 2022 beneficiary of the tailoring and fashion design program showed remarkable growth throughout the training cycle. With transportation support, training materials, and a brand-new sewing machine provided by the Squad, this graduate quickly launched their tailoring services. They now serve paying clients and contribute meaningfully to their household income, embodying the core mission of empowerment through skills."
    },
    {
      name: "Securing a Student's Future",
      programme: "Education Support Beneficiary",
      quote: "One of our most impactful interventions came through supporting an indigent student whose academic journey was at risk due to financial hardship. By partnering with the Deacons Board and Children's Church leadership, Carer's Squad ensured the student's school fees were fully covered. This timely support kept the student in school and opened the door to a more stable future—reflecting our commitment to educational upliftment."
    },
    {
      name: "Building a Beauty Business",
      programme: "Hairdressing Graduate (2022)",
      quote: "A participant in the hairdressing program emerged as a shining example of what empowerment can achieve. After months of hands-on training, the graduate was equipped with a complete start-up kit—including a wash basin, attachments, styling tools, and a hand dryer. With these resources, they established a small but steadily growing salon. Their success highlights how skill acquisition can translate into long-term economic independence."
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
              Success <span className="text-lime">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Real stories from real graduates who transformed their lives with CARER SQUAD. 
              Join them on the path to success!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-card hover-lift">
              <div className="text-5xl font-bold text-sky mb-2">500+</div>
              <div className="text-muted-foreground">Graduates</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card hover-lift">
              <div className="text-5xl font-bold text-lime mb-2">85%</div>
              <div className="text-muted-foreground">Job Placement Rate</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card hover-lift">
              <div className="text-5xl font-bold text-sky mb-2">15+</div>
              <div className="text-muted-foreground">Training Programmes</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card hover-lift">
              <div className="text-5xl font-bold text-lime mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Video Testimonials</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Hear directly from our graduates about their journey with CARER SQUAD
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center hover-lift">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-muted-foreground">Video testimonials coming soon!</p>
                </div>
              </div>
              <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center hover-lift">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-muted-foreground">More success stories on the way!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
