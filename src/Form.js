import React from 'react';
import { useState } from 'react';

function Form(props){
    
    const [description, setDescription]= useState('');
    const [amount, setAmount]= useState(0);
    const [type, setType]= useState("income");

    const handleSubmit = e => {
        e.preventDefault();
        props.addTransaction({description, amount: parseFloat(amount), type});
        setDescription('');
        setAmount(0);
    }

    const [isMouseOver, setMouseOver]= useState(false);

    const updatecolor=(()=>{ setMouseOver(true); })

    const changecolor=(() => { setMouseOver(false); })

    const inputStyle={
        padding: "15px",
        marginBottom: "5px",
        paddingBottom: "20px",
        border: "1px solid rgba(252, 252, 252, 0.4)",
        backgroundColor: "rgba(252, 252, 252, 0.2)",
        width: "250px",
        borderRadius: "3px",
        fontFamily: "Source Sans Pro, sans-serif"
    }

    const formStyle= {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const buttonStyle= {
        appearance: "none",
        outline: "0",
        backgroundColor: isMouseOver ? "black" : "white",
        border: "0",
        padding: "10px 15px",
        color: "#50a3a2",
        borderRadius: "3px",
        width: "250px",
        fontSize: "18px",
        cursor: 'pointer',
      }

    return <div>
        <form onSubmit={handleSubmit} style={formStyle}>
            <input type='text' value={description} onChange={e=>{setDescription(e.target.value)}} placeholder='Description' required style={inputStyle}/>
            <input type='number' value={amount} onChange={e=>{setAmount(e.target.value)}} placeholder='Amount (₹)' required style={inputStyle}/>
            <select type={type} onChange={(e)=>setType(e.target.value)} style={inputStyle}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            </select>
            <button type='submit'
              style={ buttonStyle }
              onMouseOver={updatecolor}
              onMouseOut={changecolor}
             >Add</button>
        </form>
    </div>
}

export default Form;