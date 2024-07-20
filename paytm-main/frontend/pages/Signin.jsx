import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/Inputbox";
import { SubHeading } from "../components/Subheading";

export function Signin() {
  function onClick() {}

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center ">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign In"></Heading>
          <SubHeading label="Enter your credentials to access your account"></SubHeading>
          <InputBox label="Email" placeholder="johndoe@gmail.com"></InputBox>
          <InputBox label="Password" placeholder=""></InputBox>
          <div className="pt-4">
            <Button label="Sign In" onClick={onClick}></Button>
          </div>
          <BottomWarning
            to="/signup"
            label="Don't have an account?"
            buttonText="Sign Up"
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
}
