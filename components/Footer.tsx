import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-center items-center px-3 space-y-3 sm:mb-0 mb-3 bottom-0">
      
      <div>
      <ContactLink />
        <span className="text-black text-opacity-25">Powered by{" "}</span>
        <a
          href="https://openai.com/"
          target="_blank"
          rel="noreferrer"
          className="text-black text-opacity-25 hover:underline transition underline-offset-2"
        >
          OpenAI{" "}
        </a>
        <span className="text-black text-opacity-25">and{" "}</span>
        
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="text-black text-opacity-25 hover:underline transition underline-offset-2"
        >
          Vercel Edge Functions.
        </a>
        <span className="text-black text-opacity-25" id="busuanzi_container_site_pv"> | 本站总访问量<span id="busuanzi_value_site_pv" className="text-black text-opacity-25"></span>次</span>
        <span className="text-black text-opacity-25" id="busuanzi_container_site_uv">
         | 本站访客数<span className="text-black text-opacity-25" id="busuanzi_value_site_uv"></span>人次
      </span>
        
      </div>

    </footer>
  );
}

const ContactLink = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
     <div className="fixed bottom-0 right-0 bg-white shadow-lg rounded-lg hover:cursor-pointer" onClick={() => setShowModal(true)}>
      <div className="text-center">
        <Image src="/wx_qrcode.jpg" width={120} height={120} alt="公众号二维码" className='m-0 items-center' />
        <p className="text-gray-700 text-sm">解锁更多prompt!</p>
      </div>
    </div>
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
                    关注公众号，获取交流群链接
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
                    
                  <img src="/wx_qrcode.jpg" alt="公众号二维码" style={{display: "block", margin: "auto"}}/>
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
