import React from 'react';

function NameInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default NameInput;