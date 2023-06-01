import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";

import background from "./assets/images/stars.jpg";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={background}>
        {/* <ImageBackground source={require("./assets/images/night.jpg")}> */}
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput style={styles.input} textAlign="center" />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>Passsword</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              textAlign="center"
            />
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.btn}>
            <Text style={styles.btnTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
        {/* </ImageBackground> */}
      </ImageBackground>
    </View>
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
    justifyContent: "center",
    // alignItems: "center",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#da70d6",
    borderRadius: 10,
    height: 40,
  },
  btn: {
    marginTop: 40,
    backgroundColor: Platform === "ios" ? "transparent" : "#dda0dd",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Platform.OS === "ios" && "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#4169e1" : "#800080",
    fontSize: 18,
  },
});
