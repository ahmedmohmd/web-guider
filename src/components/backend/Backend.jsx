import { Routes, Route } from "react-router-dom";
import Vscode from "../common/Vscode";
import Websites from "../common/Websites";
import Packages from "../common/Packages";
import Programms from "../common/Programms";
import Sidebar from "../common/Sidebar";
import BackendDB from "../../db/backend.json";
import Card from "../common/Card";
import { useEffect } from "react";

function Backend() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-stretch justify-center min-h-[calc(100vh-75px)] gap-1 top">
      <Sidebar field={"Backend"} />
      <Routes>
        <Route
          path="vscode"
          element={
            <Vscode>
              {BackendDB.vscode.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {BackendDB.vscode.map((extension) => {
                    return (
                      <Card
                        key={extension.id}
                        uniqueId={extension.modalId}
                        cardTitle={extension.name}
                        cardSubtitle={"Vscode Extensions"}
                        cardDescription={extension.description}
                        offecialUrl={extension.offecialUrl}
                        vscodeUrl={extension.vscodeUrl}
                        headingColor={"bg-[#a9e3ff]"}
                        buttonColor={"text-[#3c83f6]"}
                        buttonBgColor={"hover:bg-[#e9effe]"}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full p-10 lg:p-0 lg:w-1/2">
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
          path="packages"
          element={
            <Packages>
              {BackendDB.packages.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {BackendDB.packages.map((pack) => {
                    return (
                      <Card
                        key={pack.id}
                        uniqueId={pack.modalId}
                        cardTitle={pack.name}
                        cardSubtitle={"NPM Packages"}
                        cardDescription={pack.description}
                        npmInstallCommand={pack.installCommand}
                        offecialUrl={pack.offecialUrl}
                        npmUrl={pack.npmUrl}
                        headingColor={"bg-[#ffb1d5]"}
                        buttonColor={"text-[#e55e9c]"}
                        buttonBgColor={"hover:bg-[#f9e9f3]"}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full p-10 lg:p-0 lg:w-1/2">
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
          path="websites"
          element={
            <Websites>
              {BackendDB.websites.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {BackendDB.websites.map((website) => {
                    return (
                      <Card
                        key={website.id}
                        uniqueId={website.modalId}
                        cardTitle={website.name}
                        cardSubtitle={"Websites"}
                        cardDescription={website.description}
                        offecialUrl={website.offecialUrl}
                        headingColor={"bg-[#ffcfac]"}
                        buttonColor={"text-[#eb906d]"}
                        buttonBgColor={"hover:bg-[#fcf1e9]"}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full p-10 lg:p-0 lg:w-1/2">
                    <img
                      className="max-w-full max-h-full "
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
          path="programms"
          element={
            <Programms>
              {BackendDB.programms.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {BackendDB.programms.map((program) => {
                    return (
                      <Card
                        key={program.id}
                        uniqueId={program.modalId}
                        cardTitle={program.name}
                        cardSubtitle={"Programms"}
                        cardDescription={program.description}
                        offecialUrl={program.offecialUrl}
                        headingColor={"bg-[#80dddf]"}
                        buttonColor={"text-[#4e97b6]"}
                        buttonBgColor={"hover:bg-[#e9fafe]"}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full p-10 lg:p-0 lg:w-1/2">
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

export default Backend;
