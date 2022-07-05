//* Imports
import Card from "./Card";

//* Programms JSX
function Programms({ programms }) {
  return (
    <div className="container relative py-5 mx-auto">
      {programms.length <= 0 ? (
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
          {programms.map(
            ({ id, modalId, name, description, offecialUrl, tags }) => {
              return (
                <Card
                  key={id}
                  modalId={modalId}
                  cardInfo={{
                    title: name,
                    subtitle: "Programms",
                    description: description,
                    tags,
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
    </div>
  );
}

export default Programms;
