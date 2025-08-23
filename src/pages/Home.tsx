import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Radio, Headphones, Users, Clock, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background gradient with subtle pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 to-primary/20 z-[-1]" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%230066ff" fill-opacity="0.03" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      {/* Header */}
      <header className="w-full py-6 px-6 flex items-center justify-between glass mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
            <Radio className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Instore Media</h1>
        </div>
        
        <nav className="flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Services</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</a>
          <Link to="/hpclstream">
            <Button className="gap-2">
              <Play className="w-4 h-4" />
              Live Stream
            </Button>
          </Link>
        </nav>
      </header>

      <div className="container mx-auto px-6 flex-1">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
              Professional Audio Solutions for 
              <span className="text-primary"> Retail Environments</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your customer experience with curated music, live streaming, and professional audio management solutions designed for modern retail spaces.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/hpclstream">
                <Button size="lg" className="gap-2">
                  <Play className="w-5 h-5" />
                  Experience Live Stream
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Instore Media?</h2>
            <p className="text-xl text-muted-foreground">Professional audio solutions tailored for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Radio className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Live Streaming</CardTitle>
                <CardDescription>24/7 professional radio streaming with curated playlists</CardDescription>
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
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="glass p-12 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
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

        {/* CTA Section */}
        <section id="contact" className="py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with professional audio solutions that enhance your customer experience.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get Started Today</Button>
              <Link to="/hpclstream">
                <Button variant="outline" size="lg" className="gap-2">
                  <Play className="w-5 h-5" />
                  Try Live Stream
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                <Radio className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Instore Media</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Instore Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;