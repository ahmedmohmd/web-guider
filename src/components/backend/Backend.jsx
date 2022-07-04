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

//* Backend JSX
function Backend() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-stretch justify-center min-h-[calc(100vh-75px)] gap-1 top">
      <Sidebar field={"backend"} />
      <Routes>
        <Route
          path="vscode"
          element={
            <Vscode>
              {backendDB.vscode.length <= 0 ? (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full p-10 lg:p-0 lg:w-1/2">
                    <img
                      className="max-w-full max-h-full "
                      src="/images/coming-soon-image.svg"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {backendDB.vscode.map(
                    ({
                      id,
                      modalId,
                      name,
                      description,
                      offecialUrl,
                      vscodeUrl,
                    }) => {
                      return (
                        <Card
                          key={id}
                          modalId={modalId}
                          cardInfo={{
                            title: name,
                            subtitle: "Vscode Extensions",
                            description: description,
                          }}
                          trackColors={{
                            headingBgColor: "bg-[#a9e3ff]",
                            buttonColor: "text-[#3c83f6]",
                            buttonBgColor: "hover:bg-[#e9effe]",
                          }}
                          urls={{
                            offecialUrl,
                            vscodeUrl,
                          }}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </Vscode>
          }
        />
        <Route
          path="packages"
          element={
            <Packages>
              {backendDB.packages.length <= 0 ? (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full p-10 lg:p-0 lg:w-1/2">
                    <img
                      className="max-w-full max-h-full "
                      src="/images/coming-soon-image.svg"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {backendDB.packages.map(
                    ({
                      name,
                      modalId,
                      id,
                      description,
                      npmUrl,
                      offecialUrl,
                      installCommand,
                    }) => {
                      return (
                        <Card
                          key={id}
                          modalId={modalId}
                          cardInfo={{
                            title: name,
                            subtitle: "NPM Packages",
                            description: description,
                          }}
                          npmInstallCommand={installCommand}
                          trackColors={{
                            headingBgColor: "bg-[#ffb1d5]",
                            buttonColor: "text-[#e55e9c]",
                            buttonBgColor: "hover:bg-[#f9e9f3]",
                          }}
                          urls={{
                            npmUrl,
                            offecialUrl,
                          }}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </Packages>
          }
        />

        <Route
          path="websites"
          element={
            <Websites>
              {backendDB.websites.length <= 0 ? (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full p-10 lg:p-0 lg:w-1/2">
                    <img
                      className="max-w-full max-h-full "
                      src="/images/coming-soon-image.svg"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {backendDB.websites.map(
                    ({ id, modalId, name, description, offecialUrl }) => {
                      return (
                        <Card
                          key={id}
                          modalId={modalId}
                          cardInfo={{
                            title: name,
                            subtitle: "Websites",
                            description: description,
                          }}
                          trackColors={{
                            headingBgColor: "bg-[#ffcfac]",
                            buttonColor: "text-[#eb906d]",
                            buttonBgColor: "hover:bg-[#fcf1e9]",
                          }}
                          urls={{ offecialUrl }}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </Websites>
          }
        />

        <Route
          path="programms"
          element={
            <Programms>
              {backendDB.programms.length <= 0 ? (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full p-10 lg:p-0 lg:w-1/2">
                    <img
                      className="max-w-full max-h-full "
                      src="/images/coming-soon-image.svg"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {backendDB.programms.map(
                    ({ id, modalId, name, description, offecialUrl }) => {
                      return (
                        <Card
                          key={id}
                          modalId={modalId}
                          cardInfo={{
                            title: name,
                            subtitle: "Programms",
                            description: description,
                          }}
                          trackColors={{
                            headingBgColor: "bg-[#80dddf]",
                            buttonColor: "text-[#4e97b6]",
                            buttonBgColor: "hover:bg-[#e9fafe]",
                          }}
                          urls={{
                            offecialUrl,
                          }}
                        />
                      );
                    }
                  )}
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
