import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeSwitch from '@/components/ThemeSwitch';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { calculateYearsSince } from '@/lib/utils';
import { START_YEAR_EXPERIENCE } from '@/lib/constants';
import BackToTop from '@/components/BackToTop';
import Cursor from '@/components/Cursor';
import './globals.css';
import ParticlesLayout from '@/components/ParticlesLayout';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lu Ky Linh | Personal Portfolio',
  description: `I'm a Marketing Staff with over ${calculateYearsSince(
    START_YEAR_EXPERIENCE
  )} years of experience.`,
  icons: {
    icon: [
      'https://media.licdn.com/dms/image/D5603AQFHND7w3SOTmQ/profile-displayphoto-shrink_400_400/0/1664443812977?e=1719446400&v=beta&t=OYfejzaFDp8i7ka5qR93jo6zRUpgJHQUrmZzJClMoJM'
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <Cursor />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <BackToTop />
            <ThemeSwitch />
            <ParticlesLayout />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
