import React, { useState } from 'react';

function App() {
  const [command, setCommand] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Función para determinar a qué ruta enviar el comando basado en el tipo de comando
  const sendCommand = async () => {
    let url = '';
    
    // Identificar el tipo de comando ingresado por el usuario
    if (command.match(/^UPDATE\s+\w+\s+SET\s+\w+\s*=/i)) {
      // Actualizar un solo campo
      url = 'update_single_field';
    } else if (command.match(/^UPDATE\s+\w+\s+SET\s+.+WHERE\s+\w+\s*=/i)) {
      // Actualizar múltiples campos
      url = 'update_multiple_fields';
    } else if (command.match(/^UPDATE\s+\w+\s+SET\s+.+WHERE\s+\w+\s+IN\s*\(.+\)/i)) {
      // Actualizar múltiples registros
      url = 'update_multiple_records';
    } else if (command.match(/^UPDATE\s+\w+\s+SET\s+.+WHERE\s+\(.+\)/i)) {
      // Actualizar con subconsultas
      url = 'update_with_subquery';
    } else {
      setResponseMessage('Comando no reconocido.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });

      const data = await response.json();
      setResponseMessage(data.message || data.error);
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error al procesar el comando.');
    }
  };

  return (
    <div>
      <h1>Gestor de Base de Datos</h1>
      <textarea
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Escribe el comando SQL-like"
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={sendCommand}>Enviar Comando</button>
      <p>{responseMessage}</p>
    </div>
  );
}

export default App;
