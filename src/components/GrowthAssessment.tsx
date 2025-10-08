import { Calculator, User, Calendar, Scale, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GrowthAssessment = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Growth Assessment</h2>
          <p className="text-xl text-muted-foreground">
            Enter patient anthropometric data for comprehensive WHO growth standard analysis
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-lg p-8 border border-border">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Patient Data Entry</h3>
              <p className="text-sm text-muted-foreground">WHO Growth Standards Assessment Protocol</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <Label htmlFor="gender" className="flex items-center gap-2 text-foreground font-medium">
                <User className="w-4 h-4 text-primary" />
                GENDER CLASSIFICATION
              </Label>
              <Select>
                <SelectTrigger id="gender" className="bg-background">
                  <SelectValue placeholder="Select gender classification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dob" className="flex items-center gap-2 text-foreground font-medium">
                <Calendar className="w-4 h-4 text-primary" />
                DATE OF BIRTH
              </Label>
              <Input 
                id="dob" 
                type="date" 
                placeholder="dd-mm-yyyy"
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weight" className="flex items-center gap-2 text-foreground font-medium">
                <Scale className="w-4 h-4 text-primary" />
                WEIGHT (KG)
              </Label>
              <Input 
                id="weight" 
                type="number" 
                placeholder="Enter weight in kilograms"
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="height" className="flex items-center gap-2 text-foreground font-medium">
                <Ruler className="w-4 h-4 text-primary" />
                HEIGHT (CM)
              </Label>
              <Input 
                id="height" 
                type="number" 
                placeholder="Enter height in centimeters"
                className="bg-background"
              />
            </div>
          </div>
          
          <Button size="lg" className="w-full md:w-auto bg-warning hover:bg-warning/90 text-warning-foreground">
            Generate Growth Analysis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GrowthAssessment;
