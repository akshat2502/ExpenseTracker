import React from 'react';

function Summary(props){
    
    const income= props.transactions.filter(transaction=> transaction.type==='income').reduce((acc, transaction)=> acc + transaction.amount, 0);
    const expense= props.transactions.filter(transaction=> transaction.type==='expense').reduce((acc, transaction)=> acc + transaction.amount, 0);
    const balance= income - expense;
  
    const summaryStyle={
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10px",
    }

    return <div style={summaryStyle}>
        <p>Total Income: ₹ {income}</p>
        <p>Total Expense: ₹ {expense} </p>
        <p>Balance: ₹ {balance}</p>
    </div>
}

export default Summary;