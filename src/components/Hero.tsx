import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wide">WHO Certified Standards</span>
        </div>
        
        <h2 className="text-6xl font-bold mb-4">
          <span className="text-foreground">Child Growth</span>
          <br />
          <span className="text-primary">Analytics Platform</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Advanced pediatric growth assessment system powered by WHO growth standards. 
          Precision analytics for healthcare professionals and medical institutions.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
