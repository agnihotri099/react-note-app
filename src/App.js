import React,{useState,useEffect} from "react"
import {nanoid} from "nanoid"
import NotesList from "./NotesList.js"
import Search from "./Search.js";
import Header from "./Header.js";


export default function App(){
     // eslint-disable-next-line
    const [notes,setNotes]=useState([
        {
         id:nanoid(),
         text:"This is my first note",
         date:"21/05/2021",
        },
        {
            id:nanoid(),
            text:"This is my second note",
            date:"26/05/2021",
           },
           {
            id:nanoid(),
            text:"This is my third note",
            date:"25/05/2021",
           },
]);
     const [searchtext,setSearchText]=useState("");
     const [darkMode,setDarkMode]=useState(false);

     useEffect(()=>{
          const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'))
          if(savedNotes){
            setNotes(savedNotes);
        }
        },[])
     

     useEffect(()=>{
localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
     },[notes])


    const addNote=(text)=>{
       const date = new Date();
       const newNote={
           id:nanoid(),
           text:text,
           date:date.toLocaleDateString()
       };
       const newNotes=[...notes,newNote];
       setNotes(newNotes)
    };
    
    const deleteNote=(id)=>{
        const newNotes=notes.filter((note)=>note.id!==id)
        setNotes(newNotes)
    }

    return(
        <div className={`${darkMode && "dark-mode"}`}>
        <div className="container">
           <Header handleToggleDarkMode={setDarkMode}/>
           <Search handleSearchNote={setSearchText}/>
           
           <NotesList notes={notes.filter((note)=>
           note.text.toLowerCase().includes(searchtext)
           )} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
        </div>
        </div>
    )
}