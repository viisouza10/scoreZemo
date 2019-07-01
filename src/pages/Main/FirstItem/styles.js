import { StyleSheet, Dimensions } from "react-native";
import { colors, metrics } from "~/styles";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
import { getStatusBarHeight } from "react-native-status-bar-height";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secundary,
    height: height * 0.4,
    width: width * 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    overflow: "hidden",
    paddingTop: getStatusBarHeight()
  },
  name: {
    fontSize: 25,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: metrics.baseMargin * 2,
    position: "relative"
  },
  score: {
    position: "absolute",
    bottom: 25,
    right: 0,
    backgroundColor: colors.primary,
    color: colors.white,
    padding: metrics.basePadding / 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 40,
    height: 40
  },
  score_txt: {
    color: colors.white
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
});

export default styles;
