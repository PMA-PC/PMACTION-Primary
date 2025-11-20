// pages/index.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../lib/supabaseClient';

// Create Context
const AppContext = createContext();

// Custom Hook
export const useApp = () => useContext(AppContext);

// Define the AppProvider component
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [appState, setAppState] = useState({});

  useEffect(() => {
    // Check active session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    user,
    appState,
    setAppState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Define the Home component
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="text-center p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to PMAction
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Your unified platform for project management.
        </p>
        <div className="space-x-4">
          <Link href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Login
          </Link>
        </div>
      </main>
    </div>
  );
};

// --- Export both components ---
export { AppProvider };
export default Home;