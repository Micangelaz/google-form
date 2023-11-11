'use client';

import React from 'react';
import Form from './components/Form';
import RootLayout from './layout';

import '../scss/style.css';

const App: React.FC = () => {

  return (
  <RootLayout>
    <Form />
  </RootLayout>
  );
};

export default App;
