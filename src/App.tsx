import "./App.css";
import { CourseDetails } from "./components/CourseDetails";
import { CourseList } from "./components/CourseList";
import { Router } from "./components/Router";

function App() {
  return (
    <Router routes={{ CourseList, CourseDetails }} hide={["CourseDetails"]} />
  );
}

export default App;
