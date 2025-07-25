import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Globe,
  MessageCircle,
  Youtube,
  Instagram,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mqaborrl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent! 🚀",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "singhdeepinder416@gmail.com",
      link: "mailto:singhdeepinder416@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      link: null
    },
    {
      icon: Phone,
      label: "Availability",
      value: "Open to Opportunities",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/deepinder-singh-april2007",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      link: "https://github.com/Singh08042007",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "Watch my content",
      link: "https://www.youtube.com/@DeepinderSingh-e5t",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "Follow my journey",
      link: "https://www.instagram.com/deep__cheema__2007/",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      value: "Latest updates",
      link: "https://x.com/Singh3364",
      color: "from-gray-800 to-black"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full mt-4 sm:mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="glass-card p-6 sm:p-8 animate-slide-up">
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-r from-primary to-gold flex items-center justify-center">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Send a Message</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Let's start a conversation</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-card border-primary/30 focus:border-primary text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-card border-primary/30 focus:border-primary text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass-card border-primary/30 focus:border-primary text-sm sm:text-base"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-card border-primary/30 focus:border-primary resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button 
                type="submit" 
                className="luxury-button w-full py-3 sm:py-4 text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-scale-in">
            {/* Contact Details */}
            <Card className="glass-card p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Get in Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-3 sm:p-4 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-muted-foreground">{item.label}</p>
                        <p className="text-sm sm:text-base text-foreground">{item.value}</p>
                      </div>
                    </div>
                  );

                  if (item.link) {
                    return (
                      <a key={index} href={item.link} className="block">
                        {content}
                      </a>
                    );
                  }

                  return <div key={index}>{content}</div>;
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass-card p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Connect Online</h3>
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 sm:p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02]"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center`}>
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-muted-foreground">{social.label}</p>
                          <p className="text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                            {social.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Quick Action */}
            <Card className="glass-card p-6 sm:p-8 text-center">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Let's discuss how we can bring your ideas to life with cutting-edge technology.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="luxury-button w-full py-2 sm:py-3 text-sm sm:text-base"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Let's Work Together
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="gold-button w-full py-2 sm:py-3 text-sm sm:text-base"
                >
                  <a href="mailto:singhdeepinder416@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me Directly
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;