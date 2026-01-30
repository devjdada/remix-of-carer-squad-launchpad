import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, UserPlus } from "lucide-react";

const AdminRegister = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock registration simulation
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Registration Successful",
                description: "Your admin account has been created. Please login.",
            });
            navigate("/admin/login");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-muted/30">
            <Navigation />

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-md mx-auto">
                    <Card className="animate-fade-in shadow-lg border-primary/10">
                        <CardHeader className="text-center space-y-2">
                            <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                                <UserPlus className="text-primary" size={24} />
                            </div>
                            <CardTitle className="text-2xl font-bold">Create Admin Account</CardTitle>
                            <CardDescription>
                                Register for an administrator account
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit}>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="admin@example.com"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Create a password"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm your password"
                                        required
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="flex-col space-y-4">
                                <Button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Creating Account..." : "Register"}
                                    {!isLoading && <ArrowRight className="ml-2" size={16} />}
                                </Button>
                                <div className="text-center text-sm text-muted-foreground">
                                    Already have an admin account?{" "}
                                    <Link to="/admin/login" className="text-primary font-medium hover:underline">
                                        Login
                                    </Link>
                                </div>
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AdminRegister;
