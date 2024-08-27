import React from 'react';

function EmailInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default EmailInput;