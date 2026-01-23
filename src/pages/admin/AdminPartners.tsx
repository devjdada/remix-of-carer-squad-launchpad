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
import { Search, MoreHorizontal, Pencil, Trash2, Plus, ExternalLink, Building2 } from "lucide-react";

type PartnerType = "employer" | "sponsor" | "training";

interface Partner {
  id: string;
  name: string;
  type: PartnerType;
  contactPerson: string;
  email: string;
  website: string;
  description: string;
  addedDate: string;
}

const mockPartners: Partner[] = [
  { id: "1", name: "Elite Salon Group", type: "employer", contactPerson: "Sarah Johnson", email: "sarah@elitesalon.com", website: "https://elitesalon.com", description: "Leading salon chain with 50+ locations", addedDate: "2024-01-15" },
  { id: "2", name: "Beauty Brands Inc", type: "sponsor", contactPerson: "Mark Davis", email: "mark@beautybrands.com", website: "https://beautybrands.com", description: "Premium beauty products supplier", addedDate: "2024-01-10" },
  { id: "3", name: "Hair Pro Academy", type: "training", contactPerson: "Lisa Chen", email: "lisa@hairpro.edu", website: "https://hairpro.edu", description: "Advanced training certification partner", addedDate: "2024-01-05" },
  { id: "4", name: "Glamour Studios", type: "employer", contactPerson: "Tom Wilson", email: "tom@glamourstudios.com", website: "https://glamourstudios.com", description: "High-end beauty studio network", addedDate: "2023-12-20" },
];

const typeConfig: Record<PartnerType, { label: string; variant: "default" | "secondary" | "outline" }> = {
  employer: { label: "Employer", variant: "default" },
  sponsor: { label: "Sponsor", variant: "secondary" },
  training: { label: "Training", variant: "outline" },
};

export default function AdminPartners() {
  const [searchQuery, setSearchQuery] = useState("");
  const [partners] = useState<Partner[]>(mockPartners);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredPartners = partners.filter(
    (partner) =>
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Partners</h2>
          <p className="text-muted-foreground mt-1">Manage academy partners and collaborations</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> Add Partner
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Partner</DialogTitle>
              <DialogDescription>Create a new partner entry</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="partnerName">Partner Name</Label>
                <Input id="partnerName" placeholder="Enter partner name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input id="contactPerson" placeholder="Enter contact person name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter partner description" rows={3} />
              </div>
              <Button className="w-full" onClick={() => setIsAddDialogOpen(false)}>
                Add Partner
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-border">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-foreground">All Partners</CardTitle>
              <CardDescription>{filteredPartners.length} total partners</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search partners..."
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
                  <TableHead className="font-semibold">Partner</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Contact</TableHead>
                  <TableHead className="font-semibold">Email</TableHead>
                  <TableHead className="font-semibold">Website</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPartners.map((partner) => {
                  const type = typeConfig[partner.type];
                  return (
                    <TableRow key={partner.id} className="hover:bg-muted/30">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Building2 className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{partner.name}</p>
                            <p className="text-xs text-muted-foreground">{partner.description}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={type.variant}>{type.label}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{partner.contactPerson}</TableCell>
                      <TableCell className="text-muted-foreground">{partner.email}</TableCell>
                      <TableCell>
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sky hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" /> Visit
                        </a>
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
