import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '@/context/Usercontext';
export const metadata = {
  title: "Chat Bot",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
