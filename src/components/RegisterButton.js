import React from 'react';

function RegisterButton({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        Register
      </button>
    </div>
  );
}

export default RegisterButton;