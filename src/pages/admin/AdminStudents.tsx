import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreHorizontal, Eye, CheckCircle, XCircle, Clock } from "lucide-react";

type StudentStatus = "pending" | "approved" | "rejected";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  programme: string;
  appliedDate: string;
  status: StudentStatus;
}

const mockStudents: Student[] = [
  { id: "1", name: "John Doe", email: "john@example.com", phone: "+1234567890", programme: "Hairdressing", appliedDate: "2024-01-15", status: "pending" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "+1234567891", programme: "Barbering", appliedDate: "2024-01-14", status: "approved" },
  { id: "3", name: "Mike Johnson", email: "mike@example.com", phone: "+1234567892", programme: "Beauty Therapy", appliedDate: "2024-01-13", status: "pending" },
  { id: "4", name: "Sarah Williams", email: "sarah@example.com", phone: "+1234567893", programme: "Nail Technology", appliedDate: "2024-01-12", status: "rejected" },
  { id: "5", name: "David Brown", email: "david@example.com", phone: "+1234567894", programme: "Hairdressing", appliedDate: "2024-01-11", status: "approved" },
];

const statusConfig: Record<StudentStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline"; icon: typeof Clock }> = {
  pending: { label: "Pending", variant: "secondary", icon: Clock },
  approved: { label: "Approved", variant: "default", icon: CheckCircle },
  rejected: { label: "Rejected", variant: "destructive", icon: XCircle },
};

export default function AdminStudents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [students] = useState<Student[]>(mockStudents);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.programme.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Student Applications</h2>
        <p className="text-muted-foreground mt-1">Manage and review student applications</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-foreground">All Applications</CardTitle>
              <CardDescription>{filteredStudents.length} total applications</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Email</TableHead>
                  <TableHead className="font-semibold">Programme</TableHead>
                  <TableHead className="font-semibold">Applied Date</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => {
                  const status = statusConfig[student.status];
                  const StatusIcon = status.icon;
                  return (
                    <TableRow key={student.id} className="hover:bg-muted/30">
                      <TableCell className="font-medium text-foreground">{student.name}</TableCell>
                      <TableCell className="text-muted-foreground">{student.email}</TableCell>
                      <TableCell className="text-muted-foreground">{student.programme}</TableCell>
                      <TableCell className="text-muted-foreground">{student.appliedDate}</TableCell>
                      <TableCell>
                        <Badge variant={status.variant} className="flex items-center gap-1 w-fit">
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Eye className="w-4 h-4" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 text-lime">
                              <CheckCircle className="w-4 h-4" /> Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                              <XCircle className="w-4 h-4" /> Reject
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
