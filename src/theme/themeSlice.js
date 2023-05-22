import { createSlice } from "@reduxjs/toolkit";
function saveTheme(state) {
  let json = JSON.stringify(state);
  localStorage.setItem("theme", json);
}

const themeReducer = createSlice({
  name: "appTheme",
  initialState: {
    fontSize: 14,
    isBold: false,
    isDark: false,
    theColor: "",
  },

  reducers: {
    setFontSize(state, action) {
      state.fontSize = action.payload;
      saveTheme(state);
    },
    setFontBold(state, action) {
      state.isBold = !state.isBold;
      saveTheme(state);
    },
    setIsDart(state, action) {
      state.isDark = !state.isDark;
      saveTheme(state);
    },
    setTheColor(state, action) {
      state.theColor = action.payload;
      saveTheme(state);
    },
    setTheme(state, action) {
      state.fontSize = action.payload.fontSize;
      state.isBold = action.payload.isBold;
      state.isDark = action.payload.isDark;
      state.theColor = action.payload.theColor;
    },
  },
});

//导出actions
export const { setFontSize, setFontBold, setIsDart, setTheColor, setTheme } =
  themeReducer.actions;
// 导出reducer，在创建store时使用到
export default themeReducer.reducer;
