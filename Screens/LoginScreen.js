import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { handleSignUp } from "../src/ClientRequests/signUpUser";
import { handleLogin } from "../src/ClientRequests/login";
import { save, getValueFor } from "../src/User-Info-Functions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  async function login(em, pw) {
    const loggingIn = await handleLogin({ email: em, password: pw })
      .then((response) => {
        save("userToken", response);
        if (response) {
          navigation.replace("MainContainer");
        } else {
          alert("Error logging in! Try again!");
        }
      })
      .catch((error) => console.log(error));
  }

  function signup(em, pw) {
    handleSignUp({ email: em, password: pw });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logo}>
        <Image source={require("../assets/unlockalLogo.png")} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => login(email, password)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => signup(email, password)}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#008080",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#008080",
    borderWidth: 2,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#008080",
    fontWeight: "700",
    fontSize: 16,
  },
  logo: {
    marginBottom: 50,
  },
});
