// pages/_app.js
import '../styles/globals.css' // If you plan to add global styles later

// Import the AppProvider we defined
import { AppProvider } from './index'; // Import from index.js where we defined it

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;