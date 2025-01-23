import { Route, Routes } from "react-router-dom";
import FirstPage from "./components/firstPage/FirstPage";
import CreatePage from "./components/createPage/CreatePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/answer" element={<div>edit page</div>} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
