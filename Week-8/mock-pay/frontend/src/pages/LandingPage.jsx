import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-mockpay.png";
import { Button } from "../components/Button";

export const LandingPage = () => {
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    console.log(localStorage.getItem("token"));
    navigate("/dashboard");
  }

  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex flex-row justify-center">
        <div className="w-32 h-32 md:p-20 md:w-96 md:h-96 md:align-center ">
          <img src={logo} alt="mostly a mockpay logo" />
        </div>
        <div className="flex flex-col justify-center">
          <Button
            label="Sign in"
            onClick={() => {
              navigate("/signin");
            }}
          ></Button>
          <span className="flex flex-row mb-0.5">
            <hr className="m-3 w-6/12" />
            <div className="text-sm text-gray-500">or</div>
            <hr className="m-3 w-6/12" />
          </span>
          <Button
            label="Create an account"
            onClick={() => {
              navigate("/signup");
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};
