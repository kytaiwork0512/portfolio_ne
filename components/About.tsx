'use client';

import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';

const About = (): React.JSX.Element => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="italic">
          Greetings! I'm Linh, also known as{' '}
          <span className="font-medium">Lư Kỳ Linh</span>.
        </span>{' '}
        Originating from the serene province of{' '}
        <span className="font-bold">Kiên Giang, Vietnam</span>. I ventured into
        the realms of{' '}
        <span className="font-medium">
        Marketing
        </span>
        at <span className="font-medium">University of Finance - Marketing</span>. My journey
        has been fueled by an insatiable curiosity, propelling me to craft
        innovative and pragmatic marketing solutions.
      </p>

      <p className="pt-5">
        Previously, alongside my full-time role at the company, I dedicated time
        to freelancing on <span className="font-medium">E-Commerce</span>{' '}
        projects to explore new horizons.
      </p>

      <p className="pt-5">
        <span className="italic">Beyond the realms of marketing</span>, I find solace
        in the realms of Chess, the harmonious melodies of music, playing video
        games, watching movies, and playing with my dog. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{' '}
        <span className="font-medium">history and philosophy</span>. I am also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
};

export default About;
