import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Order = () => {
  const [quizState, setQuizState] = useState({});
  const [sectionCards, setSectionCards] = useState({
    sectionOne: {
      "value_key": "process",
      activeIndex: null,
      title: "How do you drink your coffee?",
      sidebar_name: "Preferences",
      hidden: false,
      nextSection: "sectionTwo",
      cards: [
        {
          id: "capsule",
          name: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: "filter",
          name: "Filter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: "espresso_xl",
          name: "Espresso XL",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    sectionTwo: {
      "value_key": "type",
      title: "What type of coffee?",
      sidebar_name: "Bean Type",
      activeIndex: null,
      nextSection: "sectionThree",
      hidden: true,
      cards: [
        {
          id:"single",
          name: "Single Origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id:"decaf",
          name: "Decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id:"blended",
          name: "Blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    sectionThree: {
      "value_key": "quantity",
      title: "How much would you like?",
      nextSection: "sectionFour",
      sidebar_name: "Quantity",
      activeIndex: null,
      hidden: true,
      cards: [
        {
          id:"quarter",
          name: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups",
        },
        {
          id:"half",
          name: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups",
        },
        {
          id:"kilo",
          name: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups",
        },
      ],
    },
    sectionFour: {
      "value_key": "grind",
      activeIndex: null,
      title: "Want us to grind them?",
      sidebar_name: "Grind Option",
      nextSection: "sectionFive",
      hidden: true,
      disabledCondition: (quizState) => quizState.process === "capsule",
      cards: [
        {
          id:"wholebean",
          name: "Wholebean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          id:"filter",
          name: "Filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id:"cafe",
          name: "Cafetiére",
          description:
            " Course ground beans specially suited for french press coffee",
        },
      ],
    },
    sectionFive: {
      "value_key": "frequency",
      activeIndex: null,
      title: "How often should we deliver?",
      sidebar_name: "Deliveries",
      hidden: true,
      nextSection: "END",
      cards: [
        {
          id:"weekly",
          name: "Every week",
          description: "$7.20 per shipment. Includes free first-class shipping",
        },
        {
          id:"bi_monthly",
          name: "Every 2 weeks",
          description: "$9.60 per shipment. Includes free priority shipping",
        },
        {
          id:"monthly",
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
    const section = sectionCards[sectionName]
    const { nextSection, value_key } = section
    const updateObject = {
      ...sectionCards,
      [sectionName]: {
        ...section,
        activeIndex: index,
      }
    }
    if(nextSection!=="END") {
      updateObject[nextSection] = {
        ...sectionCards[nextSection],
        hidden: false
      }
    }
    setSectionCards(updateObject);
    setQuizState({
      ...quizState,
      [value_key]: card.id
    })
      /**
       * Hide current section //optional, check abprop/config
       */

      /**
       * Unhide next section
       */
    if(nextSection === "END") {
      //show summary
    }
    else onClickHideHandler(false, nextSection, true)
  };

  // Toggles the "hidden" class that hides and unhides order sections
  const onClickHideHandler = (hidden, sectionName, skipStateSet) => {
    if(!hidden) {
      document
        .getElementById(sectionName)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if(!skipStateSet) setSectionCards({
      ...sectionCards,
      [sectionName]: {
        ...sectionCards[sectionName],
        hidden
      },
    });
  };

  return (
    <section className="flex justify-center h-[2000px]">
      <div className=" flex justify-center background-cream all-width">
        <div className="flex justify-center w-3/4">

        
          <div className="flex flex-col gap-4 w-1/4 sticky h-[500px] top-20">
          { Object.entries(sectionCards).map(([sectionName, section], index) => {
            return (
              <><span className="fraunces-700 text-gray-2 text-[24px] cursor-pointer">
                { Number(index + 1).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                }) } &nbsp; &nbsp; { section.sidebar_name }
              </span><div className=" border-b-2 border-x-gray-700"></div></>
            )
          }) }
          </div>
          <div className="flex flex-col pl-28 w-5/6 mb-16 ">
            
            {/* START*/}
            { Object.entries(sectionCards).map(([sectionName, section]) => {
              return (
                <><div className="flex mb-4 justify-between items-center" key={sectionName}>
                  <h2
                    className="text-gray fraunces-900 text-[40px] leading-[48px] "
                    id={ sectionName }
                  >
                    { section.title }
                  </h2>
                  <div
                    onClick={() => onClickHideHandler(
                      !section.hidden,
                      sectionName
                    )}
                    className="arrow-up cursor-pointer"
                  >
                    {/*Beautiful animation for the arrow to flip up and down using Framer*/}
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: section.hidden ? 180 : 0 }}
                      style={{ rotate: 0 }}
                    >
                      <svg
                        width="19"
                        height="13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                          fill="#0E8784"
                          fillRule="nonzero" />
                      </svg>
                    </motion.div>
                  </div>
                </div><div className={`flex justify-center gap-6 mb-16`}>
                    {section.cards.map((card, index) => {
                      return (
                        <AnimatePresence key={index.toString()}>
                          {!section.hidden && (
                            <motion.div
                              key={index.toString()}
                              initial={{
                                y: 0,
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                                height: "",
                              }}
                              exit={{
                                y: 0,
                                opacity: 0,
                                height: 0,
                                overflow: "hidden",
                              }}
                              transition={{
                                type: "Tween",
                                duration: 0.5,
                              }}
                              onClick={() => onClickHandler(
                                card,
                                index,
                                sectionName
                              )}
                              className={`${section.hidden && "hidden"} flex flex-col order-card-color hover:bg-orange-200  order-card-height rounded-lg cursor-pointer 
                        w-1/3 transition ease-linear duration-100 
                        ${section.activeIndex === index &&
                                "card-green"}
                        `}
                            >
                              <h3 className="text-blue fraunces-900 text-[24px] leading-[32px] mt-8 ml-8">
                                {card.name}
                              </h3>
                              <p className="barlow-400 text-[16px] leading-[26px] pt-8 pl-6 pr-6">
                                {card.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      );
                    })}
                  </div></>)
            }) }

            {/* END */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
