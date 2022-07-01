import styled from "../../styles/Card.module.scss";
import Modal from "./Modal";

function Card({
  cardTitle,
  cardSubtitle,
  cardDescription,
  npmInstallCommand,
  uniqueId,
  vscodeUrl,
  offecialUrl,
  npmUrl,
}) {
  return (
    <div
      class={
        "flex flex-col h-94  bg-white border justify-center shadow-lg rounded-xl p-4 md:p-5 " +
        styled.card
      }
    >
      <span className="relative w-fit">
        <span
          className={
            "absolute z-10 px-4 py-3 h-full bg-orange-300/50 -left-2 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl " +
            styled.cardHash
          }
        ></span>
        <a href="#" className="">
          <h3 class="line-clamp-1 relative z-20 text-2xl lg:text-3xl font-bold text-slate-600 dark:text-white">
            {cardTitle}
          </h3>
        </a>
      </span>
      <p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
        {cardSubtitle}
      </p>
      <p class="mt-2 text-slate-500 dark:text-gray-400 line-clamp-5">
        {cardDescription}
      </p>
      <div class="p-3">
        <a
          class="text-orange-500 inline-flex items-center mt-3"
          data-hs-modal={`#${uniqueId}`}
          href="#"
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
        </a>
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
