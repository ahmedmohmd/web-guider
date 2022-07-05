//* Imports
import Card from "./Card";

//* Packages JSX
function Packages({ packages }) {
  return (
    <div className="container relative py-5 mx-auto">
      {packages.length <= 0 ? (
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
          {packages.map(
            ({
              name,
              modalId,
              id,
              description,
              npmUrl,
              offecialUrl,
              installCommand,
              tags,
            }) => {
              return (
                <Card
                  key={id}
                  modalId={modalId}
                  cardInfo={{
                    title: name,
                    subtitle: "NPM Packages",
                    description: description,
                    tags,
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
    </div>
  );
}

export default Packages;
