import React, { useState, useEffect } from 'react';

import GlobalStyle from './styles/global';

function App() {
  const [tech, setTech] = useState(['React.js', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    // willUnmount
    // deixa de ser montado - deixar de existir
    // return () => {};
  }, []);

  // função que vai ser executada
  // quando vai ser executada = array de dependências
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]); // o state que você for usar deve estar nesse array

  return (
    <>
      <GlobalStyle />
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
