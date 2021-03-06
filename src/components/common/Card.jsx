//* Imports
import "../../styles/components/common/card.scss";
import _ from "lodash";
import Modal from "./Modal";

const tagColors = [
  {
    id: 0,
    color: "text-yellow-800",
    bg: "bg-yellow-100/90",
  },
  {
    id: 1,
    color: "text-red-800",
    bg: "bg-red-100/90",
  },
  {
    id: 2,
    color: "text-pink-800",
    bg: "bg-pink-100/90",
  },
  {
    id: 3,
    color: "text-cyan-800",
    bg: "bg-cyan-100/90",
  },
  {
    id: 4,
    color: "text-green-800",
    bg: "bg-green-100/90",
  },
  {
    id: 5,
    color: "text-gray-800",
    bg: "bg-gray-100/90",
  },
  {
    id: 6,
    color: "text-violet-800",
    bg: "bg-violet-100/90",
  },
  {
    id: 7,
    color: "text-orange-800",
    bg: "bg-orange-100/90",
  },
];

//* Card JSX
function Card({ modalId, cardInfo, trackColors, urls, npmInstallCommand }) {
  return (
    <div>
      <div
        className={`card flex flex-col h-94 hover:-translate-y-1 duration-500 bg-gradient-to-tr transition-all  justify-center shadow-lg rounded-3xl p-4 md:p-5 lg:pb-2 `}
      >
        <span className="relative w-fit">
          <span
            className={`card-hash ${trackColors.headingBgColor} absolute px-4 py-3 h-full -left-2 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl`}
          ></span>
          <a className="hover:cursor-pointer">
            <h3
              data-hs-modal={`#${modalId}`}
              className="relative text-xl font-bold line-clamp-1 lg:text-2xl text-slate-600/90"
            >
              {cardInfo.title}
            </h3>
          </a>
        </span>
        <p className="mt-[7px] mb-2 text-xs font-medium uppercase text-slate-400 ">
          {cardInfo.subTitle}
        </p>
        <p className="mt-2 text-slate-500 line-clamp-2">
          {cardInfo.description}
        </p>
        <div className="flex flex-wrap items-center justify-between w-full gap-3 pt-4 lg:flex-nowrap lg:gap-0">
          <div className="order-2 p-3 pl-0 lg:order-1">
            <button
              className={`${trackColors.buttonBgColor} ${trackColors.buttonColor} inline-flex items-center hover:cursor-pointer duration-500 py-3 px-4 rounded-2xl whitespace-nowrap`}
              data-hs-modal={`#${modalId}`}
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-end gap-2 lg:order-2">
            {cardInfo.tags.map((tag) => {
              const colorsIndex = _.random(7);
              return (
                <span
                  key={Math.random()}
                  className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm ${tagColors[colorsIndex].bg} ${tagColors[colorsIndex].color}`}
                >
                  # {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        modalInfo={{
          title: cardInfo.title,
          description: cardInfo.description,
        }}
        npmInstallCommand={npmInstallCommand}
        modalId={modalId}
        urls={urls}
      />
    </div>
  );
}

export default Card;
