import { colors } from "./../../common/color";
export const styles = {
  appBar: { background: colors.header_color },
  navBarButton: { marginRight: 10 },
  userBar: {
    display: "flex",
    width: "100px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userBarIcon: {
    background: colors.primary_light_grey,
    borderRadius: 5,
  },
  imgContainer: {
    height: "2rem",
    width: "2rem",
    padding: "10px",
  },
  userName: {
    fontSize: "12px",
  },
};
