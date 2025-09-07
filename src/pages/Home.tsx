import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Radio, Headphones, Users, Clock, Zap, Monitor, Volume2, Tv } from 'lucide-react';
import audioAdvertisingImage from '@/assets/audio-advertising.jpg';
import displayAdvertisingImage from '@/assets/display-advertising.jpg';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background gradient with subtle pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 to-primary/20 z-[-1]" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%230066ff" fill-opacity="0.03" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      {/* Header */}
      <header className="w-full py-4 md:py-6 glass mb-6 md:mb-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/lovable-uploads/db980d3d-016d-4b29-97ac-1b6c748c17be.png" alt="Instore Media" className="h-12 md:h-16 w-auto object-contain" />
            </div>
            
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm lg:text-base">Services</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm lg:text-base">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm lg:text-base">Contact</a>
              <Link to="/hpclstream">
                <Button className="gap-2 text-sm lg:text-base">
                  <Play className="w-4 h-4" />
                  <span className="hidden sm:inline">Live Stream</span>
                  <span className="sm:hidden">Stream</span>
                </Button>
              </Link>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Link to="/hpclstream">
                <Button size="sm" className="gap-1">
                  <Play className="w-3 h-3" />
                  Stream
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 flex-1">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-4">
              Complete Media Solutions for 
              <span className="text-primary"> Modern Retail</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-4">
              Transform your customer experience with curated audio, dynamic digital displays, and integrated media management solutions designed for modern retail environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link to="/hpclstream">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Play className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Experience Live Stream</span>
                  <span className="sm:hidden">Live Stream</span>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-12 md:py-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4">Why Choose Instore Media?</h2>
            <p className="text-lg md:text-xl text-muted-foreground px-4">Comprehensive media solutions tailored for your business needs</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="glass border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Radio className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Live Streaming</CardTitle>
                <CardDescription>Centralized music and ad streaming for every store, every location.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Audio Management</CardTitle>
                <CardDescription>Complete control over your retail audio environment</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Customer Experience</CardTitle>
                <CardDescription>Enhance shopping experience with mood-appropriate music</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Display Advertising</CardTitle>
                <CardDescription>Display Advertising and promotional content management</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20">
          <div className="glass p-6 md:p-12 rounded-2xl">
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">24/7</h3>
                </div>
                <p className="text-muted-foreground">Continuous Streaming</p>
              </div>
              
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">99.9%</h3>
                </div>
                <p className="text-muted-foreground">Uptime Reliability</p>
              </div>
              
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">500+</h3>
                </div>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Audio Advertising Section */}
        <section className="py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Audio Advertising</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reach your customers through targeted audio advertisements seamlessly integrated with your retail soundtrack. 
                Our audio advertising solutions deliver promotional messages at optimal moments without disrupting the shopping experience.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Scheduled promotional announcements</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Location-specific messaging</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time campaign management</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/25c74890-ab1f-4e0d-8c24-73abc6e3198a.png" 
                alt="Gas station audio advertising solutions" 
                className="w-full h-64 md:h-80 object-contain"
              />
            </div>
          </div>
        </section>

        {/* Display Advertising Section */}
        <section className="py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Tv className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Display Advertising</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your retail space with dynamic digital displays that showcase promotions, product information, 
                and brand messaging. Our display advertising solutions create engaging visual experiences that drive sales.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Interactive digital signage</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Automated content scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Multi-location campaign deployment</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src={displayAdvertisingImage} 
                alt="Display Advertising Solutions" 
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 md:py-20 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Get started with professional audio solutions that enhance your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => setIsContactFormOpen(!isContactFormOpen)}
              >
                Get Started Today
              </Button>
              <Link to="/hpclstream">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <Play className="w-4 h-4 md:w-5 md:h-5" />
                  Try Live Stream
                </Button>
              </Link>
            </div>
            <ContactForm 
              isOpen={isContactFormOpen} 
              onClose={() => setIsContactFormOpen(false)} 
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 md:py-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/lovable-uploads/db980d3d-016d-4b29-97ac-1b6c748c17be.png" alt="Instore Media" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground text-center sm:text-right">© 2025 Instore Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;