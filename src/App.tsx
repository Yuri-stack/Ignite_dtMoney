import { useState } from 'react'
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')  // Indica qual é a DIV root para o modal

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModalOpen(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModalOpen(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsContext.Provider value={ [] }>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModalOpen } />
      <Dashboard />
      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen }
        onRequestClose={ handleCloseNewTransactionModalOpen }
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}