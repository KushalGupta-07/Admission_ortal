import { Button } from "@/components/ui/button";
import { Menu, Bell, User, LogIn } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                SA
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Student Admission Portal</h1>
                <p className="text-xs text-muted-foreground">Academic Year 2025-26</p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#admissions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Admissions
            </a>
            <a href="#schedule" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Schedule
            </a>
            <a href="#results" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Results
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="default" className="hidden md:flex gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="#admissions" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                Admissions
              </a>
              <a href="#schedule" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                Schedule
              </a>
              <a href="#results" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                Results
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
              <Button variant="default" className="w-full mt-2 gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
