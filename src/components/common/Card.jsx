//* Imports
import styled from "../../styles/Card.module.scss";
import Modal from "./Modal";

//* Card JSX
function Card({
  cardTitle,
  cardSubtitle,
  cardDescription,
  npmInstallCommand,
  uniqueId,
  vscodeUrl,
  offecialUrl,
  npmUrl,
  headingColor,
  buttonBgColor,
  buttonColor,
}) {
  return (
    <div>
      <div
        class={
          "flex flex-col h-94 hover:-translate-y-1 duration-500 bg-gradient-to-tr transition-all  justify-center shadow-lg rounded-3xl p-4 md:p-5 " +
          styled.card
        }
      >
        <span className="relative w-fit">
          <span
            className={
              "absolute px-4 py-3 h-full bg-violet-300/50 -left-2 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl " +
              styled.cardHash +
              ` ${headingColor}`
            }
          ></span>
          <a href="#" className="">
            <h3
              data-hs-modal={`#${uniqueId}`}
              class="line-clamp-1 relative text-xl lg:text-2xl  font-bold text-slate-600/90"
            >
              {`${cardTitle}`}
            </h3>
          </a>
        </span>
        <p class="mt-[7px] mb-2 text-xs font-medium uppercase text-slate-400 ">
          {cardSubtitle}
        </p>
        <p class="mt-2 text-slate-500 line-clamp-3">{cardDescription}</p>
        <div class="p-3 pl-0">
          <button
            class={
              "inline-flex items-center mt-3 hover:cursor-pointer duration-500 py-3 px-4 rounded-2xl " +
              `${buttonBgColor} ${buttonColor}`
            }
            data-hs-modal={`#${uniqueId}`}
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
      </div>
      <Modal
        modalTitle={cardTitle}
        modalDescription={cardDescription}
        npmInstallCommand={npmInstallCommand}
        uniqueId={uniqueId}
        offecialUrl={offecialUrl}
        vscodeUrl={vscodeUrl}
        npmUrl={npmUrl}
      />
    </div>
  );
}

export default Card;
