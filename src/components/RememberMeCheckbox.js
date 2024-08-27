import React from 'react';

function RememberMeCheckbox({ checked, onChange }) {
  return (
    <div>
      <label htmlFor="rememberMe">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={checked}
          onChange={onChange}
        />
        Remember Me
      </label>
    </div>
  );
}

export default RememberMeCheckbox;