
export enum VideoPlatform {
  YouTube = 'YouTube',
  TikTok = 'TikTok',
  Other = 'Other',
}

export interface DownloadOption {
  quality: string;
  format: string;
  size: string;
  url: string;
  isWatermarkFree?: boolean;
}

export interface VideoInfo {
  thumbnailUrl: string;
  title: string;
  duration: string;
  platform: VideoPlatform;
  downloadOptions: DownloadOption[];
}
