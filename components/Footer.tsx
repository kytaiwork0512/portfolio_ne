export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Lư Kỳ Tài. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        Next.js 14.0.4, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend
      </p>
    </footer>
  );
}
