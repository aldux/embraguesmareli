/**
 * ComponenteEjemplo.js - Contador en React
 * Ejemplo de componente con estado usando hooks.
 */

import React, { useState } from 'react';

function ComponenteEjemplo() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador((c) => c + 1);
  const decrementar = () => setContador((c) => c - 1);
  const reiniciar = () => setContador(0);

  return (
    <div className="contador-ejemplo" style={estilos.contenedor}>
      <h2 style={estilos.titulo}>Contador</h2>
      <p style={estilos.valor} aria-live="polite">
        {contador}
      </p>
      <div style={estilos.botones}>
        <button type="button" onClick={decrementar} style={estilos.btn}>
          −
        </button>
        <button type="button" onClick={reiniciar} style={estilos.btn}>
          Reiniciar
        </button>
        <button type="button" onClick={incrementar} style={estilos.btn}>
          +
        </button>
      </div>
    </div>
  );
}

const estilos = {
  contenedor: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '1.5rem',
    maxWidth: '320px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  titulo: {
    margin: '0 0 0.5rem',
    fontSize: '1.25rem',
    color: '#333',
  },
  valor: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0.75rem 0',
    color: '#111',
  },
  botones: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btn: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '6px',
    background: '#f5f5f5',
  },
};

export default ComponenteEjemplo;
