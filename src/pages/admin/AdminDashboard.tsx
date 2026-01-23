import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Handshake, GraduationCap, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Total Students",
    value: "156",
    change: "+12 this month",
    icon: Users,
    href: "/admin/students",
    color: "bg-sky",
  },
  {
    title: "Testimonials",
    value: "24",
    change: "+3 pending review",
    icon: MessageSquare,
    href: "/admin/testimonials",
    color: "bg-lime",
  },
  {
    title: "Partners",
    value: "18",
    change: "2 new this month",
    icon: Handshake,
    href: "/admin/partners",
    color: "bg-secondary",
  },
  {
    title: "Programmes",
    value: "8",
    change: "All active",
    icon: GraduationCap,
    href: "/admin/programmes",
    color: "bg-primary",
  },
];

const recentActivities = [
  { action: "New student application", name: "John Doe", time: "2 hours ago", type: "student" },
  { action: "Testimonial submitted", name: "Sarah Smith", time: "5 hours ago", type: "testimonial" },
  { action: "Partner agreement signed", name: "Tech Corp", time: "1 day ago", type: "partner" },
  { action: "Programme updated", name: "Web Development", time: "2 days ago", type: "programme" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Welcome Back!</h2>
        <p className="text-muted-foreground mt-1">Here's what's happening with your academy today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link key={stat.title} to={stat.href}>
            <Card className="hover-lift cursor-pointer border-border hover:border-primary/50 transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-4 h-4 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Activity</CardTitle>
          <CardDescription>Latest updates from your academy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="p-2 rounded-full bg-primary/10">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.name}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
