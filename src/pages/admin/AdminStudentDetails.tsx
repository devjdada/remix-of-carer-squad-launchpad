import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Calendar, GraduationCap, CheckCircle, XCircle, Clock, User } from "lucide-react";

type StudentStatus = "pending" | "approved" | "rejected";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  programme: string;
  appliedDate: string;
  status: StudentStatus;
  address?: string;
  dateOfBirth?: string;
  education?: string;
  message?: string;
}

const mockStudents: Student[] = [
  { id: "1", name: "John Doe", email: "john@example.com", phone: "+1234567890", programme: "Hairdressing", appliedDate: "2024-01-15", status: "pending", address: "123 Main St, City", dateOfBirth: "1998-05-20", education: "High School Diploma", message: "I am passionate about hairdressing and want to pursue it as a career." },
  { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "+1234567891", programme: "Barbering", appliedDate: "2024-01-14", status: "approved", address: "456 Oak Ave, Town", dateOfBirth: "1999-08-15", education: "Some College", message: "Looking forward to learning new techniques in barbering." },
  { id: "3", name: "Mike Johnson", email: "mike@example.com", phone: "+1234567892", programme: "Beauty Therapy", appliedDate: "2024-01-13", status: "pending", address: "789 Pine Rd, Village", dateOfBirth: "2000-02-10", education: "High School Diploma", message: "I want to help people feel beautiful and confident." },
  { id: "4", name: "Sarah Williams", email: "sarah@example.com", phone: "+1234567893", programme: "Nail Technology", appliedDate: "2024-01-12", status: "rejected", address: "321 Elm St, City", dateOfBirth: "1997-11-25", education: "Associate Degree", message: "Nail art is my passion and I want to master it professionally." },
  { id: "5", name: "David Brown", email: "david@example.com", phone: "+1234567894", programme: "Hairdressing", appliedDate: "2024-01-11", status: "approved", address: "654 Maple Dr, Town", dateOfBirth: "1998-03-30", education: "High School Diploma", message: "I have always been interested in styling and cutting hair." },
];

const statusConfig: Record<StudentStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline"; icon: typeof Clock }> = {
  pending: { label: "Pending", variant: "secondary", icon: Clock },
  approved: { label: "Approved", variant: "default", icon: CheckCircle },
  rejected: { label: "Rejected", variant: "destructive", icon: XCircle },
};

export default function AdminStudentDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const student = mockStudents.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="space-y-6 animate-fade-in">
        <Button variant="ghost" onClick={() => navigate("/admin/students")} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Students
        </Button>
        <Card className="border-border">
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Student not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const status = statusConfig[student.status];
  const StatusIcon = status.icon;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate("/admin/students")} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Students
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2 text-destructive hover:text-destructive">
            <XCircle className="w-4 h-4" /> Reject
          </Button>
          <Button className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> Approve
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Info Card */}
        <Card className="border-border md:col-span-2">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-foreground text-2xl">{student.name}</CardTitle>
                  <CardDescription>Application ID: #{student.id}</CardDescription>
                </div>
              </div>
              <Badge variant={status.variant} className="flex items-center gap-1">
                <StatusIcon className="w-3 h-3" />
                {status.label}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">{student.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground">{student.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Date of Birth</p>
                  <p className="text-sm font-medium text-foreground">{student.dateOfBirth || "N/A"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <GraduationCap className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Education</p>
                  <p className="text-sm font-medium text-foreground">{student.education || "N/A"}</p>
                </div>
              </div>
            </div>

            {student.address && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Address</h4>
                <p className="text-sm text-muted-foreground">{student.address}</p>
              </div>
            )}

            {student.message && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Personal Statement</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{student.message}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Application Details Card */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground text-lg">Application Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground">Programme Applied</p>
              <p className="text-sm font-medium text-foreground">{student.programme}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Applied Date</p>
              <p className="text-sm font-medium text-foreground">{student.appliedDate}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Current Status</p>
              <Badge variant={status.variant} className="flex items-center gap-1 w-fit mt-1">
                <StatusIcon className="w-3 h-3" />
                {status.label}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
