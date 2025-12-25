import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="text-muted-foreground text-lg">Oops! Page not found</p>
        <Button variant="primary" asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
