// pages/_app.js
import '../styles/globals.css'; // Global styles
import { AppProvider } from '../lib/context';
import { OnboardingProvider } from '../context/OnboardingContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <OnboardingProvider>
        <Component {...pageProps} />
      </OnboardingProvider>
    </AppProvider>
  );
}

export default MyApp;