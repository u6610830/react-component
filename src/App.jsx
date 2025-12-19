import "./App.css";
import Greetings from "./Greetings.jsx";
import User from "./User.jsx";

function App() {
  return (
    <div className="card">
      <Greetings />
      <User name="Voramet Borvornsirisan" />
    </div>
  );
}

export default App;
