import { Ionicons } from "@expo/vector-icons"
import { Platform } from "react-native"
import { HeaderButton } from "react-navigation-header-buttons"
import { THEME } from "../theme"

export const HeaderIcon = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={Platform.OS === "android" ? "white" : THEME.MAIN_COLOR}
    />
  )
}
