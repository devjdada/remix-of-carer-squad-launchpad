import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";

const AdminLogin = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock login simulation
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Admin Login Successful",
                description: "Welcome back, Admin!",
            });
            navigate("/admin");
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
                                <Lock className="text-primary" size={24} />
                            </div>
                            <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
                            <CardDescription>
                                Enter your credentials to access the dashboard
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit}>
                            <CardContent className="space-y-4">
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
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <Link to="#" className="text-sm text-primary hover:underline">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
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
                                    {isLoading ? "Authenticating..." : "Sign In"}
                                    {!isLoading && <ArrowRight className="ml-2" size={16} />}
                                </Button>
                                <div className="text-center text-sm text-muted-foreground">
                                    Don't have an admin account?{" "}
                                    <Link to="/admin/register" className="text-primary font-medium hover:underline">
                                        Register
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

export default AdminLogin;
