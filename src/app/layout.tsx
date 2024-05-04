import type { Metadata } from 'next';
import {
   VT323,
   Roboto,
   Cedarville_Cursive,
   Instrument_Serif,
} from 'next/font/google';
import './globals.css';

const roboto = Roboto({
   weight: ['400', '700'],
   style: ['italic', 'normal'],
   variable: '--ff-sans',
   subsets: ['latin'],
});
const vt323 = VT323({
   weight: '400',
   variable: '--ff-mono',
   subsets: ['latin'],
});
const cedarville = Cedarville_Cursive({
   weight: '400',
   variable: '--ff-cursive',
   subsets: ['latin'],
});
const instrument = Instrument_Serif({
   weight: '400',
   variable: '--ff-serif',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Dictionary Web App',
   description: 'A dictionary app to look up words',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={[
               roboto.variable,
               vt323.variable,
               cedarville.variable,
               instrument.variable,
            ].join(' ')}
         >
            {children}
         </body>
      </html>
   );
}
