import React from 'react';
import AppRoutes from './routes';

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden"> {/* Prevents horizontal scroll */}
      <AppRoutes />
    </div>
  );
};

export default App;
