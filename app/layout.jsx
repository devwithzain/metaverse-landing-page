import '@/styles/globals.css';

export const metadata = {
  title: "Metaverse",
  description: "Enter The Metaverse"
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      {children}
    </body>
  </html>
);

export default RootLayout;
