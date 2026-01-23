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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Search, MoreHorizontal, Pencil, Trash2, Plus, GraduationCap, Users, Clock } from "lucide-react";

type ProgrammeStatus = "active" | "draft" | "archived";

interface Programme {
  id: string;
  name: string;
  duration: string;
  enrolledStudents: number;
  maxCapacity: number;
  price: string;
  description: string;
  status: ProgrammeStatus;
}

const mockProgrammes: Programme[] = [
  { id: "1", name: "Professional Hairdressing", duration: "12 months", enrolledStudents: 45, maxCapacity: 50, price: "$5,000", description: "Comprehensive hairdressing training from basics to advanced techniques", status: "active" },
  { id: "2", name: "Advanced Barbering", duration: "8 months", enrolledStudents: 32, maxCapacity: 40, price: "$3,500", description: "Master the art of barbering with classic and modern styles", status: "active" },
  { id: "3", name: "Beauty Therapy", duration: "10 months", enrolledStudents: 28, maxCapacity: 35, price: "$4,200", description: "Complete beauty therapy training including skincare and makeup", status: "active" },
  { id: "4", name: "Nail Technology", duration: "6 months", enrolledStudents: 20, maxCapacity: 30, price: "$2,800", description: "Professional nail technician certification programme", status: "active" },
  { id: "5", name: "Makeup Artistry", duration: "4 months", enrolledStudents: 0, maxCapacity: 25, price: "$2,000", description: "Creative makeup techniques for various occasions", status: "draft" },
];

const statusConfig: Record<ProgrammeStatus, { label: string; variant: "default" | "secondary" | "outline" }> = {
  active: { label: "Active", variant: "default" },
  draft: { label: "Draft", variant: "secondary" },
  archived: { label: "Archived", variant: "outline" },
};

export default function AdminProgrammes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [programmes] = useState<Programme[]>(mockProgrammes);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredProgrammes = programmes.filter((programme) =>
    programme.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Programmes</h2>
          <p className="text-muted-foreground mt-1">Manage training programmes and courses</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> Add Programme
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Programme</DialogTitle>
              <DialogDescription>Create a new training programme</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="programmeName">Programme Name</Label>
                <Input id="programmeName" placeholder="Enter programme name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" placeholder="e.g., 6 months" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Max Capacity</Label>
                  <Input id="capacity" type="number" placeholder="30" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="$0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="programmeDesc">Description</Label>
                <Textarea id="programmeDesc" placeholder="Enter programme description" rows={3} />
              </div>
              <Button className="w-full" onClick={() => setIsAddDialogOpen(false)}>
                Add Programme
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-border">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-foreground">All Programmes</CardTitle>
              <CardDescription>{filteredProgrammes.length} total programmes</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search programmes..."
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
                  <TableHead className="font-semibold">Programme</TableHead>
                  <TableHead className="font-semibold">Duration</TableHead>
                  <TableHead className="font-semibold">Enrollment</TableHead>
                  <TableHead className="font-semibold">Price</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProgrammes.map((programme) => {
                  const status = statusConfig[programme.status];
                  const enrollmentPercentage = (programme.enrolledStudents / programme.maxCapacity) * 100;
                  return (
                    <TableRow key={programme.id} className="hover:bg-muted/30">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <GraduationCap className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{programme.name}</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">{programme.description}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {programme.duration}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-foreground">{programme.enrolledStudents}/{programme.maxCapacity}</span>
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-sky rounded-full transition-all"
                              style={{ width: `${enrollmentPercentage}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-foreground">{programme.price}</TableCell>
                      <TableCell>
                        <Badge variant={status.variant}>{status.label}</Badge>
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
                              <Pencil className="w-4 h-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                              <Trash2 className="w-4 h-4" /> Delete
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
