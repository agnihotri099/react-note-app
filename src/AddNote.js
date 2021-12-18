import React,{useState} from "react"
export default function AddNote({handleAddNote}){
    const [noteText,setNoteText]=useState("");
    const characterLimit=200;
    
    function handleChange(event){
        if(characterLimit-event.target.value.length>=0){
        setNoteText(event.target.value)
        }
    }

    function handleSave(){
        if(noteText.trim().length > 0){
        handleAddNote(noteText);
        setNoteText("")

        }
    }


    return(
        <div className="note new">
        <textarea rows="8" cols="10" placeholder="Type to add a note..." value={noteText} onChange={handleChange}>
        
        </textarea>
        <div className="note-footer">
            <small>{characterLimit-noteText.length} Remaining</small>
            <button className="save" onClick={handleSave}>Save</button>
        </div>
        </div>
    )
}