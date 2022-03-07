import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Nav,
  HomeComponent,
  RoomPageComponent,
  RoomDetailPageComponent,
  SpacePageComponent,
  InfoPageComponent,
  RecyclePageComponent,
  InstructionsPageComponent,
  UtilityBillPageComponent,
  LoginPageComponent,
  SignupPageComponent,
  NotMatchComponent,
} from "./components";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path={"/"} element={<HomeComponent />}></Route>
        <Route path={"/room"} element={<RoomPageComponent />}></Route>
        <Route
          path={"/room/:roomNumber"}
          element={<RoomDetailPageComponent />}
        ></Route>
        <Route path={"/space"} element={<SpacePageComponent />}></Route>
        <Route path={"/info"} element={<InfoPageComponent />}></Route>
        <Route
          path={"/info/recycle"}
          element={<RecyclePageComponent />}
        ></Route>
        <Route
          path={"/info/instructions"}
          element={<InstructionsPageComponent />}
        ></Route>
        {/* <Route path={"/utility"} element={<UtilityBillPageComponent />}></Route> */}
        <Route
          path={"/login"}
          element={
            <LoginPageComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route>
        <Route path={"/signup"} element={<SignupPageComponent />}></Route>
        <Route path={"*"} element={<NotMatchComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
