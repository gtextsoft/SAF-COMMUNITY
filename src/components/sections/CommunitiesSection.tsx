import React from 'react';
import Container from '../ui/Container';
import CommunityCard from './CommunityCard';
import { BeamsBackground } from '../ui/beams-background';
import { 
  Code, 
  Briefcase, 
  BookOpen, 
  Building2, 
  Palette, 
  LineChart, 
  Heart 
} from 'lucide-react';

const CommunitiesSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="communities">
      <BeamsBackground intensity="subtle">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your Community
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join a curated space designed specifically for your journey, connect with peers who understand your challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tech Founders & SaaS Entrepreneurs */}
            <CommunityCard
              id="tech-founders"
              title="Tech Founders"
              headline="Build Your Tech Empire with Fellow Innovators"
              painPoints={[
                { text: "Struggling with product-market fit?" },
                { text: "Need clarity on funding?" },
                { text: "Tired of building in isolation?" }
              ]}
            />

            {/* Entrepreneurs & Business Owners */}
            <CommunityCard
              id="entrepreneurs"
              title="Entrepreneurs & Business Owner"
              headline="Scale Your Business with Strategic Support"
              painPoints={[
                { text: "Cash flow management challenges?" },
                { text: "Customer acquisition hurdles?" },
                { text: "Time & productivity struggles?" }
              ]}
            />

            {/* Authors & Public Speakers */}
            <CommunityCard
              id="authors-speakers"
              title="Authors & Speakers"
              headline="Amplify Your Voice, Expand Your Reach"
              painPoints={[
                { text: "Struggling to get booked?" },
                { text: "Message going unheard?" },
                { text: "Burnt out juggling content?" }
              ]}
            />

            {/* Realtors & Property Investors */}
            <CommunityCard
              id="realtors"
              title="Realtors & Investors"
              headline="Don't Navigate the Market Alone"
              painPoints={[
                { text: "Need proven investment strategies?" },
                { text: "Struggling with market shifts?" },
                { text: "Looking for wealth-building insights?" }
              ]}
            />

            {/* Creatives & Media Professionals */}
            <CommunityCard
              id="creatives"
              title="Creatives"
              headline="Turn Your Creativity Into Sustainable Income"
              painPoints={[
                { text: "Need to collaborate & network?" },
                { text: "Seeking access to paid gigs?" },
                { text: "Want to grow skills via mentorship?" }
              ]}
            />

            {/* Finance & Investment Pros */}
            <CommunityCard
              id="finance"
              title="Finance & Investment Pros"
              headline="Master the Money Game—With People Who Get It"
              painPoints={[
                { text: "Forex Trading" },
                { text: "Crypto Currency" },
                { text: "Stock Investment" }
              ]}
            />

            {/* Agricutural */}
            <CommunityCard
              id="agric"
              title="Agric"
              headline="Empowering Farmers, transforming Agriculture."
              painPoints={[
                { text: "Access to Funding and Capital" },
                { text: "Market Access and Pricing Instability" },
                { text: "Climate Change and Unpredictable Weather" }
              ]}
            />
          </div>

          {/* Special Join Button */}
          <div className="flex justify-center mt-12">
            <a
              href="https://circle.drstephenakintayo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-accent-violet to-accent-teal text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:scale-105"
            >
              Join the Circle
            </a>
          </div>
        </Container>
      </BeamsBackground>
    </section>
  );
};

export default CommunitiesSection;