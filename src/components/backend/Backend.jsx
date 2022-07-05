//* Imports
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Vscode from "../common/Vscode";
import Websites from "../common/Websites";
import Packages from "../common/Packages";
import Programms from "../common/Programms";
import Sidebar from "../common/Sidebar";
import Card from "../common/Card";
import backendDB from "../../db/backend.json";
import NotFound from "../error/NotFound";

//* Backend JSX
function Backend() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-stretch justify-center min-h-[calc(100vh-75px)] gap-1 top">
      <Sidebar field={"backend"} />
      <Routes>
        <Route path="vscode" element={<Vscode vscode={backendDB.vscode} />} />
        <Route
          path="packages"
          element={<Packages packages={backendDB.packages} />}
        />
        <Route
          path="websites"
          element={<Websites websites={backendDB.websites} />}
        />
        <Route
          path="programms"
          element={<Programms programms={backendDB.programms} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Backend;
