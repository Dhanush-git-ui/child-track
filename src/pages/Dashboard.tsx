import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Activity, Users, TrendingUp, AlertCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Dashboard</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">Total Patients</h3>
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">1,234</p>
              <p className="text-sm text-success mt-2">+12% from last month</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">Assessments</h3>
                <Activity className="w-5 h-5 text-success" />
              </div>
              <p className="text-3xl font-bold text-foreground">3,456</p>
              <p className="text-sm text-success mt-2">+8% from last month</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">Growth Trends</h3>
                <TrendingUp className="w-5 h-5 text-warning" />
              </div>
              <p className="text-3xl font-bold text-foreground">89%</p>
              <p className="text-sm text-success mt-2">Normal range</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">Alerts</h3>
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-3xl font-bold text-foreground">23</p>
              <p className="text-sm text-destructive mt-2">Requires attention</p>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Recent Activity</h2>
            <p className="text-muted-foreground">Your recent patient assessments and growth tracking data will appear here.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
