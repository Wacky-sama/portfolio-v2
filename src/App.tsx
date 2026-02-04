import { useEffect } from 'react';
import { supabase } from './lib/supabase';
import Header from './components/Header';

function App() {
  useEffect(() => {
    console.log('Supabase client:', supabase)
    console.log('Connected to:', import.meta.env.VITE_SUPABASE_URL)
  }, [])
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Header
          fullName='Kenji "Brocks" I. Tabugadir'
          location="Cagayan, Philippines"
          profilePicture="/profile.jpg"
        />
      </div>
    </div>
  );
}

export default App;