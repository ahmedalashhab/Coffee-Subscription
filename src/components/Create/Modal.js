import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { ExclamationIcon } from "@heroicons/react/outline";

const Modal = (props) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={props.toggle} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => props.setToggle(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div>
                  <div className="flex flex-col">
                    <h2 className="text-cream background-blue fraunces-900 text-[40px] p-10">
                      {props.title}
                    </h2>
                    {/*show orderSummaryText in modal as content*/}
                    <p className="fraunces-900 text-[24px] mt-12 px-10">
                      {props.content}
                    </p>
                    <p className="barlow-400 text-blue px-10 mt-4">
                      Is this correct? You can proceed to checkout or go back to
                      plan selection if something is off. Subscription discount
                      codes can also be redeemed at the checkout.
                    </p>
                    <div className="flex justify-between">
                      <div className="fraunces-900 text-[32px] text-blue my-10 ml-10">
                        {props.totalPrice}
                      </div>
                      <button
                        type="button"
                        className="button-green rounded-lg fraunces-900 text-[18px] px-16 my-10 py-3 justify-center mr-10 text-cream"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
