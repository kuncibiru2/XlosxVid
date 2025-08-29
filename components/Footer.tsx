
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-light mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-text-secondary text-sm">
        <p className="mb-2">
          <strong>Disclaimer:</strong> This tool is for personal use only. Please respect copyright laws and the terms of service of the respective platforms. Do not download content you do not have the right to.
        </p>
        <p>&copy; {new Date().getFullYear()} SnapVid. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
