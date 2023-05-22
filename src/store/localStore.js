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

const LocalStore = {
  isLogin: () => {
    const user = LocalStore.getUserInfo();
    const isLoggedIn = user !== null;
    return isLoggedIn;
  },
  setToken: (value) => {
    setValue("token", value);
  },
  getToken: () => {
    return getValue("token");
  },
  removeToken: () => {
    localStorage.removeItem("token");
  },
  setLoginInfo: ({ loginName, loginPwd, isRemember }) => {
    setObject("loginInfo", { loginName, loginPwd, isRemember });
  },
  getLoginInfo: () => {
    return getObject("loginInfo");
  },
  removeLoginInfo: () => {
    localStorage.removeItem("loginInfo");
  },
  setUserInfo: (user) => {
    setObject("userInfo", user);
  },
  getUserInfo: () => {
    return getObject("userInfo");
  },
  removeUserInfo: () => {
    localStorage.removeItem("userInfo");
  },
};

export default LocalStore;
