import React from 'react';
import Container from '../ui/Container';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Stephen's Circle</h3>
            <p className="text-gray-400 mb-4">
              A suite of free mastermind communities for visionaries to connect, share, grow, and win together.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/drsakintayo/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/drsakintayo?lang=en" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/stephenakintayo/?hl=en" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://ng.linkedin.com/company/stephenakintayo" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@DrSAkintayo" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Communities</h3>
            <ul className="space-y-2">
              <li><a href="#tech-founders" className="text-gray-400 hover:text-white transition-colors">Tech Founders</a></li>
              <li><a href="#entrepreneurs" className="text-gray-400 hover:text-white transition-colors">Entrepreneurs</a></li>
              <li><a href="#authors-speakers" className="text-gray-400 hover:text-white transition-colors">Authors & Speakers</a></li>
              <li><a href="#realtors" className="text-gray-400 hover:text-white transition-colors">Realtors</a></li>
              <li><a href="#creatives" className="text-gray-400 hover:text-white transition-colors">Creatives</a></li>
              <li><a href="#finance" className="text-gray-400 hover:text-white transition-colors">Money</a></li>
              <li><a href="#wellness" className="text-gray-400 hover:text-white transition-colors">Wellness Experts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Dr. Stephen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Stephen Akintayo's Circle. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;