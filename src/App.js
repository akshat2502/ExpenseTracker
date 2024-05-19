import { useState } from 'react';
import Form from './Form';
import Summary from './Summary';
import List from './List';
import './App.css';

function App() {

  const [transaction, setTransactions]= useState([]);

  const addTransaction = (newTransaction)=>{
    setTransactions([...transaction, newTransaction]);
  }

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#50a3a2' 
  }

  return (
    <div style={appStyle}>
      <h1>Budget Tracker</h1>
      <Form addTransaction={addTransaction}/>
      <List transactions={transaction} />
      <Summary transactions={transaction}/>
    </div>
  );
}

export default App;
