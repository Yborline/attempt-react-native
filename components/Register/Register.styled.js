import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#dda0dd",
  },
  textTitle: {
    marginTop: 92,
    marginBottom: 33,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35,

    //       font-family: 'Roboto';
    // font-style: normal;
    // font-weight: 500;
    // font-size: 30px;
    // line-height: 35px;
    // text-align: center;
    // letter-spacing: 0.01em;
  },
  input: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#F6F6F6",
  },
  lastInput: {
    marginBottom: 43,
  },
  btn: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginBottom: 16,
  },
  btnNavigation: {
    marginBottom: 66,
    textAlign: "center",
  },
});

export const lastInput = StyleSheet.compose(styles.input, styles.lastInput);
