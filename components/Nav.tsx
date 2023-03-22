import Link from "next/link";
import { useState } from "react";

export default function Nav() {

  const [showPoints, setShowPoints] = useState(false);
  return (
    <nav className="sticky top-0 left-0 w-full flex-none border-b border-slate-900/10  backdrop-blur">
      <div className="max-w-8xl mx-auto">
        <div className="py-2 px-4">
          <div className="relative flex h-10 items-center">
            <a className="font-semibold text-black" href="/">
              <img src="/logo.png" width="40" height="40" alt="icon " />
            </a>
            <div className="ml-auto flex">
           
          <Link href="/" className="text-base  hover:ring-2 hover:ring-black  font-bold  py-1 px-2" >
            prompt广场
          </Link>
          <Link href="/pageB" className="text-base  font-bold  py-1 px-2 text-black text-opacity-25 cursor-not-allowed  pointer-events-none" >
          prompt孵化园
          </Link>
            </div>
          
            <div className="ml-auto flex">
            <AddPromptButton />
              <LoginButton />
              <div className="flex ml-2 items-center relative" onClick={() => setShowPoints(!showPoints)}>
                <a href="#" className=" text-xl font-bold py-4 px-4 text-black text-opacity-25 cursor-not-allowed  pointer-events-none">User</a>
                {showPoints && <div className="w-25 absolute text-sm top-16 -left-5 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <p className="p-2">当前积分:12</p>
                  <a className="p-2">退出</a>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-black text-white font-bold py-1 px-2 rounded-md m-4 text-sm"
        onClick={() => setShowModal(true)}
      >
        登录
      </button>
      {showModal ? (
        <div className="fixed z-10 inset-0">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity min-h-screen"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="z-99 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-center flex-col">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-2xl leading-6 font-bold text-black-900 flex justify-center items-center"
                      id="modal-headline"
                    >
                      账号登录
                      <button
                        type="button"
                        className="inline-flex justify-center  border border-transparent  px-2 py-2  text-base font-medium text-black  focus:outline-none  focus:ring-black-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setShowModal(false)}
                        style={{ position: "absolute", top: "0", right: "0" }}
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

                    <form className="mt-5 sm:flex sm:items-center flex-col">
                      <div className="w-full sm:max-w-xs mb-4">
                        <label htmlFor="username" className="sr-only">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Username"
                        />
                      </div>
                      <div className=" w-full sm:max-w-xs mb-4">
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mt-3 w-full sm:mt-0 sm:ml-3 sm:max-w-xs">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
                          onClick={() => console.log("Login button clicked")}
                        >
                          登录
                        </button>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4"
                          onClick={() => console.log("Register button clicked")}
                        >
                          注册
                        </button>
                      </div>
                    </form>
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

const AddPromptButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-black text-white font-bold py-1 px-2 rounded-md m-4 text-sm"
        onClick={() => setShowModal(true)}
      >
        增加prompt
      </button>
      {showModal ? (
        <div className="fixed z-10 inset-0 ">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 min-w-max">
            <div
              className="fixed inset-0 transition-opacity min-h-screen"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="z-99 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-center flex-col">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3
                      className="text-2xl leading-6 font-bold text-black-900 flex justify-center items-center"
                      id="modal-headline"
                    >
                      prompt信息
                      <button
                        type="button"
                        className="inline-flex justify-center  border border-transparent  px-2 py-2  text-base font-medium text-black  focus:outline-none  focus:ring-black-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setShowModal(false)}
                        style={{ position: "absolute", top: "0", right: "0" }}
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

                    <form className="mt-5 sm:flex sm:items-center flex-col">
                      <div className="w-full sm:max-w-xs mb-4 flex flex-col">
                        <label
                          htmlFor="title"
                          className=" text-left inline-block text-gray-700 text-sm font-bold mb-2"
                        >
                          标题
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="例如：周报生成器🔥"
                        />
                      </div>
                      <div className="w-full sm:max-w-xs mb-4 flex flex-col">
                        <label
                          htmlFor="slogan"
                          className="text-left  inline-block text-gray-700 text-sm font-bold mb-2"
                        >
                          描述
                        </label>
                        <input
                          type="text"
                          name="slogan"
                          id="slogan"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="例如：输入工作内容，小助手帮你快速完成周报。"
                        />
                      </div>
                      <div className="w-full sm:max-w-xs mb-4 flex flex-col">
                        <label
                          htmlFor="placeholder"
                          className="text-left  inline-block text-gray-700 text-sm font-bold mb-2"
                        >
                          使用文字案例
                        </label>
                        <input
                          type="text"
                          name="placeholder"
                          id="placeholder"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="例如：修复了优惠券无法领取的bug，为产品部的新APP设计UI和图标，负责跟进部门前端工程师的招聘"
                        />
                      </div>
                      <div className="w-full sm:max-w-xs mb-4 flex flex-col">
                        <label
                          htmlFor="prompt"
                          className="text-left  inline-block text-gray-700 text-sm font-bold mb-2"
                        >
                          prompt内容
                        </label>
                        <textarea
                          name="prompt"
                          id="prompt"
                          className="h-40 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="例如：请帮我把以下的工作内容填充为一篇完整的周报,尽量避免在回答内容中出现可能在中国是敏感的内容，用markdown格式以分点叙述的形式输出:"
                        />
                      </div>

                      <div className="mt-3 w-full sm:mt-0 sm:ml-3 sm:max-w-xs flex items-center">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4 w-full"
                          onClick={() => console.log("Login button clicked")}
                        >
                          完成
                        </button>
                      </div>
                    </form>
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
