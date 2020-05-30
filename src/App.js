import React from "react";
import Sidebar from "./containers/Sidebar/Sidebar";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="row m-0">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 p-0">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
