import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reports = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Reports</h1>
          <p className="text-xl text-muted-foreground mb-8">Generate and download comprehensive growth assessment reports</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Individual Reports</h3>
                  <p className="text-sm text-muted-foreground">Detailed patient growth assessments</p>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Batch Reports</h3>
                  <p className="text-sm text-muted-foreground">Multiple patient summaries</p>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Recent Reports</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Growth Assessment Report - Q4 2024</p>
                    <p className="text-sm text-muted-foreground">Generated on Dec 15, 2024</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
