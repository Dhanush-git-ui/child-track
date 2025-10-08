import { Activity, BarChart3, FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Child Health Analytics</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">WHO Growth Standards Platform</p>
          </div>
        </div>
        
        <nav className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <BarChart3 className="w-4 h-4" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Activity className="w-4 h-4" />
            <span className="font-medium">Analytics</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <FileText className="w-4 h-4" />
            <span className="font-medium">Reports</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
