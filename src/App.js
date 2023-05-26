import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <Timeline />

      {/* Widget */}
    </div>
  );
}

export default App;
