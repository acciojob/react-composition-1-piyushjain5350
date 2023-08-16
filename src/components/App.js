
import React , {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [val,setVal]=useState('');
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li onClick={()=>setVal("Tab 1")}>Tab 1</li>
          <li onClick={()=>setVal("Tab 2")}>Tab 2</li>
          <li onClick={()=>setVal("Tab 3")}>Tab 3</li>
        </ul>

        <p>This is a content for {val}</p>
    </div>
  )
}

export default App
