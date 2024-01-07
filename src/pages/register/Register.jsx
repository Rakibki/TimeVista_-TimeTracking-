import { FaUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { authContext } from "../../providers/AuthProvider";
import uploadeImage from "../../utils/uploadeImage";
import SocailLogin from "../../components/socailLogin/SocailLogin";

const Register = () => {
  const { createUser } = useContext(authContext);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file = e.target.file.files[0];
    const image = await uploadeImage(file);

    if (password.length < 6) {
      return setError("It should be at least 6 characters long.");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[!@#$%^&*]/.test(password)) {
      return setError("It should contain at least one special character");
    }

    await createUser(email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  return (
    <div className="my-10">
      <div className="bg-[#3fd0d4] p-10 w-[50%] mx-auto">
        <form onSubmit={handleRegister}>
          <h1 className="text-3xl font-bold text-white mb-4">Sign Up</h1>
          <div className="relative">
            <input
              type="text"
              name="name"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="Name"
            />
            <FaUser className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <div className="relative mt-3">
            <input
              type="email"
              name="email"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="E-mail"
            />
            <MdOutlineMail className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <div className="relative mt-3">
            <input
              type="password"
              name="password"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="Password"
            />
            <CiLock className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <input
            type="file"
            name="file"
            className="bg-[#6fdcdf] mt-2 text-white border-none"
            id=""
          />

          <div className="mt-4 mb-4">
            <p className="text-red-700 font-Poppins mb-2">{error}</p>
            <button
              type="submit"
              className="py-3 hover:bg-[#6fdcdf] hover:text-white transition-all bg-white text-black font-Poppins font-semibold w-full"
            >
              REGISTER NOW
            </button>
          </div>

          <h1 className="font-Poppins text-white text-center">
            Already registered?{" "}
            <Link className="hover:underline font-semibold" to={"/login"}>
              Go to log in
            </Link>
          </h1>
        </form>
        <SocailLogin />
      </div>
    </div>
  );
};

export default Register;
