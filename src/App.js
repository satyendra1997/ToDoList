import React, { useState } from "react";
import './App.css';
import './ToDoLists.jsx';
import ToDoLists from "./ToDoLists";
const App=()=>{
const [inputList,setInputList]=useState("");
const [items,setItems]=useState([]);
const itemEvent=(event)=>
{
  setInputList(event.target.value);
};
const listOfItems=()=>
{
   setItems((oldItems)=>{
     return [...oldItems,inputList]
   })
   setInputList("")
}
const deleteItems=(id)=>
{
    setItems((oldItems)=>
    {
      return oldItems.filter((arrele,index)=>
      {
        return index!==id;
      });
    });
}
  return(
    <> 
    <div className="main_div">
      <div className="center_div">
      <br/>
       <h1>To Do List</h1>
       <br/>
       <input type="text" placeholder="Add A Item" value={inputList} onChange={itemEvent}></input>
       <button onClick={listOfItems}> + </button>
       <ol>
          {/* <li>{inputList}</li> */}
         { items.map((itemval,index)=>{
            return(<ToDoLists key={index} id={index} text={itemval} onSelect={deleteItems}/>)
          })
         }
       </ol>
      </div>

    </div>

    </>
  )
}

export default App;
