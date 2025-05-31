import { useState } from 'react';
import './App.css';

function App() {
  const [selectedModel, setSelectedModel] = useState('3d_scan_man_1.usdz');

  return (
    <div className="App">
      <h1>Legal AR Demo</h1>
      <p>Wähle einen juristischen Fall und erlebe ihn in AR:</p>

      <select
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="3d_scan_man_1.usdz">Mietrechtlicher Wasserschaden</option>
      </select>

      <br /><br />
      <a
        rel="ar"
        href={selectedModel}
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Fall in AR anzeigen
      </a>
    </div>
  );
}

export default App;
