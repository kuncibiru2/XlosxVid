
import React, { useState, useCallback } from 'react';
import { fetchVideoInfo } from '../services/videoService';
import { VideoInfo, DownloadOption } from '../types';
import { DownloadIcon } from './icons/DownloadIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { LoadingSpinner } from './icons/LoadingSpinner';

const VideoResultCard: React.FC<{ videoInfo: VideoInfo }> = ({ videoInfo }) => (
  <div className="w-full max-w-4xl mx-auto bg-dark-light rounded-lg shadow-lg overflow-hidden animate-slide-up mt-8">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={videoInfo.thumbnailUrl} alt={videoInfo.title} />
      </div>
      <div className="p-6 flex-grow">
        <div className="uppercase tracking-wide text-sm text-primary font-semibold">{videoInfo.platform}</div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-text-main">{videoInfo.title}</h2>
        <p className="mt-2 text-text-secondary">Duration: {videoInfo.duration}</p>
      </div>
    </div>
    <div className="bg-dark-lighter px-6 py-4">
      <h3 className="text-md font-semibold text-text-main mb-3">Download Options</h3>
      <div className="space-y-3">
        {videoInfo.downloadOptions.map((option, index) => (
          <DownloadOptionItem key={index} option={option} />
        ))}
      </div>
    </div>
  </div>
);

const DownloadOptionItem: React.FC<{ option: DownloadOption }> = ({ option }) => (
  <div className="bg-dark p-3 rounded-md flex items-center justify-between hover:bg-opacity-80 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-primary-dark bg-primary/20 rounded-md px-3 py-1 text-sm font-bold">{option.format}</div>
      <div>
        <p className="font-semibold text-text-main">{option.quality}</p>
        <p className="text-sm text-text-secondary">{option.size}</p>
      </div>
      {option.isWatermarkFree && (
        <span className="flex items-center gap-1 text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">
          <SparklesIcon className="h-3 w-3" />
          No Watermark
        </span>
      )}
    </div>
    <a
      href={option.url}
      download
      className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-transform duration-200 hover:scale-105"
    >
      <DownloadIcon className="h-5 w-5" />
      <span>Download</span>
    </a>
  </div>
);


const HomePage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a video URL.');
      return;
    }
    setError(null);
    setVideoInfo(null);
    setIsLoading(true);
    try {
      const data = await fetchVideoInfo(url);
      setVideoInfo(data);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-text-main animate-fade-in">
        Universal Video Downloader
      </h1>
      <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Paste any video link from platforms like YouTube or TikTok and get your download started in seconds.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste video URL here..."
            className="flex-grow w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-text-main"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/30"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoadingSpinner className="h-5 w-5" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <DownloadIcon className="h-5 w-5" />
                <span>Download</span>
              </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-6 bg-red-500/20 text-red-300 p-3 rounded-lg max-w-2xl mx-auto animate-fade-in">
          {error}
        </div>
      )}
      
      {videoInfo && <VideoResultCard videoInfo={videoInfo} />}
    </div>
  );
};

export default HomePage;
