// components/GoogleAd.tsx
import { useEffect, useRef } from 'react';

interface GoogleAdProps {
  slot: string;
  format?: string;
  responsive?: boolean;
}

export default function GoogleAd({ slot, format = "auto", responsive = true }: GoogleAdProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if ((window as any).adsbygoogle && adRef.current) {
        (window as any).adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2905761926194202"  // Replace with your ID
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
      ref={adRef}
    />
  );
}
