import { Activity, BarChart3, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-card border-b border-border py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Child Health Analytics</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">WHO Growth Standards Platform</p>
          </div>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            to="/dashboard" 
            className={`flex items-center gap-2 transition-colors ${
              isActive('/dashboard') ? 'text-primary' : 'text-foreground hover:text-primary'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link 
            to="/analytics" 
            className={`flex items-center gap-2 transition-colors ${
              isActive('/analytics') ? 'text-primary' : 'text-foreground hover:text-primary'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span className="font-medium">Analytics</span>
          </Link>
          <Link 
            to="/reports" 
            className={`flex items-center gap-2 transition-colors ${
              isActive('/reports') ? 'text-primary' : 'text-foreground hover:text-primary'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span className="font-medium">Reports</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
