import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles, lastInput } from "./Register.styled";
import { useEffect, useState } from "react";

const initialValue = {
  login: "",
  email: "",
  password: "",
};

const Register = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialValue);

  const [keyboardStatus, setKeyboardStatus] = useState("");

  useEffect(() => {
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });

    return () => hideKeyboard.remove();
  });

  const clickOutside = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialValue);
  };
  console.log(keyboardStatus);
  return (
    <TouchableWithoutFeedback onPress={clickOutside}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? -165 : 0 }}
          >
            <Text style={styles.textTitle}>Регістрація</Text>
            <TextInput
              onFocus={() => setIsShowKeyboard(true)}
              placeholder="Логін"
              style={styles.input}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))
              }
            />
            <TextInput
              onFocus={() => setIsShowKeyboard(true)}
              placeholder="Електронна адреса"
              style={styles.input}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
              placeholder="Пароль"
              style={lastInput}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
              <Text>Зареєструаватися</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.btnNavigation}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
