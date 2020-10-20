import React from 'react';
import './App.css';


export function A() { console.log("CHAMOU A") }

export function B() { console.log("CHAMOU B") }

export function App() {
  console.log("CHAMOU APP")
  return (
    <div className="App">
      <h1>Code Dojo Starter</h1>
    </div>
  );
}

