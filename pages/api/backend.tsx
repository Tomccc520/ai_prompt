const api = {
    baseURL: 'http://localhost:8080/api',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
//   export const deleteUser = (id) => fetch(`${api.baseURL}/users/${id}`, { method: 'DELETE' });
//   export const getUsers = () => fetch(`${api.baseURL}/users`);
//   export const getUserById = (id) => fetch(`${api.baseURL}/users/${id}`);
//   export const createUser = (data) => fetch(`${api.baseURL}/users`, { method: 'POST', body: JSON.stringify(data), headers: api.headers });
//   export const updateUser = (id, data) => fetch(`${api.baseURL}/users/${id}`, { method: 'PUT', body: JSON.stringify(data), headers: api.headers });
//   export const deleteUser = (id) => fetch(`${api.baseURL}/users/${id}`, { method: 'DELETE' });

export default api
  