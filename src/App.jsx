import React from 'react';
import './style.css';

import Header from './components/Header';
import Categories from './components/Categories';
import Featured from './components/Featured';
import Popular from './components/Popular';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Featured />
      <Popular />
      <Footer />
    </>
  );
}

export default App;

