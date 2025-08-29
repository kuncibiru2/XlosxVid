
import { VideoInfo, VideoPlatform, DownloadOption } from '../types';

const MOCK_YOUTUBE_DATA: VideoInfo = {
  thumbnailUrl: 'https://picsum.photos/seed/youtube/500/300',
  title: 'React in 100 Seconds',
  duration: '01:40',
  platform: VideoPlatform.YouTube,
  downloadOptions: [
    { quality: '1080p', format: 'MP4', size: '25.6 MB', url: '#' },
    { quality: '720p', format: 'MP4', size: '12.3 MB', url: '#' },
    { quality: '360p', format: 'MP4', size: '5.1 MB', url: '#' },
    { quality: 'Audio Only', format: 'MP3', size: '1.5 MB', url: '#' },
  ],
};

const MOCK_TIKTOK_DATA: VideoInfo = {
  thumbnailUrl: 'https://picsum.photos/seed/tiktok/500/300',
  title: 'Cool TikTok Dance #fyp',
  duration: '00:15',
  platform: VideoPlatform.TikTok,
  downloadOptions: [
    { quality: 'HD', format: 'MP4', size: '4.2 MB', url: '#', isWatermarkFree: true },
    { quality: 'HD', format: 'MP4', size: '4.5 MB', url: '#' },
    { quality: 'Audio Only', format: 'MP3', size: '0.5 MB', url: '#' },
  ],
};

const MOCK_OTHER_DATA: VideoInfo = {
  thumbnailUrl: 'https://picsum.photos/seed/other/500/300',
  title: 'A Generic Video from the Web',
  duration: '05:22',
  platform: VideoPlatform.Other,
  downloadOptions: [
    { quality: '720p', format: 'MP4', size: '45.1 MB', url: '#' },
    { quality: '480p', format: 'MP4', size: '22.8 MB', url: '#' },
  ],
}

export const fetchVideoInfo = (url: string): Promise<VideoInfo> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!url || !url.startsWith('http')) {
        reject(new Error('Invalid URL. Please enter a valid video link.'));
        return;
      }

      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        resolve(MOCK_YOUTUBE_DATA);
      } else if (url.includes('tiktok.com')) {
        resolve(MOCK_TIKTOK_DATA);
      } else {
        resolve(MOCK_OTHER_DATA);
      }
    }, 1500 + Math.random() * 1000); // Simulate network delay
  });
};
