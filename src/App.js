import { Routes, Route } from "react-router-dom";
import {
  Nav,
  HomeComponent,
  RoomPageComponent,
  RoomDetailPageComponent,
  SpacePageComponent,
  // InfoPageComponent,
  NotMatchComponent,
} from "./components";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={"/"} element={<HomeComponent />}></Route>
        <Route path={"/room"} element={<RoomPageComponent />}></Route>
        <Route
          path={"/room/:roomNumber"}
          element={<RoomDetailPageComponent />}
        ></Route>
        <Route path={"/space"} element={<SpacePageComponent />}></Route>
        {/* <Route path={"/info"} element={<InfoPageComponent />}></Route> */}
        <Route path={"*"} element={<NotMatchComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
