// Custom loader function

interface CustomImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
  height?: number;
}

export default function CustomImageLoader({ src, width, quality }: CustomImageLoaderProps) {
  return `https://example.com/myaccount/${src}?w=${width}&q=${quality || 75}`;
}
