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
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
              alt="Ahmed Hassan - Software Engineer"
              className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-border"
              data-testid="img-profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
