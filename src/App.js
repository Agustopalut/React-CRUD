import UserList from "./components/UserList";
import AddUsers from "./components/AddUsers";
import EditUsers from "./components/EditUsers";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />}/>
          <Route path="/add" element={<AddUsers />}/>
          <Route path="/edit/:id" element={<EditUsers />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
