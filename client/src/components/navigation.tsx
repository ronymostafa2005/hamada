import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";
import { useLanguage } from "@/contexts/language-context";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  
  const sectionIds = ["home", "about", "projects", "skills", "contact"];
  const activeSection = useScrollSpy(sectionIds);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "projects", label: t("nav.projects") },
    { id: "skills", label: t("nav.skills") },
    { id: "contact", label: t("nav.contact") }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-foreground">Ahmed Hassan</span>
            <span className="ml-2 text-sm text-muted-foreground">Software Engineer</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-muted-foreground hover:text-foreground transition-colors duration-200 ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground"
              data-testid="language-toggle"
            >
              {language === "en" ? "EN | AR" : "عربي | إنجليزي"}
            </Button>
            
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-yellow-500" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-muted-foreground hover:text-foreground"
                data-testid="mobile-language-toggle"
              >
                {language === "en" ? "EN | AR" : "عربي | إنجليزي"}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9"
                data-testid="mobile-theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
