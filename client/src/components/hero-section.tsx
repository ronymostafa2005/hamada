import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    // In a real implementation, this would trigger CV download
    console.log("Download CV clicked");
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("hero.title")}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-foreground">
              {t("hero.subtitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="px-8 py-3 font-medium"
                data-testid="button-view-work"
              >
                {t("hero.viewWork")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                className="px-8 py-3 font-medium"
                data-testid="button-download-cv"
              >
                {t("hero.downloadCV")}
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center animate-slide-up">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main rotating border */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 rounded-full animate-spin-slow opacity-80"></div>
              
              {/* Secondary counter-rotating border */}
              <div className="absolute -inset-2 bg-gradient-to-l from-green-400 via-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-60" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>
              
              {/* Inner background */}
              <div className="absolute -inset-1 bg-background rounded-full shadow-inner"></div>
              
              {/* Main image */}
              <div className="relative">
                <img
                  src="/images/ahmed-osama-profile.jpg"
                  alt="Ahmed Osama - Software Engineer"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 relative z-10 hover:shadow-3xl"
                  style={{ objectPosition: 'center 15%' }}
                  data-testid="img-profile"
                />
                
                {/* Floating tech icons with hover effects */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300 z-20 cursor-pointer group/react">
                  <span className="text-white font-bold text-xs">React</span>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover/react:opacity-100 transition-opacity whitespace-nowrap">
                    React.js
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300 z-20 cursor-pointer group/node" style={{ animationDelay: '1s' }}>
                  <span className="text-white font-bold text-xs">Node</span>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap">
                    Node.js
                  </div>
                </div>
                <div className="absolute top-8 -left-8 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300 z-20 cursor-pointer group/odoo" style={{ animationDelay: '2s' }}>
                  <span className="text-white font-bold text-xs">Odoo</span>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover/odoo:opacity-100 transition-opacity whitespace-nowrap">
                    Odoo ERP
                  </div>
                </div>
                <div className="absolute bottom-8 -right-8 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300 z-20 cursor-pointer group/ts" style={{ animationDelay: '0.5s' }}>
                  <span className="text-white font-bold text-xs">TS</span>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover/ts:opacity-100 transition-opacity whitespace-nowrap">
                    TypeScript
                  </div>
                </div>
                
                {/* Additional floating particles */}
                <div className="absolute top-16 right-16 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 left-16 w-3 h-3 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-32 left-4 w-1 h-1 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
