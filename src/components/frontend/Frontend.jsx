//* Imports
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Vscode from "../common/Vscode";
import Websites from "../common/Websites";
import Packages from "../common/Packages";
import Programms from "../common/Programms";
import Sidebar from "../common/Sidebar";
import Card from "../common/Card";
import frontendDB from "../../db/frontend.json";
import NotFound from "../error/NotFound";
import Chrome from "../common/Chrome";
import Roadmap from "../common/Roadmap";

//* Frontend JSX
function Frontend() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-stretch justify-center min-h-[calc(100vh-75px)] gap-1 top">
      <Sidebar field={"frontend"} />
      <Routes>
        <Route path="vscode" element={<Vscode vscode={frontendDB.vscode} />} />
        <Route
          path="packages"
          element={<Packages packages={frontendDB.packages} />}
        />
        <Route
          path="websites"
          element={<Websites websites={frontendDB.websites} />}
        />
        <Route
          path="programms"
          element={<Programms programms={frontendDB.programms} />}
        />
        <Route path="chrome" element={<Chrome chrome={frontendDB.chrome} />} />
        <Route
          path="roadmap"
          element={
            <Roadmap
              roadmap={"/images/frontend.svg"}
              downloadLink={"/frontend.pdf"}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Frontend;
