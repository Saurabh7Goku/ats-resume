import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'ATS Resume Scanner',
  description: 'Optimize your resume for ATS with AI-powered scanning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}