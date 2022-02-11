import { Routes, Route } from "react-router-dom";
import {
  Nav,
  HomeComponent,
  RoomPageComponent,
  NotMatchComponent,
} from "./components";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={"/"} element={<HomeComponent />}></Route>
        <Route path={"room"} element={<RoomPageComponent />}></Route>
        <Route path={"*"} element={<NotMatchComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
