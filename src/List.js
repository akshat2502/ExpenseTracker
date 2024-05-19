import React from 'react';
import { useState } from 'react';

function List(props){

    const listStyle= {
        listStyleType: "circle",
    }

    const listItemStyle= {
        padding: "10px",
        cursor: "pointer",
        textDecoration: "none",
        borderBottom: "1px solid #cf9"
    }

    const [clickedItems, setClickedItems] = useState({});

    const handleClick = (index) => {
        setClickedItems((prevClickedItems) => ({
            ...prevClickedItems,
            [index]: !prevClickedItems[index]
        }));
    };

    return (<ul style={listStyle}>
            { props.transactions.map((transaction, index)=>{ 
                return <li key={index} style={{...listItemStyle,  textDecoration: clickedItems[index] ? "line-through" : "none"}} onClick={() => handleClick(index)}>
                    {transaction.description}: {transaction.type === 'income' ? '+' : '-'}  {transaction.amount}
                    </li>
             }) }
        </ul> );
}

export default List;