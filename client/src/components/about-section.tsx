import { Card, CardContent } from "@/components/ui/card";
import { Globe, ServerCog } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("about.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Developer workspace with modern setup"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-workspace"
            />
          </div>
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground">
              With over 5 years of experience in software development, I specialize in creating 
              robust web applications and implementing comprehensive Odoo ERP solutions. My expertise 
              spans both frontend and backend technologies, enabling me to deliver end-to-end solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm passionate about writing clean, maintainable code and have successfully delivered 
              projects for clients across various industries including retail, manufacturing, and services.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Globe className="text-primary text-2xl mr-3" />
                    <h3 className="text-xl font-semibold">Web Development</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Modern, responsive web applications using latest technologies
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <ServerCog className="text-secondary text-2xl mr-3" />
                    <h3 className="text-xl font-semibold">Odoo Development</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Custom Odoo modules and ERP implementations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
