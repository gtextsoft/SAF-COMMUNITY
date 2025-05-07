import React from 'react';
import Button from '../ui/Button';

type PainPoint = {
  text: string;
};

type CommunityCardProps = {
  id: string;
  title: string;
  headline: string;
  painPoints: PainPoint[];
  ctaText?: string;
  iconName?: React.ReactNode;
  color?: string;
};

const CommunityCard: React.FC<CommunityCardProps> = ({
  id,
  title,
  headline,
  painPoints,
  ctaText,
  iconName,
  color,
}) => {
  const communityLinks = {
    'tech-founders': 'https://circle.drstephenakintayo.com/tech',
    'entrepreneurs': 'https://circle.drstephenakintayo.com/business',
    'authors-speakers': 'https://circle.drstephenakintayo.com/speakers',
    'realtors': 'https://circle.drstephenakintayo.com/realty',
    'creatives': 'https://circle.drstephenakintayo.com/creative',
    'finance': 'https://circle.drstephenakintayo.com/finance',
    'wellness': 'https://circle.drstephenakintayo.com/wellness'
  };

  const borderColor = color || 'border-indigo-500';
  const iconBg = color ? color.replace('border-', 'bg-').replace('-600', '-500') : 'bg-indigo-500';
  const iconText = color ? color.replace('border-', 'text-') : 'text-indigo-500';

  return (
    <div 
      id={id}
      className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 transition-all duration-300 hover:bg-white/20 border-l-4 ${borderColor} border-t border-r border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}
    >
      <div className="flex items-center mb-6">
        {iconName && (
          <div className={`p-3 rounded-full ${iconBg} text-white`}>
            {iconName}
          </div>
        )}
        <h3 className="ml-4 text-xl font-bold text-white">{title}</h3>
      </div>
      
      <h4 className="text-xl font-semibold mb-4 text-white/90">{headline}</h4>
      
      <ul className="mb-6 space-y-3">
        {painPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 text-lg text-white`}>•</span>
            <span className="text-white/80">{point.text}</span>
          </li>
        ))}
      </ul>
      
      {/* Only show button if ctaText is provided */}
      {ctaText && (
        <a 
          href={communityLinks[id as keyof typeof communityLinks] || '#'}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            className={`w-full mt-4 bg-white/20 hover:bg-white/30 border border-white/30 text-white backdrop-blur-sm transition-all duration-300`}
          >
            {ctaText}
          </Button>
        </a>
      )}
    </div>
  );
};

export default CommunityCard;