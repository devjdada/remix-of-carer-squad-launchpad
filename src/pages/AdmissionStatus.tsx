import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Search, CheckCircle, Clock, XCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdmissionStatus = () => {
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState<"admitted" | "pending" | "notselected" | null>(null);
  const [searching, setSearching] = useState(false);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue) {
      toast({
        title: "Error",
        description: "Please enter your application number or email",
        variant: "destructive",
      });
      return;
    }

    setSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, randomly assign status
      const statuses: ("admitted" | "pending" | "notselected")[] = ["admitted", "pending", "notselected"];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setStatus(randomStatus);
      setSearching(false);

      if (randomStatus === "admitted") {
        // Trigger confetti animation
        const duration = 3 * 1000;
        const end = Date.now() + duration;
        
        (function frame() {
          const timeLeft = end - Date.now();

          if (timeLeft <= 0) return;

          setTimeout(frame, Math.random() * 100);
        })();
      }
    }, 1500);
  };

  const resetSearch = () => {
    setStatus(null);
    setSearchValue("");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Check Your <span className="text-lime">Admission Status</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Enter your application number or email to check your admission status.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {!status ? (
              <Card className="p-8 animate-fade-in">
                <form onSubmit={handleSearch} className="space-y-6">
                  <div>
                    <Label htmlFor="search" className="text-lg">
                      Application Number or Email Address
                    </Label>
                    <Input
                      id="search"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Enter your application number or email"
                      className="mt-2 text-lg"
                      disabled={searching}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-lime text-graphite hover:bg-lime/90 hover-glow text-lg py-6"
                    disabled={searching}
                  >
                    {searching ? (
                      <>
                        <Clock className="mr-2 animate-spin" size={20} />
                        Checking Status...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2" size={20} />
                        Check Status
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                  <h3 className="font-bold mb-3">Important Information:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Admission results are updated regularly</li>
                    <li>• You will also receive an email notification</li>
                    <li>• For inquiries, contact admissions@carersquad.com</li>
                    <li>• If you don't remember your application number, use your email</li>
                  </ul>
                </div>
              </Card>
            ) : (
              <div className="animate-scale-in">
                {/* Admitted Status */}
                {status === "admitted" && (
                  <Card className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent" />
                    <div className="relative z-10 space-y-6">
                      <div className="inline-block p-6 rounded-full bg-lime/10 animate-glow">
                        <CheckCircle size={80} className="text-lime" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold text-lime mb-3">
                          🎉 Congratulations! 🎉
                        </h2>
                        <p className="text-2xl font-bold mb-2">You've Been Admitted!</p>
                        <p className="text-lg text-muted-foreground">
                          Welcome to CARER SQUAD! Check your email for next steps and orientation details.
                        </p>
                      </div>

                      <div className="p-6 bg-muted/50 rounded-xl text-left">
                        <h3 className="font-bold mb-3 text-lg">Next Steps:</h3>
                        <ol className="space-y-2 text-muted-foreground">
                          <li>1. Check your email for your admission letter</li>
                          <li>2. Complete the enrollment form by the deadline</li>
                          <li>3. Pay your tuition fees (payment plan options available)</li>
                          <li>4. Attend the orientation session (date in your email)</li>
                        </ol>
                      </div>

                      <Button
                        onClick={resetSearch}
                        variant="outline"
                        className="mt-4"
                      >
                        Check Another Application
                      </Button>
                    </div>
                  </Card>
                )}

                {/* Pending Status */}
                {status === "pending" && (
                  <Card className="p-8 text-center">
                    <div className="space-y-6">
                      <div className="inline-block p-6 rounded-full bg-sky/10">
                        <Clock size={80} className="text-sky" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold text-sky mb-3">
                          Application Under Review
                        </h2>
                        <p className="text-xl mb-2">Your Application is Being Processed</p>
                        <p className="text-lg text-muted-foreground">
                          We're currently reviewing your application. You'll receive an email 
                          notification once a decision has been made.
                        </p>
                      </div>

                      <div className="p-6 bg-muted/50 rounded-xl">
                        <p className="text-sm text-muted-foreground">
                          <strong>Estimated timeline:</strong> Decisions are typically made within 
                          5-7 business days of application submission. Please check back soon or 
                          watch your email for updates.
                        </p>
                      </div>

                      <Button
                        onClick={resetSearch}
                        variant="outline"
                        className="mt-4"
                      >
                        Check Another Application
                      </Button>
                    </div>
                  </Card>
                )}

                {/* Not Selected Status */}
                {status === "notselected" && (
                  <Card className="p-8 text-center">
                    <div className="space-y-6">
                      <div className="inline-block p-6 rounded-full bg-muted">
                        <XCircle size={80} className="text-muted-foreground" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold mb-3">
                          Not Selected This Round
                        </h2>
                        <p className="text-xl mb-2">Thank You for Your Application</p>
                        <p className="text-lg text-muted-foreground">
                          Unfortunately, we're unable to offer you admission at this time due to 
                          high competition and limited spaces.
                        </p>
                      </div>

                      <div className="p-6 bg-muted/50 rounded-xl text-left space-y-4">
                        <div>
                          <h3 className="font-bold mb-2">Don't Give Up!</h3>
                          <p className="text-sm text-muted-foreground">
                            You're welcome to reapply for our next intake. We also recommend:
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Strengthening your application with additional certifications</li>
                          <li>• Considering our other programme options</li>
                          <li>• Attending our free webinars and workshops</li>
                          <li>• Contacting us for feedback on your application</li>
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          onClick={resetSearch}
                          variant="outline"
                        >
                          Check Another Application
                        </Button>
                        <a href="/registration">
                          <Button className="bg-sky hover:bg-sky/90">
                            Apply for Next Intake
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you're having trouble checking your status or have questions about your application, 
              we're here to assist you.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover-lift">
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">admissions@carersquad.com</p>
              </Card>
              <Card className="p-6 hover-lift">
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground">+234 XXX XXX XXXX</p>
              </Card>
              <Card className="p-6 hover-lift">
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground">Mon-Fri, 9AM - 6PM</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionStatus;
