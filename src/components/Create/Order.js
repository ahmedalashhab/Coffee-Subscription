import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const Order = () => {
  const [perShipmentPrice, setPerShipmentPrice] = useState(0);
  const [orderComplete, setOrderComplete] = useState(false);
  const [frequency, setFrequency] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCapsuleSelected, setIsCapsuleSelected] = useState(false);
  const [quizState, setQuizState] = useState({});
  const quizArrayLength = Object.entries(quizState).length;
  // Order Summary below is the same as quizstate but contains user-friendly data
  const [orderSummary, setOrderSummary] = useState({});
  const [orderSummaryModal, setOrderSummaryModal] = useState(false);
  const [sectionCards, setSectionCards] = useState({
    sectionOne: {
      value_key: "coffeeProcess",
      activeIndex: null,
      title: "How do you drink your coffee?",
      sidebar_name: "Preferences",
      hidden: false,
      nextSection: "sectionTwo",
      cards: [
        {
          id: "capsule",
          name: "Capsules",
          summary: "capsules",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: "filter",
          name: "Filter",
          summary: "filter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: "espresso_xl",
          name: "Espresso XL",
          summary: "espresso_xl",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    sectionTwo: {
      value_key: "type",
      title: "What type of coffee?",
      sidebar_name: "Bean Type",
      activeIndex: null,
      nextSection: "sectionThree",
      hidden: true,
      cards: [
        {
          id: "single",
          name: "Single Origin",
          summary: "single origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id: "decaf",
          name: "decaf",
          summary: "decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id: "blended",
          name: "blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    sectionThree: {
      value_key: "quantity",
      title: "How much would you like?",
      nextSection: isCapsuleSelected ? "sectionFive" : "sectionFour",
      sidebar_name: "Quantity",
      activeIndex: null,
      hidden: true,
      cards: [
        {
          id: "quarter",
          name: "250g",
          summary: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups",
        },
        {
          id: "half",
          name: "500g",
          summary: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups",
        },
        {
          id: "kilo",
          name: "1000g",
          summary: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups",
        },
      ],
    },
    sectionFour: {
      value_key: "grind",
      activeIndex: null,
      title: "Want us to grind them?",
      sidebar_name: "Grind Option",
      nextSection: "sectionFive",
      hidden: true,
      cards: [
        {
          id: "wholebean",
          name: "Wholebean",
          summary: "wholebean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          id: "filter",
          name: "Filter",
          summary: "filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id: "cafe",
          name: "Cafetiére",
          summary: "cafetiére",
          description:
            " Course ground beans specially suited for french press coffee",
        },
      ],
    },
    sectionFive: {
      value_key: "frequency",
      activeIndex: null,
      title: "How often should we deliver?",
      sidebar_name: "Deliveries",
      hidden: true,
      nextSection: "END",
      cards: [
        {
          id: "weekly",
          name: "Every week",
          summary: "every week",
          description: "$7.20 per shipment. Includes free first-class shipping",
        },
        {
          id: "bi_monthly",
          name: "Every 2 weeks",
          summary: "every 2 weeks",
          description: "$9.60 per shipment. Includes free priority shipping",
        },
        {
          id: "monthly",
          name: "Every month",
          summary: "every month",
          description: "$12.00 per shipment. Includes free priority shipping",
        },
      ],
    },
  });
  const quizSwitch = useCallback(() => {
    switch (quizArrayLength) {
      case 0:
        return "sectionOne";
      case 1:
        return "sectionTwo";
      case 2:
        return "sectionThree";
      case 3:
        if (isCapsuleSelected) {
          return "sectionFive";
        } else {
          return "sectionFour";
        }
      case 4:
        return "sectionFive";
      default:
        return "sectionFive";
    }
  }, [isCapsuleSelected, quizArrayLength]);

  useEffect(() => {
    if (quizSwitch() === "sectionFive" && isCapsuleSelected) {
      setSectionCards({
        ...sectionCards,
        sectionFour: {
          ...sectionCards.sectionFour,
          hidden: true,
        },
        sectionFive: {
          ...sectionCards.sectionFive,
          hidden: false,
        },
      });

      console.log(perShipmentPrice);
      console.log(totalPrice);
    }
    document
      .getElementById(quizSwitch())
      .scrollIntoView({ behavior: "smooth", block: "start" });

    if (isCapsuleSelected) {
      // delete section 4  choices from quizstate
      delete quizState.grind;
    }

    //  check if user has completed quiz
    if (isCapsuleSelected && quizArrayLength === 4) {
      setOrderComplete(true);
    } else if (!isCapsuleSelected & (quizArrayLength === 5)) {
      setOrderComplete(true);
    } else {
      setOrderComplete(false);
    }

    setTotalPrice(totalPrice);
  }, [isCapsuleSelected, quizSwitch, totalPrice]);

  // In the below onClickHandler, we are accessing the default state, reinserting it into the state via the
  // setSectionCards setter, then we are spreading what's inside the clicked section's contents within
  // the selected section. This is done so that we may update the active index within the appropriate section.
  const onClickHandler = (card, index, sectionName) => {
    const section = sectionCards[sectionName];
    const { nextSection, value_key } = section;
    if (sectionName === "sectionOne" && index === 0) {
      setIsCapsuleSelected(true);
    } else if (
      (sectionName === "sectionOne" && index === 1) ||
      (sectionName === "sectionOne" && index === 2)
    ) {
      setIsCapsuleSelected(false);
    }
    const updateObject = {
      ...sectionCards,
      [sectionName]: {
        ...section,
        activeIndex: index,
      },
    };

    if (nextSection !== "END") {
      updateObject[nextSection] = {
        ...sectionCards[nextSection],
        hidden: false,
      };
    }

    setSectionCards(updateObject);

    setQuizState({
      ...quizState,
      [value_key]: card.id,
    });

    setOrderSummary({
      ...orderSummary,
      [value_key]: card.summary,
    });

    if (sectionName === "sectionThree" && card.id === "quarter") {
      setPerShipmentPrice({
        weekly: 7.2,
        bi_monthly: 9.6,
        monthly: 12.0,
      });
    } else if (sectionName === "sectionThree" && card.id === "half") {
      setPerShipmentPrice({
        weekly: 13.0,
        bi_monthly: 17.5,
        monthly: 22.0,
      });
    } else if (sectionName === "sectionThree" && card.id === "kilo") {
      setPerShipmentPrice({
        weekly: 22.0,
        bi_monthly: 32.0,
        monthly: 42.0,
      });
    }

    // set a state for frequency once frequency is selected
    if (sectionName === "sectionFive" && card.id === "weekly") {
      setFrequency("weekly");
    } else if (sectionName === "sectionFive" && card.id === "bi_monthly") {
      setFrequency("bi_monthly");
    } else if (sectionName === "sectionFive" && card.id === "monthly") {
      setFrequency("monthly");
    }

    if (frequency === "weekly") {
      setTotalPrice(perShipmentPrice.weekly * 4);
    } else if (frequency === "bi_monthly") {
      setTotalPrice(perShipmentPrice.bi_monthly * 2);
    } else if (frequency === "monthly") {
      setTotalPrice(perShipmentPrice.monthly);
    }

    if (nextSection === "END") {
      //show summary
    } else onClickHideHandler(false, nextSection, true);
  };

  //TODO: remove the sectionFour choice visual (cardgreen) selected from the quizState if capsule is selected

  // Toggles the "hidden" class that hides and unhides order sections
  const onClickHideHandler = (hidden, sectionName, skipStateSet) => {
    if (sectionName === "sectionFour" && isCapsuleSelected) {
      return;
    }

    if (!skipStateSet)
      setSectionCards({
        ...sectionCards,
        [sectionName]: {
          ...sectionCards[sectionName],
          hidden,
        },
      });
  };

  const OrderSummaryText = () => {
    return (
      <>
        <p style={{ display: "inline-block" }}>{`“I drink my coffee ${
          isCapsuleSelected ? "using " : "as "
        }`}</p>
        <p style={{ display: "inline-block" }} className="text-green">
          &nbsp;{orderSummary.coffeeProcess || "_____"}
        </p>
        <p style={{ display: "inline-block" }}>, with a</p>
        <p style={{ display: "inline-block" }} className="text-green">
          &nbsp;{orderSummary.type || "_____"}
        </p>
        <p style={{ display: "inline-block" }}>&nbsp; type of bean. &nbsp;</p>
        <p style={{ display: "inline-block" }} className="text-green">
          {orderSummary.quantity || "_____"}
        </p>
        {!isCapsuleSelected && (
          <p style={{ display: "inline-block" }}>
            , ground ala
            <span className="text-green" style={{ display: "inline-block" }}>
              &nbsp;{orderSummary.grind || "_____"}
            </span>
          </p>
        )}
        <p style={{ display: "inline-block" }}>, sent to me</p>
        <p style={{ display: "inline-block" }} className="text-green">
          &nbsp;{orderSummary.frequency || "_____"}
        </p>
        <p style={{ display: "inline-block" }}>.”</p>
      </>
    );
  };

  const OrderSummaryTextModal = () => {
    return (
      <>
        <p
          className="text-gray"
          style={{ display: "inline-block" }}
        >{`“I drink my coffee ${isCapsuleSelected ? "using " : "as "}`}</p>
        <p style={{ display: "inline-block" }} className="text-green">
          &nbsp;{orderSummary.coffeeProcess || "_____"}
        </p>
        <p className="text-gray" style={{ display: "inline-block" }}>
          , with a
        </p>
        <p style={{ display: "inline-block" }} className="text-green">
          &nbsp;{orderSummary.type || "_____"}
        </p>
        <p className="text-gray" style={{ display: "inline-block" }}>
          &nbsp; type of bean. &nbsp;
        </p>
        <p style={{ display: "inline-block" }} className="text-green">
          {orderSummary.quantity || "_____"}
        </p>
        {!isCapsuleSelected && (
          <p className="text-gray" style={{ display: "inline-block" }}>
            , ground ala
            <span className="text-green" style={{ display: "inline-block" }}>
              &nbsp;{orderSummary.grind || "_____"}
            </span>
          </p>
        )}
        <p className="text-gray" style={{ display: "inline-block" }}>
          , sent to me
        </p>
        <p style={{ display: "inline-block" }} className="text-green">
          &nbsp;{orderSummary.frequency || "_____"}
        </p>
        <p className="text-gray" style={{ display: "inline-block" }}>
          .”
        </p>
      </>
    );
  };

  const capsuleAndSecFour = (sectionName) => {
    //  return text-gray-2 on sectionCards.sectionFour if capsule is selected
    return sectionName === "sectionFour" && isCapsuleSelected;
  };

  const capsuleSideBar = (sectionName) => {
    return capsuleAndSecFour(sectionName) ? "text-disabled" : "text-gray-2";
  };

  const handleSideBarClick = (section, sectionName) => {
    if (sectionName === "sectionFour" && isCapsuleSelected) {
      return;
    }
    onClickHideHandler((section.hidden = false), sectionName);
    document.getElementById(sectionName).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleQuizSubmit = () => {
    if (orderComplete === true) {
      setOrderSummaryModal(true);
    } else setOrderSummaryModal(false);
    console.log(orderSummaryModal);
    setTotalPrice(totalPrice);
  };

  // TODO remove green color from selected card in sectionFour when capsule is selected

  // BELOW IS THE RENDERING OF THE COMPONENT

  return (
    <section className="flex justify-center h-[2000px]">
      <div className=" flex justify-center background-cream all-width text-">
        <div className="flex justify-center w-3/4">
          <div className="flex flex-col gap-4 w-1/4 sticky h-[500px] top-20">
            {Object.entries(sectionCards).map(
              ([sectionName, section], index) => {
                return (
                  <>
                    <span
                      onClick={() => handleSideBarClick(section, sectionName)}
                      className={`fraunces-700 text-[24px] ${
                        !capsuleAndSecFour(sectionName) ? "cursor-pointer" : ""
                      } ${capsuleSideBar(sectionName)}`}
                    >
                      {Number(index + 1).toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                      })}
                      &nbsp; &nbsp; {section.sidebar_name}
                    </span>
                    <div className=" border-b-2 border-x-gray-700"></div>
                  </>
                );
              }
            )}
          </div>
          <div className="flex flex-col pl-28 w-5/6 mb-16 ">
            {/* START*/}
            {Object.entries(sectionCards).map(
              ([sectionName, section], index) => {
                return (
                  <>
                    <div
                      className="flex mb-4 justify-between items-center"
                      key={sectionName}
                    >
                      <h2
                        className={`${
                          !capsuleAndSecFour(sectionName)
                            ? "text-gray"
                            : "text-disabled"
                        }  fraunces-900 text-[40px] leading-[48px]`}
                        id={sectionName}
                      >
                        {section.title}
                      </h2>
                      <div
                        onClick={() => {
                          onClickHideHandler(!section.hidden, sectionName);
                        }}
                        /* Below condition disables cursor pointer if capsule is selected */
                        className={`arrow-up ${
                          !capsuleAndSecFour(sectionName)
                            ? "cursor-pointer"
                            : ""
                        }`}
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
                              fillRule="nonzero"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                    <div className={`flex justify-center gap-6 mb-16`}>
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
                                onClick={() =>
                                  onClickHandler(card, index, sectionName)
                                }
                                className={`${
                                  section.hidden && "hidden"
                                } flex flex-col ${
                                  section.activeIndex === index
                                    ? ""
                                    : "hover:bg-orange-200 cursor-pointer"
                                }   order-card-height rounded-lg  
                        w-1/3 transition ease-linear duration-100 
                        ${
                          section.activeIndex === index
                            ? "card-green"
                            : "order-card-color"
                        } 
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
                    </div>
                  </>
                );
              }
            )}

            {/* END */}
            <section className="flex flex-col justify-center">
              <div className="why w-full px-16 py-8">
                <div className="flex flex-col justify-center  gap-3">
                  <h3 className="uppercase barlow-400 text-gray">
                    order summary
                  </h3>
                  <p className="fraunces-900 text-cream text-[24px]">
                    <OrderSummaryText />
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-10">
                <button
                  onClick={handleQuizSubmit}
                  className={`${
                    orderComplete
                      ? "button-green hover:bg-teal-400"
                      : "bg-gray-300 cursor-default"
                  } px-9 py-3 rounded-lg text-cream fraunces-700 `}
                >
                  Create my plan!
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal
        setToggle={(boolean) => {
          setOrderSummaryModal(boolean);
        }}
        toggle={orderSummaryModal}
        title="Order Summary"
        content={OrderSummaryTextModal()}
        totalPrice={totalPrice}
      />
    </section>
  );
};

export default Order;
