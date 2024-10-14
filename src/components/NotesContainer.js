import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router";
import Card from "./Card";
import { getAllNotesApi } from "../utils/Api";

const NotesContainer = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [notesList, setNotesList] = useState([])
  const [showTakeANote, setShowTakeNote] = useState(false)
  
  useEffect(()=> {
    // getNotesData()
    setNotesList([
      {title: "abc", quantity: 5},
    {title: "axdsdas", quantity: 12},  
    {title: "hgjfh", quantity: 13},
    {title: "srsrew", quantity: 12},
    {title: "eeewaed", quantity: 10}
    ])
    return function() {
      // console.log("data clean");
    }
  }, [])

  useEffect(() => {
    console.log("data changed --> ", notesList);
    
  }, [notesList])
  
  const handleQueryParam = (param) =>  {
    navigate(`/notes?sort:${param}`)
  }
  
  
  
  const getNotesData = async() => {
    // let apiRes = await getAllNotesApi()
    // console.log(apiRes?.data?.data?.data);
    // setNotesList(apiRes?.data?.data?.data)
  }

  const handleBook = (param) => {
    navigate(`/book/${param}`)
  }

  const list = [
    {title: "abc", quantity: 5},
    {title: "axdsdas", quantity: 12},  
    {title: "hgjfh", quantity: 13},
    {title: "srsrew", quantity: 12},
    {title: "eeewaed", quantity: 10}
  ]

  const handleClose = () => {
    setShowTakeNote(true)
    console.log(showTakeANote);
    
  }

  const handleUpdateNotesList = (data) => {
    console.log(data);
    setNotesList(notesList.filter(ele => ele.title !== data.title))
    
  }

   return (
    <div>
      <h1>Notes Container Component</h1>
      <button onClick={()=> handleQueryParam("low")}>Low</button>
      <button onClick={()=> handleQueryParam("high")}>High</button>
      {/* <Card noteDetails={{title: "sadsadsad", quantity: 10}} container="notes"/> */}
      {notesList.map((ele, index) => <Card key={index} noteDetails={ele} updateList={handleUpdateNotesList}/>)}
    </div>
  );

  // return(
  //   <div>
  //     {showTakeANote ? <div>take a note</div>
  //       : <div><input type="text" /><br /><button onClick={() => handleClose("addsad")}>Close</button></div>
  //     }
  //   </div>
  // )
}


export default NotesContainer;

//class component
//render
//componentDidMount --> initial data fetching, subscription, memory occupy --> called only once
// componentDidUpdate --> detect changes 
//componentUnmount --> cleaning opertaions 

//functional componet
//return
//useEffect -- with empty dependency -- componentDidMount
//useEffect -- with empty dependency return callback --componentUnmount
// useEffect -- with dependency list