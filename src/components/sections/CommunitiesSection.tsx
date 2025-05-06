import React from 'react';
import Container from '../ui/Container';
import CommunityCard from './CommunityCard';
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
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            ctaText="Join the Circle. Build Better, Together."
            iconName={<Code size={24} />}
            color="border-blue-600"
          />

          {/* Entrepreneurs & Business Owners */}
          <CommunityCard
            id="entrepreneurs and Business Owner"
            title="Entrepreneurs and Business Owner"
            headline="Scale Your Business with Strategic Support"
            painPoints={[
              { text: "Cash flow management challenges?" },
              { text: "Customer acquisition hurdles?" },
              { text: "Time & productivity struggles?" }
            ]}
            ctaText="Join Now—Empower Your Business."
            iconName={<Briefcase size={24} />}
            color="border-purple-600"
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
            ctaText="Join the Network That Grows With You."
            iconName={<BookOpen size={24} />}
            color="border-amber-600"
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
            ctaText="Get In the Room. Grow Your Deals."
            iconName={<Building2 size={24} />}
            color="border-green-600"
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
            ctaText="Get In Today."
            iconName={<Palette size={24} />}
            color="border-rose-600"
          />

          {/* Finance & Investment Pros */}
          <CommunityCard
            id="finance"
            title="Money"
            headline="Master the Money Game—With People Who Get It"
            painPoints={[
              { text: "Forex Trading" },
              { text: "Crypto Currency" },
              { text: "Stock Investment" }
            ]}
            ctaText="Get in the Circle. Grow with the Smart Money."
            iconName={<LineChart size={24} />}
            color="border-cyan-600"
          />

          {/* Health & Wellness Experts */}
          <CommunityCard
            id="wellness"
            title="Wellness Experts"
            headline="Heal Others. Scale Your Practice. Grow With Us."
            painPoints={[
              { text: "Stuck trading hours for cash?" },
              { text: "Don't know how to expand online?" },
              { text: "Looking for clients who value your work?" }
            ]}
            ctaText="Grow Your Practice. Find Your People."
            iconName={<Heart size={24} />}
            color="border-pink-600"
          />

          {/* Agricutural */}
          <CommunityCard
            id="Agric"
            title="Agric"
            headline="Empowering Farmers, transforming Agriculture."
            painPoints={[
              { text: "Access to Funding and Capital" },
              { text: "Market Access and Pricing Instability" },
              { text: "Climate Change and Unpredictable Weather" }
            ]}
            ctaText="Grow Your Practice. Find Your People."
            iconName={<Heart size={24} />}
            color="border-pink-600"
          />
        </div>

      </Container>
    </section>
  );
};

export default CommunitiesSection;