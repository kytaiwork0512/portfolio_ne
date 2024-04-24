'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const EyeTracker = (): React.JSX.Element => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { activeSection } = useActiveSectionContext();
  const [botMessage, setBotMessage] = useState(
    `You are on the ${activeSection} page!`
  );
  const [isDisplayMessage, setIsDisplayMessage] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [enableMinion, setEnableMinion] = useState(false);

  const randomMessages = [
    'Hey there! Still here?',
    'Enjoying your time?',
    'Need any help?',
    'Just checking in!',
    `You are on the ${activeSection} page!`,
    'Talk is cheap. Show me the code!',
    "It's not a bug - it's an undocumented feature.",
  ];

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
        setEnableMinion(true);
      }
    }

    // Check if the screen width is less than or equal to 767 pixels (typical mobile device width)
    const checkIsMobile = () => {
      setEnableMinion(window.innerWidth <= 767 ? false : true);
    };

    // Call the checkIsMobile function on component mount and window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    setIsDisplayMessage(true);
    setBotMessage(`You are on the ${activeSection} page!`);
    setCurrentCharIndex(0);
  }, [activeSection]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentCharIndex((prevIndex) => {
        if (prevIndex < botMessage.length) {
          return prevIndex + 1;
        } else {
          setTimeout(() => {
            setIsDisplayMessage(false);
          }, 3000);
          return prevIndex;
        }
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [currentCharIndex, botMessage]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * randomMessages.length);
      setBotMessage(randomMessages[randomIndex]);
      setIsDisplayMessage(true);
    }, 10000);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDisplayMessage]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const main = mainRef.current;
      if (!main) return;

      const mainRect = main.getBoundingClientRect();
      const centerX = mainRect.left + mainRect.width / 2;
      const centerY = mainRect.top + mainRect.height / 2;

      const angleDeg = calculateAngle(mouseX, mouseY, centerX, centerY);

      const eyes = document.querySelectorAll('.eye');
      eyes.forEach((eye: any) => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  const calculateAngle = (
    cx: number,
    cy: number,
    ex: number,
    ey: number
  ): number => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  };

  return enableMinion ? (
    <section>
      <div
        id="toast-bottom-left"
        className="fixed flex border-1 items-center max-w-xs text-gray-500 bottom-[180px] left-[68px] text-black dark:text-white"
        role="alert">
        {isDisplayMessage && (
          <div className="text-sm font-normal">
            {botMessage.slice(0, currentCharIndex)}
          </div>
        )}
      </div>
      <main className="relative" ref={mainRef}>
        <Image
          id="anchor"
          src="https://raw.githubusercontent.com/ornelasedward/EyeFollow_effect/main/minion.png"
          alt="Minion"
          className="relative w-40 h-40 z-10"
          height={40}
          width={40}
          unoptimized
        />
        <div id="eyes" className="absolute z-20 flex top-[28px] left-[30px]">
          <Image
            id="eye-left"
            className="eye w-7 h-7"
            src="https://raw.githubusercontent.com/ornelasedward/EyeFollow_effect/main/eye.png"
            style={{ bottom: 'calc(50% - 4px)', right: 'calc(50% - 4px)' }}
            alt="Eye"
            width={20}
            height={20}
            unoptimized
          />
          <Image
            id="eye-right"
            className="eye w-7 h-7 relative left-[7px] "
            src="https://raw.githubusercontent.com/ornelasedward/EyeFollow_effect/main/eye.png"
            style={{ bottom: 'calc(50% - 4px)', right: 'calc(50% - 31px)' }}
            alt="Eye"
            width={20}
            height={20}
            unoptimized
          />
        </div>
      </main>
    </section>
  ) : (
    <></>
  );
};

export default EyeTracker;
