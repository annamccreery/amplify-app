import React from 'react';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signout, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signout}>Sign Out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default (App)
