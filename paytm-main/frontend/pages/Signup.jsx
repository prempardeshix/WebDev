import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/Inputbox.jsx";
import { SubHeading } from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center ">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign Up"></Heading>
          <SubHeading label="Enter your information to create an account"></SubHeading>
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            label="First Name"
          ></InputBox>
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            label="Last Name"
          ></InputBox>
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="johndoe@gmail.com"
            label="Email"
          ></InputBox>
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            label="Password"
          ></InputBox>
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    lastName,
                    firstName,
                    password,
                    username,
                  }
                );
                localStorage.setItem("token", response.data.token);

                navigate("/dashboard");
              }}
              label="Sign Up"
            ></Button>
          </div>
          <BottomWarning
            label="Already have an account?"
            buttonText="Sign in"
            to="/signin"
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
}
