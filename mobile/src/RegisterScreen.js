import * as React from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Text,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import { AuthContext } from "./utils";

export function RegisterScreen() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const { container, txtInput } = styles;
  const { signUp } = React.useContext(AuthContext);

  const register = (username, email, password, passwordConfirm) => {
    if (password === passwordConfirm) signUp({ username, password, email });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={container}>
        <Card style={styles.cardStyle}>
          <TextInput
            placeholder="Enter A Username"
            value={username}
            onChangeText={setUsername}
            style={txtInput}
            textAlign="center"
          />
          <TextInput
            placeholder="Enter An Email"
            value={email}
            onChangeText={setEmail}
            style={txtInput}
            textAlign="center"
          />
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={txtInput}
            textAlign="center"
          />
          <TextInput
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            secureTextEntry
            style={txtInput}
            textAlign="center"
          />
          <View style={styles.buttonView}>
            <Button
              color="black"
              title="Register"
              onPress={() =>
                register({ username, email, password, passwordConfirm })
              }
            />
          </View>
        </Card>
        <View></View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },
  cardStyle: {
    marginVertical: 80,
    width: 330,
    alignItems: "center",
  },
  txtInput: {
    height: 60,
    width: "95%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 5,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: "8%",
  },
  buttonView: {
    height: 50,
    margin: 5,
    backgroundColor: Colors.primary,
    marginTop: "8%",
    width: "65%",
    borderRadius: 10,
    justifyContent: "center",
  },
});
