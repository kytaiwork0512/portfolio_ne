'use client';

import { useTheme } from '@/context/theme-context';
import { DARK_COLORS, LIGHT_COLORS } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { VscSymbolColor } from 'react-icons/vsc';

const RandomBackgroundColor = () => {
  const { theme } = useTheme();

  const [backgroundColor, setBackgroundColor] = useState(
    theme === 'light' ? LIGHT_COLORS[0] : DARK_COLORS[0]
  );

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor, theme]);

  const changeBackgroundColor = () => {
    const colors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
    const randomNumber = Math.floor(Math.random() * colors.length);
    setBackgroundColor(colors[randomNumber]);
  };

  return (
    <button
      className="fixed top-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={changeBackgroundColor}>
      {<VscSymbolColor />}
    </button>
  );
};

export default RandomBackgroundColor;
