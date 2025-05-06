import React, { useState } from 'react';
import Button from '../ui/Button';

const communities = [
  { id: "tech-founders", name: "Tech Founders & SaaS Entrepreneurs" },
  { id: "entrepreneurs", name: "Entrepreneurs & Business Owners" },
  { id: "authors-speakers", name: "Authors & Public Speakers" },
  { id: "realtors", name: "Realtors & Property Investors" },
  { id: "creatives", name: "Creatives & Media Professionals" },
  { id: "finance", name: "Finance & Investment Pros" },
  { id: "wellness", name: "Health & Wellness Experts" },
];

const SignupModal: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    community: ''
  });

  const closeModal = () => {
    const modal = document.getElementById('signup-modal');
    if (modal) {
      modal.classList.add('hidden');
      // Reset form after closing
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          community: ''
        });
      }, 300);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      id="signup-modal" 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden"
      onClick={closeModal}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-all"
        onClick={stopPropagation}
      >
        {!submitted ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Join Dr. Stephen's Circle</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="community-select" className="block text-gray-700 font-medium mb-2">Which community are you interested in?</label>
                <select
                  id="community-select"
                  name="community"
                  value={formData.community}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">Select a community</option>
                  {communities.map(community => (
                    <option key={community.id} value={community.id}>
                      {community.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <Button type="submit" className="w-full">Join Free</Button>
            </form>
            
            <p className="text-center text-gray-600 mt-4 text-sm">
              By joining, you agree to our <a href="#" className="text-primary-600 hover:underline">Terms</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Joining!</h3>
            <p className="text-gray-600 mb-6">
              We've sent a confirmation email to <span className="font-semibold">{formData.email}</span>. 
              Please check your inbox to complete your registration.
            </p>
            <Button onClick={closeModal}>Close</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupModal;