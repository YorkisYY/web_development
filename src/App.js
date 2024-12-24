import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="card-front">
          <div className="christmas-tree">🎄</div>
          <h1>Lina, I Luv U</h1>
          <div className="snow"></div>
        </div>
        <div className="card-inside">
          <h2>Dear Lina ❤️</h2>
          <p className="message">
            Merry Christmas!<br/>
            在這個特別的日子裡，<br/>
            想告訴妳：I Love You！<br/>
            願我們的每一天都像聖誕節一樣充滿驚喜與歡樂。<br/>
            <br/>
            Forever Yours ❤️
          </p>
          <div className="signature">With Love & Hugs 🎅</div>
        </div>
      </div>
    </div>
  );
}

export default App; 