import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInContainer from "./components/signIn/signIn.container";
import SignUpContainer from "./components/signUp/signUp.container";
import ToDoContainer from "./components/toDo/toDo.container";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInContainer />}></Route>
        <Route path="/signup" element={<SignUpContainer />}></Route>
        <Route path="/todo" element={<ToDoContainer />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
