import React, { createContext, useState } from 'react';
import Dialog from './components/Dialog';
import AuthModal from './components/Modal';
import AdminPage from './components/AdminPage';

export const FirstContext = createContext(null);
export const HistoryContext = createContext(null);

function App() {

  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
    <AuthModal />
    <div>
    <button onClick={openDialog}>Open Dialog</button>
    <Dialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
    <AdminPage />
    </>
  );
}

export default App;
