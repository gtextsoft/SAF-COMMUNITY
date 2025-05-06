import React from 'react';
import Container from '../ui/Container';

const speakers = [
  { name: 'Grant Cardone', role: 'Entrepreneur & Author' },
  { name: 'Robert Kiyosaki', role: 'Financial Educator' },
  { name: 'Tai Lopez', role: 'Investor & Advisor' },
  { name: 'Lisa Nichols', role: 'Motivational Speaker' },
  { name: 'Les Brown', role: 'Motivational Speaker' },
  { name: 'Gary Vaynerchuk', role: 'Entrepreneur' },
];

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn From the Best
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our communities feature exclusive content.
          </p>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                <span className="text-gray-500 font-bold text-xl">
                  {speaker.name.split(' ').map(name => name[0]).join('')}
                </span>
              </div>
              <h3 className="font-bold text-gray-900">{speaker.name}</h3>
              <p className="text-sm text-gray-600">{speaker.role}</p>
            </div>
          ))}
        </div> */}

        <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-primary-600 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
              "Dr. Stephen's communities have been instrumental in my success. The connections and knowledge I've gained are priceless. If you're serious about growth, you need to be in these rooms."
            </p>
            <div>
              <h4 className="font-bold text-gray-900">Michael Johnson</h4>
              <p className="text-gray-600">Tech Founder & 7-Figure Entrepreneur</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialProofSection;