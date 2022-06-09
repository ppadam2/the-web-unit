import ImageList from "./Components/ImageList/ImageList.js";
import Header from "./Components/Header/Header.js";
import ActionAreaCard from "./Components/Card/Card.js";
import { useState } from "react";

function App() { // Todo: Add react router, Clean up messy logic and revise card component to take values
  const [state, setState] = useState({ toggle: false });

  function toggle() {
    if (state.toggle === true) {
      setState({
        toggle: false
      })
    } else {
      setState({
        toggle: true
      })
    } 
  }

  return (
    <div className="App">
      <Header />
      {(state.toggle === true) &&
        <ImageList />
      }
      {(state.toggle === false) &&
        <div style={{display: "inline-block", marginLeft: "35%"}} onClick={() => toggle()}>
            <ActionAreaCard />
        </div>
      }
    </div>
  );
}

export default App;
