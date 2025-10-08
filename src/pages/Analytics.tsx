import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart3, PieChart, LineChart } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Analytics</h1>
          <p className="text-xl text-muted-foreground mb-8">Comprehensive growth tracking and trend analysis</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Growth Distribution</h3>
              <p className="text-sm text-muted-foreground">Population-level growth patterns and percentile distributions</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-success/10 rounded-lg flex items-center justify-center">
                <PieChart className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Z-Score Analysis</h3>
              <p className="text-sm text-muted-foreground">Statistical analysis of WHO growth standard deviations</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-warning/10 rounded-lg flex items-center justify-center">
                <LineChart className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Trend Tracking</h3>
              <p className="text-sm text-muted-foreground">Longitudinal growth velocity and trajectory analysis</p>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Advanced Analytics Dashboard</h2>
            <p className="text-muted-foreground">Detailed charts, graphs, and statistical analysis of patient growth data will be displayed here.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
