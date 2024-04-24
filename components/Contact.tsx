'use client';

import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import SubmitBtn from './SubmitButton';
import { useState } from 'react';

const Contact = (): React.JSX.Element => {
  const { ref } = useSectionInView('Contact');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSendEmail = async (formData: FormData) => {
    setSending(true);

    const { error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    }

    setSending(false);
    toast.success('Email sent successfully!');
    setEmail('');
    setMessage('');
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:lukylinh@gmail.com">
          lukylinh@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={handleSendEmail}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={sending}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={5000}
          disabled={sending}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
