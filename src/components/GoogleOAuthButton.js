import React from 'react';

function GoogleOAuthButton() {
  const handleGoogleOAuth = () => {
    // Logic for Google OAuth goes here
    alert('Google OAuth clicked');
  };

  return (
    <div>
      <button type="button" onClick={handleGoogleOAuth}>
        Continue with Google
      </button>
    </div>
  );
}

export default GoogleOAuthButton;