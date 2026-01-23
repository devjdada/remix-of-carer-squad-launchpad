import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CheckCircle, Upload, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    // In production, this would submit to backend
  };

  const nextStep = () => setStep(Math.min(step + 1, 4));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your <span className="text-lime">Journey</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Complete the registration form below to apply for your chosen programme.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= num 
                        ? 'bg-lime text-graphite' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step > num ? <CheckCircle size={20} /> : num}
                    </div>
                    {num < 4 && (
                      <div className={`flex-1 h-1 mx-2 transition-all ${
                        step > num ? 'bg-lime' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Personal Info</span>
                <span>Contact</span>
                <span>Programme</span>
                <span>Documents</span>
              </div>
            </div>

            <Card className="p-8 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required placeholder="Enter first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required placeholder="Enter last name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input id="dob" type="date" required />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Input id="nationality" required placeholder="Enter nationality" />
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required placeholder="your.email@example.com" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required placeholder="+234 XXX XXX XXXX" />
                    </div>

                    <div>
                      <Label htmlFor="address">Home Address *</Label>
                      <Textarea id="address" required placeholder="Enter your full address" rows={3} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" required placeholder="Enter city" />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input id="state" required placeholder="Enter state" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Programme Selection */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Programme Selection</h2>
                    
                    <div>
                      <Label htmlFor="programme">Choose Programme *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a programme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="graphic-design">Graphic Design</SelectItem>
                          <SelectItem value="data-analytics">Data Analytics</SelectItem>
                          <SelectItem value="social-media">Social Media Management</SelectItem>
                          <SelectItem value="photography">Photography & Videography</SelectItem>
                          <SelectItem value="mobile-dev">Mobile App Development</SelectItem>
                          <SelectItem value="content-creation">Content Creation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="startDate">Preferred Start Date *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select start date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jan-2025">January 2025</SelectItem>
                          <SelectItem value="feb-2025">February 2025</SelectItem>
                          <SelectItem value="mar-2025">March 2025</SelectItem>
                          <SelectItem value="apr-2025">April 2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="education">Highest Education Level *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="secondary">Secondary School</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="motivation">Why do you want to join this programme? *</Label>
                      <Textarea 
                        id="motivation" 
                        required 
                        placeholder="Tell us about your goals and motivation..." 
                        rows={4} 
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Document Upload */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Upload Documents</h2>
                    
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-sky transition-colors">
                        <Upload className="mx-auto mb-3 text-muted-foreground" size={40} />
                        <Label htmlFor="passport" className="cursor-pointer">
                          <span className="text-sky font-medium">Upload Passport Photo</span>
                          <p className="text-sm text-muted-foreground mt-1">JPG or PNG, max 2MB</p>
                        </Label>
                        <Input id="passport" type="file" accept="image/*" className="hidden" />
                      </div>

                      <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-sky transition-colors">
                        <Upload className="mx-auto mb-3 text-muted-foreground" size={40} />
                        <Label htmlFor="certificate" className="cursor-pointer">
                          <span className="text-sky font-medium">Upload Educational Certificate</span>
                          <p className="text-sm text-muted-foreground mt-1">PDF, max 5MB</p>
                        </Label>
                        <Input id="certificate" type="file" accept=".pdf" className="hidden" />
                      </div>

                      <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-sky transition-colors">
                        <Upload className="mx-auto mb-3 text-muted-foreground" size={40} />
                        <Label htmlFor="assessment" className="cursor-pointer">
                          <span className="text-sky font-medium">Upload Assessment (if applicable)</span>
                          <p className="text-sm text-muted-foreground mt-1">PDF, max 5MB</p>
                        </Label>
                        <Input id="assessment" type="file" accept=".pdf" className="hidden" />
                      </div>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-xl">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> All documents will be securely stored and used only for 
                        registration purposes. You'll receive an email confirmation once your application 
                        is submitted.
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2" size={16} />
                      Previous
                    </Button>
                  )}
                  
                  {step < 4 ? (
                    <Button type="button" onClick={nextStep} className="ml-auto bg-sky hover:bg-sky/90">
                      Next
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="ml-auto bg-lime text-graphite hover:bg-lime/90 hover-glow"
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
