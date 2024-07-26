import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Inputs from './components/Inputs';

const App = () => {
  return (
    <div className="text-blue-400 bg-gray-700">
      <Navbar />
      <Heading />
      <Inputs />
    </div>
  )
}

export default App
