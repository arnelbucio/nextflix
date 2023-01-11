import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthProvider>
          <div className='relative h-screen bg-gradient-to-b lg:h-[140vh]'>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
