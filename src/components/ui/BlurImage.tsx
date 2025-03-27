
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const BlurImage = ({ 
  src, 
  alt, 
  className, 
  containerClassName, 
  ...props 
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 backdrop-blur-xs bg-muted/30 animate-pulse" />
      )}
      
      <img
        src={currentSrc || src}
        alt={alt}
        className={cn(
          "w-full h-full transition-all duration-500",
          isLoading ? "scale-[1.01] blur-sm" : "scale-100 blur-0",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default BlurImage;
