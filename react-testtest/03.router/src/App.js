import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Header from './components/Header';
import Signup from "./components/Signup"
import TodoPage from "./pages/TodoPage"
// import SignupPage from "./pages/SignupPage"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>

      <Route path="/signup" element={<Signup />} />
      <Route path="/todos" element={<TodoPage />} />

      </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
