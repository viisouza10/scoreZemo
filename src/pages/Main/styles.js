import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { colors, metrics } from "~/styles";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    height: 54 + getStatusBarHeight()
  },
  loading: {
    marginTop: metrics.baseMargin * 2
  }
});

export default styles;
