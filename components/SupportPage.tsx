
import React from 'react';

const SupportCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-dark-light p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-primary mb-3">{title}</h2>
        <div className="text-text-secondary space-y-2">
            {children}
        </div>
    </div>
);

const SupportPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Support & Guidelines</h1>
        <div className="grid md:grid-cols-2 gap-8">
            <SupportCard title="Instructions for PC (Windows/Mac/Linux)">
                <p>1. Open your web browser and navigate to the video you wish to download.</p>
                <p>2. Copy the full URL from the browser's address bar.</p>
                <p>3. Paste the URL into the input field on our homepage.</p>
                <p>4. Click "Download", choose your desired quality, and the download will begin.</p>
            </SupportCard>
            <SupportCard title="Instructions for Mobile (Android/iOS)">
                <p>1. Open the video app (e.g., YouTube, TikTok).</p>
                <p>2. Tap the "Share" button on the video.</p>
                <p>3. Select "Copy Link" from the sharing options.</p>
                <p>4. Open your mobile browser, go to our website, paste the link, and download.</p>
            </SupportCard>
            <SupportCard title="Copyright & Fair Use">
                <p>We strongly advise all users to respect intellectual property rights. The content you download is protected by copyright laws.</p>
                <p>This service should be used to create personal backups or archives of content that you own or have permission to download. Unauthorized distribution of copyrighted material is illegal.</p>
            </SupportCard>
            <SupportCard title="Contact Support">
                <p>If you encounter any issues or have questions not covered in the FAQ, please feel free to reach out to our support team.</p>
                <p>Email us at: <a href="mailto:support@snapvid.example.com" className="text-primary hover:underline">support@snapvid.example.com</a></p>
                <p>(Note: This is a demo application and the email is not monitored).</p>
            </SupportCard>
        </div>
    </div>
  );
};

export default SupportPage;
