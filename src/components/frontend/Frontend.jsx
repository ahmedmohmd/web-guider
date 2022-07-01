import { Routes, Route } from "react-router-dom";
import Vscode from "../common/Vscode";
import Websites from "../common/Websites";
import Packages from "../common/Packages";
import Programms from "../common/Programms";
import Sidebar from "../common/Sidebar";
import frontendDB from "../../db/frontend.json";
import styled from "../../styles/Frontend.module.scss";
import Card from "../common/Card";
import { BsBullseye } from "react-icons/bs";

function Frontend() {
  return (
    <div className="relative flex min-h-screen gap-1">
      <Sidebar field={"frontend"} />
      <Routes>
        <Route
          path="vscode"
          element={
            <Vscode>
              {frontendDB.vscode.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                  {frontendDB.vscode.map((extension) => {
                    return (
                      <Card
                        key={extension.id}
                        uniqueId={extension.modalId}
                        cardTitle={extension.name}
                        cardSubtitle={"Vscode Extensions"}
                        cardDescription={extension.description}
                        offecialUrl={extension.offecialUrl}
                        vscodeUrl={extension.vscodeUrl}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-1/2 ">
                    <img
                      className="max-h-full w-max-w-full "
                      src="/images/coming-soon-image.svg"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </Vscode>
          }
        />
        <Route
          path="websites"
          element={
            <Websites>
              {frontendDB.websites.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                  {frontendDB.websites.map((website) => {
                    return (
                      <Card
                        key={website.id}
                        uniqueId={website.modalId}
                        cardTitle={website.name}
                        cardSubtitle={"Websites"}
                        cardDescription={website.description}
                        offecialUrl={website.offecialUrl}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-1/2 ">
                    <img
                      className="max-h-full w-max-w-full "
                      src="/images/coming-soon-image.svg"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </Websites>
          }
        />
        <Route
          path="packages"
          element={
            <Packages>
              {frontendDB.packages.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                  {frontendDB.packages.map((pack) => {
                    return (
                      <Card
                        key={pack.id}
                        uniqueId={pack.modalId}
                        cardTitle={pack.name}
                        cardSubtitle={"Packages"}
                        cardDescription={pack.description}
                        npmInstallCommand={pack.installCommand}
                        offecialUrl={pack.offecialUrl}
                        npmUrl={pack.npmUrl}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-1/2 ">
                    <img
                      className="max-h-full w-max-w-full "
                      src="/images/coming-soon-image.svg"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </Packages>
          }
        />
        <Route
          path="programms"
          element={
            <Programms>
              {frontendDB.programms.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                  {frontendDB.programms.map((program) => {
                    return (
                      <Card
                        key={program.id}
                        uniqueId={program.modalId}
                        cardTitle={program.name}
                        cardSubtitle={"Programms"}
                        cardDescription={program.description}
                        offecialUrl={program.offecialUrl}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-1/2 ">
                    <img
                      className="max-h-full w-max-w-full "
                      src="/images/coming-soon-image.svg"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </Programms>
          }
        />
      </Routes>
    </div>
  );
}

export default Frontend;
