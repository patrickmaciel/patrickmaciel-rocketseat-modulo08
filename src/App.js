import React, { useState } from 'react';

import GlobalStyle from './styles/global';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
  }

  return (
    <>
      <GlobalStyle />
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
