import React from 'react';
import Container from '../ui/Container';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { BeamsBackground } from '../ui/beams-background';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      <BeamsBackground intensity="subtle">
        <Container>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Dr. Stephen's Circle</h3>
                <p className="text-white/70 mb-4">
                  A suite of free mastermind communities for visionaries to connect, share, grow, and win together.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/drsakintayo/" className="text-white/60 hover:text-white hover:scale-110 transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="https://x.com/drsakintayo?lang=en" className="text-white/60 hover:text-white hover:scale-110 transition-all">
                    <Twitter size={20} />
                  </a>
                  <a href="https://www.instagram.com/stephenakintayo/?hl=en" className="text-white/60 hover:text-white hover:scale-110 transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="https://ng.linkedin.com/company/stephenakintayo" className="text-white/60 hover:text-white hover:scale-110 transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.youtube.com/@DrSAkintayo" className="text-white/60 hover:text-white hover:scale-110 transition-all">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Communities</h3>
                <ul className="space-y-2">
                  <li><a href="#tech-founders" className="text-white/70 hover:text-white transition-colors">Tech Founders</a></li>
                  <li><a href="#entrepreneurs" className="text-white/70 hover:text-white transition-colors">Entrepreneurs</a></li>
                  <li><a href="#authors-speakers" className="text-white/70 hover:text-white transition-colors">Authors & Speakers</a></li>
                  <li><a href="#realtors" className="text-white/70 hover:text-white transition-colors">Realtors</a></li>
                  <li><a href="#creatives" className="text-white/70 hover:text-white transition-colors">Creatives</a></li>
                  <li><a href="#finance" className="text-white/70 hover:text-white transition-colors">Money</a></li>
                  <li><a href="#wellness" className="text-white/70 hover:text-white transition-colors">Wellness Experts</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Dr. Stephen</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Our Mission</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/60 text-sm">
              <p>&copy; {new Date().getFullYear()} Dr. Stephen Akintayo's Circle. All rights reserved.</p>
            </div>
          </div>
        </Container>
      </BeamsBackground>
    </footer>
  );
};

export default Footer;