import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App overflow-hidden" dir="rtl">
      <Outlet />
    </div>
  );
}

export default App;
