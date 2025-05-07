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

  const borderColor = color || 'border-gray-300';
  const iconBg = color ? color.replace('border-', 'bg-').replace('-600', '-100') : 'bg-gray-100';
  const iconText = color ? color.replace('border-', 'text-') : 'text-gray-400';

  return (
    <div 
      id={id}
      className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl border-l-4 ${borderColor}`}
    >
      <div className="flex items-center mb-6">
        {iconName && (
          <div className={`p-3 rounded-full ${iconBg} ${iconText}`}>
            {iconName}
          </div>
        )}
        <h3 className="ml-4 text-xl font-bold text-gray-900">{title}</h3>
      </div>
      
      <h4 className="text-xl font-semibold mb-4 text-gray-800">{headline}</h4>
      
      <ul className="mb-6 space-y-3">
        {painPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 text-lg ${iconText}`}>•</span>
            <span className="text-gray-700">{point.text}</span>
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
            className={`w-full mt-4 ${color ? color.replace('border-', 'bg-') : 'bg-gray-400'} text-white border-none`}
          >
            {ctaText}
          </Button>
        </a>
      )}
    </div>
  );
};

export default CommunityCard;