import React, { useState } from 'react';

const UpdateCommand = () => {
  const [table, setTable] = useState('');
  const [field, setField] = useState('');
  const [newValue, setNewValue] = useState('');
  const [conditionField, setConditionField] = useState('');
  const [conditionValue, setConditionValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:5000/update_single_field', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        table: table,
        field: field,
        new_value: newValue,
        condition_field: conditionField,
        condition_value: conditionValue,
      }),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div>
      <h1>Update Command</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Table:
          <input
            type="text"
            value={table}
            onChange={(e) => setTable(e.target.value)}
          />
        </label>
        <br />
        <label>
          Field to Update:
          <input
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        </label>
        <br />
        <label>
          New Value:
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </label>
        <br />
        <label>
          Condition Field:
          <input
            type="text"
            value={conditionField}
            onChange={(e) => setConditionField(e.target.value)}
          />
        </label>
        <br />
        <label>
          Condition Value:
          <input
            type="text"
            value={conditionValue}
            onChange={(e) => setConditionValue(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateCommand;
