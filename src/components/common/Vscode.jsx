//* Imports
import Card from "./Card";

//* Vscode
function Vscode({ vscode }) {
  return (
    <div className="container relative py-5 mx-auto">
      {vscode.length <= 0 ? (
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
        <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3">
          {vscode.map(
            ({
              id,
              modalId,
              name,
              description,
              offecialUrl,
              vscodeUrl,
              tags,
            }) => {
              return (
                <Card
                  key={id}
                  modalId={modalId}
                  cardInfo={{
                    title: name,
                    subtitle: "Vscode Extensions",
                    description: description,
                    tags,
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
    </div>
  );
}

export default Vscode;
