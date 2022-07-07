//* Imports
import Card from "./Card";

//* Chrome JSX
function Chrome({ chrome }) {
  return (
    <div className="container relative py-5 mx-auto">
      {chrome.length <= 0 ? (
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
        <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          {chrome.map(({ name, modalId, id, description, chromeUrl, tags }) => {
            return (
              <Card
                key={id}
                modalId={modalId}
                cardInfo={{
                  title: name,
                  subtitle: "Chrome Extensions",
                  description: description,
                  tags,
                }}
                trackColors={{
                  headingBgColor: "bg-[#ccffd4]",
                  buttonColor: "text-[#39c059]",
                  buttonBgColor: "hover:bg-[#e9fef0]",
                }}
                urls={{
                  chromeUrl,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Chrome;
