import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", hoverColor: "hover:bg-blue-600" },
    { icon: Github, href: "#", label: "GitHub", hoverColor: "hover:bg-gray-600" },
    { icon: Twitter, href: "#", label: "Twitter", hoverColor: "hover:bg-blue-400" },
    { icon: Youtube, href: "#", label: "YouTube", hoverColor: "hover:bg-red-600" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4" data-testid="contact-email">
              <Mail className="text-primary text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{t("contact.email")}</h3>
                <p className="text-muted-foreground">ahmed.hassan@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-testid="contact-phone">
              <Phone className="text-accent text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{t("contact.phone")}</h3>
                <p className="text-muted-foreground">+20 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-testid="contact-location">
              <MapPin className="text-destructive text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{t("contact.location")}</h3>
                <p className="text-muted-foreground">Cairo, Egypt</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold mb-4">{t("contact.follow")}</h3>
              <div className="flex space-x-4" data-testid="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-12 h-12 bg-card border hover:border-primary rounded-lg flex items-center justify-center transition-colors duration-200 ${social.hoverColor}`}
                    aria-label={social.label}
                    data-testid={`link-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.firstName")}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t("contact.firstName")} 
                              {...field} 
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.lastName")}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t("contact.lastName")} 
                              {...field} 
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.email")}</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder={t("contact.email")} 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.subject")}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t("contact.subject")} 
                            {...field} 
                            data-testid="input-subject"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.message")}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t("contact.message")} 
                            rows={5} 
                            {...field} 
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={contactMutation.isPending}
                    data-testid="button-send-message"
                  >
                    {contactMutation.isPending ? "Sending..." : t("contact.send")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
