import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import React from "react";






/**
 *
 * @returns 登录表单
 */
export function LoginForm() {
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  const router = useRouter()

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };


  

  const handleLogin = (e:any) => {

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if(username === "" || username == null || password === "" || password == null) {
      toast.error("账号密码不能为空")
      return
    }

    // console.log("username:"+username+"password:"+password)
    try {
      // 登录api

      const data = ""
      setCookie("user", {"username":username}, {
        path: "/",
        maxAge: 3600 * 24, // cookeie 一小时后过期
        sameSite: true,
      })
    } catch (err) {
      console.log(err)
    }
    
    console.log(cookies)
    setShowModal(false)
    toast.success("登陆成功！")
   
  }

  const loginTextOpacityClick = (e) => {
    if (e.target.style.opacity === "100") {
       e.target.style.opacity = "0.5";
    } else {
       e.target.style.opacity = "100";
    }
 }

  return (
    <>
      <button
        className="bg-black text-white font-bold py-1 px-2 rounded-md m-4 text-sm"
        onClick={() => setShowModal(true)}
      >
        登录
      </button>
      {showModal ? (
        <div className="fixed z-99 inset-0">
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
                        <span className="flex-auto text-center cursor-pointer" onClick={(e) => loginTextOpacityClick(e)}>登录</span>
                        

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

                    <div className="mt-5 sm:flex sm:items-center flex-col">
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
                      <div className=" text-center mt-3 w-full sm:mt-0 sm:ml-3 sm:max-w-xs flex items-center">
                        <button
                          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4 w-full"
                          onClick={(e) => {
                            console.log("Login button clicked")
                            handleLogin(e)
                          }}
                        >
                          登录
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

/**
 *
 * @returns 注册表单
 */
export function RegisterForm() {
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  const router = useRouter()


  const handleRegister = (e:any) => {

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // console.log("username:"+username+"password:"+password)
    if(username === "" || username == null || password === "" || password == null) {
      toast.error("账号密码不能为空")
      return
    }

    try {
      // 注册api

      // 判断注册是否成功，成功则调用登录api

      const data = ""

      setCookie("user", JSON.stringify(data), {
        path: "/",
        maxAge: 3600 * 24, // cookeie 一小时后过期
        sameSite: true,
      })
    } catch (err) {
      console.log(err)
    }
    console.log(cookies)
    setShowModal(false)
    toast.success("注册成功！")
    router.push("/")
  }

  const loginTextOpacityClick = (e) => {
    if (e.target.style.opacity === "100") {
       e.target.style.opacity = "0.5";
    } else {
       e.target.style.opacity = "100";
    }
 }

  return (
    <>
      <button
        className="bg-black text-white font-bold py-1 px-2 rounded-md m-4 text-sm"
        onClick={() => setShowModal(true)}
      >
        注册
      </button>
      {showModal ? (
        <div className="fixed z-99 inset-0">
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
                         <span className="flex-auto text-center text-black cursor-pointer" onClick={(e) => loginTextOpacityClick(e)}> 注册</span>

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

                    <div className="mt-5 sm:flex sm:items-center flex-col">
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
                      <div className=" text-center mt-3 w-full sm:mt-0 sm:ml-3 sm:max-w-xs flex items-center">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4 w-full"
                          onClick={(e) => {
                            console.log("Register button clicked")
                            handleRegister(e)
                          }}
                        >
                          注册
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
