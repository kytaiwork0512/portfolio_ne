'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const Cursor = (): React.JSX.Element => {
  const [enableCursor, setEnableCursor] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobileDevice = (): boolean => {
        const userAgent = navigator.userAgent;
        const isMobile = /Mobi|Android/i.test(userAgent);
        const isIOS = /iPad|iPhone|iPod|iPad/.test(navigator.platform);
        const isSmallScreen = window.innerWidth <= 600; // Adjust the threshold as needed

        return isMobile || isIOS || isSmallScreen;
      };

      if (!isMobileDevice()) {
        setEnableCursor(true);
      }
    }

    // Check if the screen width is less than or equal to 767 pixels (typical mobile device width)
    const checkIsMobile = () => {
      setEnableCursor(window.innerWidth <= 767 ? false : true);
    };

    // Call the checkIsMobile function on component mount and window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return enableCursor ? (
    <div className="cursor__dot">
      <AnimatedCursor
        color="255, 0, 0"
        innerSize={20}
        outerSize={35}
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={2}
        trailingSpeed={3}
      />
    </div>
  ) : (
    <></>
  );
};

export default Cursor;
