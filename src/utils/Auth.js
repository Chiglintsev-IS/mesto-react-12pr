const BASE_URL = 'https://auth.nomoreparties.co';

/**
 * @return {Promise<Response>}
 * {
 *     "data": {
 *         "_id": "123",
 *         "email": "email@ya.ru"
 *     }
 * }
 */
export const signUp = ({password, email}) => {
  return request({
    method: 'POST',
    endpoint: '/signup',
    data: {password, email}
  })
};


/** @return {Promise<Response>} {"token" : "qwe.asd.zxc"} */
export const signIn = ({password, email}) => {
  return request({
    method: 'POST',
    endpoint: '/signin',
    data: {password, email}
  })
};

/**
 * @return {Promise<Response>}
 * {
 * 	"_id":"123",
 * 	"email":"email@ya.ru"
 * }
 */
export const getUserByToken = ({token}) => {
  return request({
    method: 'GET',
    endpoint: '/users/me',
    token: token
  })
};



/**
 *
 * @param method
 * @param endpoint
 * @param data
 * @param token
 * @return {Promise<Response>}
 */
function request({
                   method,
                   endpoint,
                   data,
                   token
                 }) {
  return fetch(
    `${BASE_URL}${endpoint}`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(!!token && {"Authorization": `Bearer ${token}`})
      },
      ...(!!data && {body: JSON.stringify(data)}),
    }
  ).then(resp => resp.ok ? resp.json() : Promise.reject(resp.statusText))
}
