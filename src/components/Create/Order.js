import React, { useState } from "react";

const Order = () => {
  const [sectionCards, setSectionCards] = useState({
    sectionOne: {
      activeIndex: null,
      hidden: true,
      cards: [
        {
          name: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          name: "Filter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          name: "Espresso",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    sectionTwo: {
      activeIndex: null,
      cards: [
        {
          name: "Single Origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          name: "Filter",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          name: "Blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    sectionThree: {
      activeIndex: null,
      cards: [
        {
          name: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups",
        },
        {
          name: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups",
        },
        {
          name: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups",
        },
      ],
    },
    sectionFour: {
      activeIndex: null,
      cards: [
        {
          name: "Wholebean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          name: "Filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          name: "Cafetiére",
          description:
            " Course ground beans specially suited for french press coffee",
        },
      ],
    },
    sectionFive: {
      activeIndex: null,
      cards: [
        {
          name: "Every week",
          description: "$7.20 per shipment. Includes free first-class shipping",
        },
        {
          name: "Every 2 weeks",
          description: "$9.60 per shipment. Includes free priority shipping",
        },
        {
          name: "Every month",
          description: "$12.00 per shipment. Includes free priority shipping",
        },
      ],
    },
  });

  // In the below onClickHandler, we are accessing the default state, reinserting it into the state via the
  // setSectionCards setter, then we are spreading what's inside the clicked section's contents within
  // the selected section. This is done so that we may update the active index within the appropriate section.
  const onClickHandler = (card, index, sectionName) => {
    setSectionCards({
      ...sectionCards,
      [sectionName]: {
        ...sectionCards[sectionName],
        activeIndex: index,
      },
    });
  };

  // Toggles the "hidden" class that hides and unhides order sections
  const onClickHideHandler = (boolean, sectionName) => {
    setSectionCards({
      ...sectionCards,
      [sectionName]: {
        ...sectionCards[sectionName],
        hidden: boolean,
      },
    });
  };

  const arrowOnClickHandler = () => {};

  return (
    <section className="flex justify-center h-[2000px]">
      <div className=" flex justify-center background-cream all-width">
        <div className="flex justify-center w-3/4">
          <div className="flex flex-col gap-4 w-1/4 sticky h-[500px] top-20">
            <span className="fraunces-700 text-gray-2 text-[24px] cursor-pointer">
              01 &nbsp; &nbsp; Preferences
            </span>
            <div className=" border-b-2 border-x-gray-700"></div>
            <span className="fraunces-700 text-gray-2 text-[24px] cursor-pointer">
              02 &nbsp; &nbsp; Bean Type
            </span>
            <div className=" border-b-2 border-x-gray-700"></div>
            <span className="fraunces-700 text-gray-2 text-[24px] cursor-pointer">
              03 &nbsp; &nbsp; Quantity
            </span>
            <div className=" border-b-2 border-x-gray-700"></div>
            <span className="fraunces-700 text-gray-2 text-[24px] cursor-pointer">
              04 &nbsp; &nbsp; Grind Option
            </span>
            <div className=" border-b-2 border-x-gray-700"></div>
            <span className="fraunces-700 text-gray-2 text-[24px] cursor-pointer">
              05 &nbsp; &nbsp; Deliveries
            </span>
          </div>
          <div className="flex flex-col pl-28 w-5/6 ">
            <div className="flex mb-12 justify-between items-center">
              <h2 className="text-gray fraunces-900 text-[40px] leading-[48px] ">
                How do you drink your coffee?
              </h2>
              <div
                onClick={() =>
                  onClickHideHandler(
                    !sectionCards.sectionOne.hidden,
                    "sectionOne"
                  )
                }
                className="arrow-up cursor-pointer"
              >
                <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                    fill="#0E8784"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              {sectionCards.sectionOne.cards.map((card, index) => {
                return (
                  <div
                    onClick={() => onClickHandler(card, index, "sectionOne")}
                    className={`${
                      sectionCards.sectionOne.hidden && "hidden"
                    } flex flex-col order-card-color hover:bg-orange-200  order-card-height rounded-lg cursor-pointer w-1/3 transition ease-linear duration-100
                    ${
                      sectionCards.sectionOne.activeIndex === index &&
                      "card-green"
                    }
                    `}
                  >
                    <h3 className="text-blue fraunces-900 text-[24px] leading-[32px] mt-8 ml-8">
                      {card.name}
                    </h3>
                    <p className="barlow-400 text-[16px] leading-[26px] pt-8 pl-6 pr-6">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex mb-12 mt-16 justify-between items-center">
              <h2 className="text-gray fraunces-900 text-[40px] leading-[48px] ">
                What type of coffee?
              </h2>
              <div className="arrow-up cursor-pointer">
                <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                    fill="#0E8784"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              {sectionCards.sectionTwo.cards.map((card, index) => {
                return (
                  <div
                    onClick={() => onClickHandler(card, index, "sectionTwo")}
                    className={`flex flex-col order-card-color hover:bg-orange-200  order-card-height rounded-lg cursor-pointer w-1/3 transition ease-linear duration-100
                    ${
                      sectionCards.sectionTwo.activeIndex === index &&
                      "card-green"
                    }
                   `}
                  >
                    <h3 className="text-blue fraunces-900 text-[24px] leading-[32px] mt-8 ml-8">
                      {card.name}
                    </h3>
                    <p className="barlow-400 text-[16px] leading-[26px] pt-8 pl-6 pr-6">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex mb-12 mt-16 justify-between items-center">
              <h2 className="text-gray fraunces-900 text-[40px] leading-[48px] ">
                How much would you like?
              </h2>
              <div className="arrow-up">
                <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                    fill="#0E8784"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              {sectionCards.sectionThree.cards.map((card, index) => {
                return (
                  <div
                    onClick={() => onClickHandler(card, index, "sectionThree")}
                    className={`flex flex-col order-card-color hover:bg-orange-200  order-card-height rounded-lg cursor-pointer w-1/3 transition ease-linear duration-100
                    ${
                      sectionCards.sectionThree.activeIndex === index &&
                      "card-green"
                    }
                   `}
                  >
                    <h3 className="text-blue fraunces-900 text-[24px] leading-[32px] mt-8 ml-8">
                      {card.name}
                    </h3>
                    <p className="barlow-400 text-[16px] leading-[26px] pt-8 pl-6 pr-6">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex mb-12 mt-16 justify-between items-center">
              <h2 className="text-gray fraunces-900 text-[40px] leading-[48px] ">
                Want us to grind them?
              </h2>
              <div className="arrow-up">
                <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                    fill="#0E8784"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              {sectionCards.sectionFour.cards.map((card, index) => {
                return (
                  <div
                    onClick={() => onClickHandler(card, index, "sectionFour")}
                    className={`flex flex-col order-card-color hover:bg-orange-200  order-card-height rounded-lg cursor-pointer w-1/3 transition ease-linear duration-100
                    ${
                      sectionCards.sectionFour.activeIndex === index &&
                      "card-green"
                    }
                   `}
                  >
                    <h3 className="text-blue fraunces-900 text-[24px] leading-[32px] mt-8 ml-8">
                      {card.name}
                    </h3>
                    <p className="barlow-400 text-[16px] leading-[26px] pt-8 pl-6 pr-6">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex mb-12 mt-16 justify-between items-center">
              <h2 className="text-gray fraunces-900 text-[40px] leading-[48px] ">
                How often should we deliver?
              </h2>
              <div className="arrow-up">
                <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                    fill="#0E8784"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              {sectionCards.sectionFive.cards.map((card, index) => {
                return (
                  <div
                    onClick={() => onClickHandler(card, index, "sectionFive")}
                    className={`flex flex-col order-card-color hover:bg-orange-200  order-card-height rounded-lg cursor-pointer w-1/3 transition ease-linear duration-100
                    ${
                      sectionCards.sectionFive.activeIndex === index &&
                      "card-green"
                    }
                   `}
                  >
                    <h3 className="text-blue fraunces-900 text-[24px] leading-[32px] mt-8 ml-8">
                      {card.name}
                    </h3>
                    <p className="barlow-400 text-[16px] leading-[26px] pt-8 pl-6 pr-6">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
