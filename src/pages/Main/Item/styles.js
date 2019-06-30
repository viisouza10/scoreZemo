import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  position: {
    color: colors.white,
    fontSize: 20,
    marginRight: metrics.baseMargin,
    width: 20,
    textAlign: "left"
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: colors.transparent,
    marginRight: metrics.baseMargin
  },
  name: { color: colors.white, fontSize: 20, width: 200 },
  score: { color: colors.white, fontSize: 20, width: 50, textAlign: "right" }
});

export default styles;
