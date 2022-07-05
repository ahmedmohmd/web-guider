//* Imports
import "../../styles/components/common/card.scss";
import Modal from "./Modal";

//* Card JSX
function Card({ modalId, cardInfo, trackColors, urls, npmInstallCommand }) {
  return (
    <div>
      <div
        class={`card flex flex-col h-94 hover:-translate-y-1 duration-500 bg-gradient-to-tr transition-all  justify-center shadow-lg rounded-3xl p-4 md:p-5 lg:pb-2 `}
      >
        <span className="relative w-fit">
          <span
            className={`card-hash ${trackColors.headingBgColor} absolute px-4 py-3 h-full -left-2 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl`}
          ></span>
          <a className="hover:cursor-pointer">
            <h3
              data-hs-modal={`#${modalId}`}
              class="line-clamp-1 relative text-xl lg:text-2xl  font-bold text-slate-600/90"
            >
              {cardInfo.title}
            </h3>
          </a>
        </span>
        <p class="mt-[7px] mb-2 text-xs font-medium uppercase text-slate-400 ">
          {cardInfo.subTitle}
        </p>
        <p class="mt-2 text-slate-500 line-clamp-2">{cardInfo.description}</p>
        <div className="flex flex-wrap items-center justify-between w-full gap-3 pt-4 lg:flex-nowrap lg:gap-0">
          <div class="p-3 pl-0 order-2 lg:order-1">
            <button
              class={`${trackColors.buttonBgColor} ${trackColors.buttonColor} inline-flex items-center hover:cursor-pointer duration-500 py-3 px-4 rounded-2xl whitespace-nowrap`}
              data-hs-modal={`#${modalId}`}
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-end gap-2 lg:order-2">
            {cardInfo.tags.map((tag) => {
              return tag === "react" ? (
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm  bg-cyan-100/50 text-cyan-800">
                  # {tag}
                </span>
              ) : tag === "npm" ? (
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm  bg-red-100/50 text-red-800">
                  # {tag}
                </span>
              ) : (tag === "vscode" || tag === "css") ? (
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm  bg-blue-100/50 text-blue-800">
                  # {tag}
                </span>
              ) : tag === "git" || tag === "github" ? (
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm  bg-gray-100/50 text-gray-800">
                  # {tag}
                </span>
              ) : (
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm  bg-purple-100/50 text-purple-800">
                  # {tag}
                </span>
              );
              return <button className="text-red-500 ">{tag}</button>;
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
