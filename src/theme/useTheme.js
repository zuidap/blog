import { useSelector } from "react-redux";
function useTheme() {
  const appTheme = useSelector((state) => state.appTheme);
  const { isDark, theColor, fontSize, isBold } = appTheme;
  const fontWeight = isBold ? 700 : 400;

  const color2 = theColor === "" ? "#4AA891" : theColor;
  const name = isDark ? "深色" : "浅色";
  const color1 = isDark ? "#3D4355" : "#F5F7FA";
  const color3 = isDark ? "#6D7387" : "#fff";
  const color4 = isDark ? "#fff" : "#000";
  const color5 = isDark ? "lightgray" : "gray";

  return {
    fontSize,
    isBold,
    fontWeight,
    isDark,
    name,
    color1,
    color2,
    color3,
    color4,
    color5,
  };
}

export default useTheme;
