import { useCookies } from "react-cookie";



const api = {
    // baseURL: 'http://127.0.0.1:9500/tool',
    baseURL: 'https://toolkit.show/tool',
    headers: {
      'Content-Type': 'application/json',
    },
  };

const  form_headers = {
    "content-type": "multipart/form-data",
}

    export const registerUser = (data) => fetch(`${api.baseURL}/login/register`, { method: 'POST', body: JSON.stringify(data), headers: api.headers });

    export const loginUser = (phoneNumbers,password) => fetch(`${api.baseURL}/login/login?phoneNumbers=${phoneNumbers}&password=${password}`, { method: 'POST'});

    export const smsCodeSender = (phoneNumbers) => fetch(`${api.baseURL}/login/smsCode?phoneNumbers=`+phoneNumbers, { method: 'POST' });

      export const getUsers = (cookie) => {

        fetch(`${api.baseURL}/api/userInfo/getInfo`,{
          // fetch跨域不会携带cookie ，需要加上这行
          credentials: 'include',
          method: 'GET',
          headers: {
            'Cookie': cookie,
            'Content-Type': 'application/json',
          }
        })
      };

  
//   export const deleteUser = (id) => fetch(`${api.baseURL}/users/${id}`, { method: 'DELETE' });
//   export const getUsers = () => fetch(`${api.baseURL}/users`);
//   export const getUserById = (id) => fetch(`${api.baseURL}/users/${id}`);
//   export const createUser = (data) => fetch(`${api.baseURL}/users`, { method: 'POST', body: JSON.stringify(data), headers: api.headers });
//   export const updateUser = (id, data) => fetch(`${api.baseURL}/users/${id}`, { method: 'PUT', body: JSON.stringify(data), headers: api.headers });
//   export const deleteUser = (id) => fetch(`${api.baseURL}/users/${id}`, { method: 'DELETE' });

export default api
  