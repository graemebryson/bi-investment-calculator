import React, { useEffect } from 'react';
import Calculator from './components/Calculator';

function App() {
  useEffect(() => {
    document.title = 'Best Impressions Investment Calculator';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-sm uppercase tracking-wider font-bold mb-2">Investment Calculator</h2>
          <h1 className="text-2xl font-bold"> Best Impressions </h1>
        </div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
