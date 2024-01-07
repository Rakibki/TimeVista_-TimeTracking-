import { RiGoogleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";

const SocailLogin = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(authContext);

  const hanldeGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((e) => console.log(e));
  };

  const handleGithub = () => {
    loginWithGithub()
      .then((res) => {
        console.log(res.user);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="mt-6 flex justify-center">
      <div className="flex items-center gap-3">
        <div
          onClick={hanldeGoogle}
          className="p-3 cursor-pointer transition-all rounded-full hover:text-black hover:border-black border-[#fff] text-[#fff] border-2"
        >
          <RiGoogleFill />
        </div>
        <div
          onClick={handleGithub}
          className="p-3 cursor-pointer transition-all rounded-full hover:text-black hover:border-black border-[#fff] text-[#fff] border-2"
        >
          <FaGithub />
        </div>
        <div className="p-3 cursor-pointer transition-all rounded-full hover:text-black hover:border-black border-[#fff] text-[#fff] border-2">
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default SocailLogin;
