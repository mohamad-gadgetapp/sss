import { colors } from "./../../common/color";

export const styles = {
  appBar: { background: colors.header_color, boxShadow: "none"},
  navBarButton: { marginRight: 40},
  userBar: {
    display: "flex",
    width: "170px",
    alignItems: "center",
    justifyContent: 'space-between'
    
  },
  userBarIcon: {
    background: colors.primary_light_grey,
    borderRadius: 5,
    width: '3.125rem',
    height: '3.125rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userName: {
    fontSize: "12px",
  },
};
