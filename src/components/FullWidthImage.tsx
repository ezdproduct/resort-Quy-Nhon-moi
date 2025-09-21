interface FullWidthImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const FullWidthImage = ({ src, alt, className }: FullWidthImageProps) => {
  return (
    <div className={`w-full h-[60vh] overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};