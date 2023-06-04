import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import background from "./assets/images/starsBlur.jpg";

const initialState = {
  email: "",
  password: "",
};

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "Inter-Italic": require("./assets/fonts/Inter-Italic.otf"),
    "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Medium.ttf"),
  });

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
      console.log(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    if (state.email === "") console.log(state);
    setState(initialState);
  };

  const clickOutside = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={clickOutside}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground style={styles.backgroundImage} source={background}>
          {/* <ImageBackground source={require("./assets/images/night.jpg")}> */}
          <KeyboardAvoidingView
            // behavior={Platform.OS === "ios" ? "padding" : "height"}
            behavior={Platform.OS === "ios" && "padding"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 100,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello again</Text>
                <Text style={styles.headerTitle}>Welcome back</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>Passsword</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  textAlign="center"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <StatusBar style="auto" />
          {/* </ImageBackground> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  form: {
    // marginHorizontal: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 120,
  },
  headerTitle: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Ubuntu-Regular",
  },
  inputTitle: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "Ubuntu-Regular",
  },
  input: {
    // backgroundColor: "#fff",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#da70d6",
    borderRadius: 10,
    height: 40,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 40,

    height: 40,
    borderRadius: 10,
    borderWidth: 1,

    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#fff",
      },
      android: {
        backgroundColor: "#dda0dd",
      },
    }),
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#4169e1" : "#800080",
    fontSize: 18,
  },
});
