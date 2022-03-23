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
  UtilityBillPostPageComponent,
  // NotificationPageComponent,
  // NotificationPostPageComponent,
  LoginPageComponent,
  SignupPageComponent,
  NotMatchComponent,
} from "./components";
import AuthService from "./services/auth.service";

function App() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);

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
        <Route
          path={"/info"}
          element={<InfoPageComponent currentUser={currentUser} />}
        ></Route>
        <Route
          path={"/info/recycle"}
          element={<RecyclePageComponent />}
        ></Route>
        <Route
          path={"/info/instructions"}
          element={<InstructionsPageComponent />}
        ></Route>
        <Route
          path={"/info/utility"}
          element={<UtilityBillPageComponent currentUser={currentUser} />}
        ></Route>
        <Route
          path={"/info/utility/post"}
          element={<UtilityBillPostPageComponent currentUser={currentUser} />}
        ></Route>
        {/* <Route
          path={"/info/notification"}
          element={
            <NotificationPageComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route>
        <Route
          path={"/info/notification/post"}
          element={
            <NotificationPostPageComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route> */}
        {/* <Route
          path={"/info/notification/edit"}
          element={
            <NotificationEditPageComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route> */}
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
