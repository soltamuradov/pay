import {MainPage} from "./page";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<MainPage />} />
        </Routes>
    </div>
  );
}

export default App;
