import { Routes, Route } from "react-router-dom";
import Vscode from "../common/Vscode";
import Websites from "../common/Websites";
import Packages from "../common/Packages";
import Programms from "../common/Programms";
import Sidebar from "../common/Sidebar";

function Frontend() {
  return (
    <div className="flex gap-1">
      <Sidebar field={"frontend"} />
      <Routes>
        <Route
          path="vscode"
          element={
            <Vscode>
              <h1>Frontend: Vscode Tools</h1>
            </Vscode>
          }
        />
        <Route
          path="websites"
          element={
            <Websites>
              <h1>Frontend: Websites Tools</h1>
            </Websites>
          }
        />
        <Route
          path="packages"
          element={
            <Packages>
              <h1>Frontend: Packages Tools</h1>
            </Packages>
          }
        />
        <Route
          path="programms"
          element={
            <Programms>
              <h1>Frontend: Programms Tools</h1>
            </Programms>
          }
        />
      </Routes>
    </div>
  );
}

export default Frontend;
