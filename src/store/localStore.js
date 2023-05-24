/** @format */

function setValue(key, message) {
  localStorage.setItem(key, message);
}
function setObject(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}
function getValue(key) {
  return localStorage.getItem(key);
}
function getObject(key) {
  const objectJson = localStorage.getItem(key);
  let object = {};
  if (objectJson !== undefined) {
    object = JSON.parse(objectJson);
  }
  return object;
}

function removeSome(key) {
  localStorage.removeItem(key);
}

const LocalStore = {
  isLogin: () => {
    const user = LocalStore.getToken();
    const isLoggedIn = user !== null;
    return isLoggedIn;
  },
  setToken: (value) => {
    setValue('token', value);
  },
  getToken: () => {
    return getValue('token');
  },
  removeToken: () => {
    removeSome('token');
  },
  setLoginInfo: ({ loginName, loginPwd, isRemember }) => {
    setObject('loginInfo', { loginName, loginPwd, isRemember });
  },
  getLoginInfo: () => {
    return getObject('loginInfo');
  },
  removeLoginInfo: () => {
    removeSome('loginInfo');
  },
  setUserInfo: (user) => {
    setObject('userInfo', user);
  },
  getUserInfo: () => {
    return getObject('userInfo');
  },
  removeUserInfo: () => {
    removeSome('userInfo');
  },
};

export default LocalStore;
