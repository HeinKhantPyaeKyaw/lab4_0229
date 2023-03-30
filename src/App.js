import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo";

import TodoPage from "./pages/TodoPage"

import {BrowserRouter, Route, Routes} from "react-router-dom"
import TodayPage from "./pages/TodayPage"
import CalendarPage from "./pages/CalendarPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route exect path="/" element={<HomePage />} />
      <Route path="/todo" element={<TodoPage/>} />
      <Route path="/today" element={<TodayPage/>} />
      <Route path="/calendar" element={<CalendarPage/>} />

    </Routes>
    // </BrowserRouter>
  );
}

export default App;

