
import './App.css';
import Form from "./Form";
import RenderData from "./RenderData"; 
function App() {
  return (
    <div className="App">
   <div>
     <h1 className="form">Todo list</h1>
    <RenderData/>
    <Form/>
   </div>
    </div>
  );
}

export default App;
