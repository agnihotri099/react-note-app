import React from "react"

export default function Header({handleToggleDarkMode}){
    return(
       <div className="header">
       <h1>Notes</h1>
       <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode )} className="save">Toggle Mode</button>

       </div>
        
    )
}