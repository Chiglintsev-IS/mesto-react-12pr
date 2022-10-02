const BASE_URL = 's';

/**
 * @return {Promise<Response>}
 * {
 *     "data": {
 *         "_id": "123",
 *         "email": "email@ya.ru"
 *     }
 * }
 */
const signUp = ({password, email}) => {
  return request({
    method: 'POST',
    endpoint: '/url/signup',
    data: {password, email}
  })
};


/** @return {Promise<Response>} {"token" : "qwe.asd.zxc"} */
const signIn = ({password, email}) => {
  return request({
    method: 'POST',
    endpoint: '/url/signin',
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
const getUserByToken = ({token}) => {
  return request({
    method: 'GET',
    endpoint: 'url/users/me',
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
