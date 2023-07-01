import { FormEvent, useState } from "react";
import { Form, TextInput, Button } from "../../components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../../helpers/firebase";

export const AuthenticationView = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSingIn = (e: FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <Form handleSubmit={(e: FormEvent) => onSingIn(e)}>
        <>
          <TextInput
            type="text"
            label="User"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            label="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" label="Save" />
          <Button type="button" label="Cancel" />
        </>
      </Form>
    </div>
  );
};

export default AuthenticationView;
