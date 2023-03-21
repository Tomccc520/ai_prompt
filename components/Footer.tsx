import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-center items-center px-3 space-y-3 sm:mb-0 mb-3 bottom-0">
      
      <div>
      <ContactLink />
        Powered by{" "}
        <a
          href="https://openai.com/"
          target="_blank"
          rel="noreferrer"
          className=" hover:underline transition underline-offset-2"
        >
          OpenAI{" "}
        </a>
        and{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className=" hover:underline transition underline-offset-2"
        >
          Vercel Edge Functions.
        </a>
        
      </div>

    </footer>
  );
}

const ContactLink = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a
      target="_blank"
          rel="noreferrer"
        className="font-bold hover:cursor-pointer hover:outline-black transition underline-offset-2 block"
        onClick={() => setShowModal(true)}
      >
        欢迎进交流反馈群，解锁更多prompt玩法
      </a>
      {showModal ? (
        <div className="fixed z-10 inset-0">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity min-h-screen" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div
              className="z-99 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-center flex-col">

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-2xl leading-6 font-bold text-black-900 flex justify-center items-center" id="modal-headline">
                    交流群链接，讨论更多玩法
                    <button
                      type="button"
                      className="inline-flex justify-center  border border-transparent  px-2 py-2  text-base font-medium text-black  focus:outline-none  focus:ring-black-500 sm:ml-3 sm:w-auto sm:text-sm"                        onClick={() => setShowModal(false)}
                      style={{position: "absolute", top: "0", right: "0"}}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </h3>
                    
                  <img src="https://img.ggball.top/picGo/wwj.png" alt="交流群链接" style={{display: "block", margin: "auto"}}/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
