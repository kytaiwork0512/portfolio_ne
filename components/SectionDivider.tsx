'use client';

import { useTheme } from '@/context/theme-context';
import './SectionDivider.css';
import { useEffect, useState } from 'react';

const SectionDivider = (): React.JSX.Element => {
  const { theme } = useTheme();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const chevronBackgroundColor = theme === 'dark' ? '#ffffff' : '#000000';
    document.documentElement.style.setProperty(
      '--chevron-background-color',
      chevronBackgroundColor
    );

    const timeoutId = setTimeout(() => {
      setShouldRender(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop = window.scrollY;
      if (distanceFromTop >= 600) {
        setShouldRender(false);
      } else {
        setShouldRender(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="my-24 h-16 w-16 hidden sm:block dark:bg-opacity-20">
      {shouldRender && (
        <>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </>
      )}
    </div>
  );
};

export default SectionDivider;
