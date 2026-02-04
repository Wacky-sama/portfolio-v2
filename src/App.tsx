import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Header
          fullName='Kenji "Brocks" I. Tabugadir'
          location="Cagayan, Philippines"
          profilePicture=""
        />
      </div>
    </div>
  );
}

export default App;