import { Routes, Route } from "react-router-dom";
import Vscode from "../common/Vscode";
import Websites from "../common/Websites";
import Packages from "../common/Packages";
import Programms from "../common/Programms";
import Sidebar from "../common/Sidebar";

function Backend() {
  return (
    <div className="flex gap-1">
      <Sidebar field={"backend"} />
      <Routes>
        <Route
          path="vscode"
          element={
            <Vscode>
              <h1>Backend: Vscode Tools</h1>
            </Vscode>
          }
        />
        <Route
          path="websites"
          element={
            <Websites>
              <h1>Backend: Websites Tools</h1>
            </Websites>
          }
        />
        <Route
          path="packages"
          element={
            <Packages>
              <h1>Backend: Packages Tools</h1>
            </Packages>
          }
        />
        <Route
          path="programms"
          element={
            <Programms>
              <h1>Backend: Programms Tools</h1>
            </Programms>
          }
        />
      </Routes>
    </div>
  );
}

export default Backend;
