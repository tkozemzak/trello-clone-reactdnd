import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header/>
      <Homepage/>
    </DndProvider>
  );
}

export default App;
