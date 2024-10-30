import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center">Website Services Cost Calculator</h1>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
