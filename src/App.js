import React, { useState, useEffect, useMemo, useCallback } from 'react';

import GlobalStyle from './styles/global';

function App() {
  const [tech, setTech] = useState(['React.js', 'React Native']);
  const [newTech, setNewTech] = useState('');

  // useCallback somente em funções que manipulam o estado
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [tech, newTech]);

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

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <GlobalStyle />
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />

      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
