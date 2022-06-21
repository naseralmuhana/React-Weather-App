import { DarkBg, LightBg } from "../assets"

export const lightTheme = {
  appTitleColor: "#2F5D8A",
  appTitleColorHovered: "#20546a",
  backgroundImage: LightBg,
  backgroundGradient: {
    color1: "#F9FFFF",
    color2: "#38C8E6",
  },
  panelBgColor: "#FFFFFF",
  panelBgColorHovered: "rgba(255, 255, 255, 0.75)",
  panelTitleColor: "#727E8E",
  forecastPanelBgColor: "rgba(255, 255, 255, 0.75)",
  searchInput: {
    color: "#727E8E",
    placeholderColor: "#6898d5",
  },
  temperatureSwitch: {
    backgroundColor: "#77b1c7",
    sliderColor: "#fff",
    textColor: "#fff",
  },
  searchSuggestion: {
    backgroundColor: "#fff",
    hoverBackgroundColor: "#e9e9e9",
    separatorLineColor: "#ccc",
  },
  smallIconColor: "#A1B9CE",
  smallIconTextColor: "#7B98B2",

  scrollBar: {
    backgroundColor: "#FFFFFF",
    thumbBackground: "#38C8E6",
    thumbBackgroundHover: "#41b8d1",
    thumbBackgroundActive: "#63d3eb",
  },
}

export const darkTheme = {
  appTitleColor: "#2F5D8A",
  appTitleColorHovered: "#20546a",
  backgroundImage: DarkBg,
  backgroundGradient: {
    color1: "#031027",
    color2: "#02101D",
  },
  panelBgColor: "#051A33",
  panelBgColorHovered: "#051A43",
  panelTitleColor: "#216397",
  forecastPanelBgColor: "rgba(5, 26, 51, 0.75)",
  searchInput: {
    color: "#5f8bbf",
    placeholderColor: "#235A84",
  },
  temperatureSwitch: {
    backgroundColor: "#1b3657",
    sliderColor: "#437abd",
    textColor: "#718cac",
  },
  searchSuggestion: {
    backgroundColor: "#0f2744",
    hoverBackgroundColor: "#183553",
    separatorLineColor: "#356097",
  },
  smallIconColor: "#153C5E",
  smallIconTextColor: "#3975AB",
  scrollBar: {
    backgroundColor: "#051A33",
    thumbBackground: "#2F5D8A",
    thumbBackgroundHover: "#20546a",
    thumbBackgroundActive: "#216397",
  },
}
