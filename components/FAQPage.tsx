
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dark-lighter">
      <button
        className="w-full text-left flex justify-between items-center py-4 px-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-text-main">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4 pt-0 text-text-secondary">
          {children}
        </div>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="bg-dark-light rounded-lg shadow-lg p-4 sm:p-6">
        <FAQItem question="How do I download a video?">
          <p>It's simple! Just find the video you want to download, copy its URL, paste it into the input box on our homepage, and click "Download". We'll process the link and provide you with available download options.</p>
        </FAQItem>
        <FAQItem question="Is downloading videos legal?">
          <p>Downloading videos may infringe on copyright laws depending on the content and your local jurisdiction. You should only download videos for personal, non-commercial use, or when you have explicit permission from the copyright holder. We are not responsible for any misuse of this service.</p>
        </FAQItem>
        <FAQItem question="Why is my download link not working?">
          <p>This can happen for a few reasons: the video may have been removed, it might be private, or there could be a temporary issue with the platform's servers. Try again later or with a different video. If the problem persists, please contact our support.</p>
        </FAQItem>
        <FAQItem question="What video quality can I download?">
          <p>We strive to provide all available resolutions from the source platform. This typically includes qualities like 360p, 720p, 1080p (Full HD), and sometimes even higher. We also offer an "Audio Only" option to extract the sound in MP3 format.</p>
        </FAQItem>
        <FAQItem question="Can I download videos without a watermark?">
            <p>For certain platforms like TikTok, we offer a "no watermark" download option. This is usually the highest quality version available and is clearly marked with a special icon next to the download button.</p>
        </FAQItem>
      </div>
    </div>
  );
};

export default FAQPage;
