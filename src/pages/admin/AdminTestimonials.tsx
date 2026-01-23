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
import { Search, MoreHorizontal, Eye, CheckCircle, XCircle, Trash2, Plus, Star } from "lucide-react";

type TestimonialStatus = "pending" | "published" | "rejected";

interface Testimonial {
  id: string;
  name: string;
  programme: string;
  rating: number;
  content: string;
  submittedDate: string;
  status: TestimonialStatus;
}

const mockTestimonials: Testimonial[] = [
  { id: "1", name: "Emily Watson", programme: "Hairdressing", rating: 5, content: "Amazing experience! The instructors are so supportive and knowledgeable.", submittedDate: "2024-01-15", status: "published" },
  { id: "2", name: "James Miller", programme: "Barbering", rating: 4, content: "Great hands-on training. I feel confident starting my career now.", submittedDate: "2024-01-14", status: "pending" },
  { id: "3", name: "Sophie Turner", programme: "Beauty Therapy", rating: 5, content: "The facilities are top-notch and the curriculum is comprehensive.", submittedDate: "2024-01-13", status: "published" },
  { id: "4", name: "Michael Chen", programme: "Nail Technology", rating: 3, content: "Good programme but could use more advanced techniques.", submittedDate: "2024-01-12", status: "rejected" },
];

const statusConfig: Record<TestimonialStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pending: { label: "Pending", variant: "secondary" },
  published: { label: "Published", variant: "default" },
  rejected: { label: "Rejected", variant: "destructive" },
};

export default function AdminTestimonials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [testimonials] = useState<Testimonial[]>(mockTestimonials);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.programme.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-lime text-lime" : "text-muted"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Testimonials</h2>
          <p className="text-muted-foreground mt-1">Manage student testimonials and reviews</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Testimonial</DialogTitle>
              <DialogDescription>Create a new testimonial entry</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Student Name</Label>
                <Input id="name" placeholder="Enter student name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="programme">Programme</Label>
                <Input id="programme" placeholder="Enter programme name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Testimonial</Label>
                <Textarea id="content" placeholder="Enter testimonial content" rows={4} />
              </div>
              <Button className="w-full" onClick={() => setIsAddDialogOpen(false)}>
                Add Testimonial
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-border">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-foreground">All Testimonials</CardTitle>
              <CardDescription>{filteredTestimonials.length} total testimonials</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search testimonials..."
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
                  <TableHead className="font-semibold">Programme</TableHead>
                  <TableHead className="font-semibold">Rating</TableHead>
                  <TableHead className="font-semibold max-w-xs">Content</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTestimonials.map((testimonial) => {
                  const status = statusConfig[testimonial.status];
                  return (
                    <TableRow key={testimonial.id} className="hover:bg-muted/30">
                      <TableCell className="font-medium text-foreground">{testimonial.name}</TableCell>
                      <TableCell className="text-muted-foreground">{testimonial.programme}</TableCell>
                      <TableCell>{renderStars(testimonial.rating)}</TableCell>
                      <TableCell className="text-muted-foreground max-w-xs truncate">{testimonial.content}</TableCell>
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
                              <Eye className="w-4 h-4" /> View Full
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 text-lime">
                              <CheckCircle className="w-4 h-4" /> Publish
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 text-secondary">
                              <XCircle className="w-4 h-4" /> Reject
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
