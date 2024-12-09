import React from 'react';

function MainLayout({ children}) {
  return (
    <div>
      <header>
        <h2>header</h2>
      </header>

      {children}
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
}

export default MainLayout;
