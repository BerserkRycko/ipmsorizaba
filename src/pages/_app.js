import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Navbar from '../components/commons/Navbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <header className="bg-primary text-primary-foreground py-6">
      <Navbar />
    </header>
    <Component {...pageProps} />;
    </>
  )
}