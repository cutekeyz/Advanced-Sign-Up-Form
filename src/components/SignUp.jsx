import { useState } from "react";
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';

// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [isLoading, setIsLoading] = useState(false);

const handleSubmit = (e) => {
  e.prevent.default();

}

const SignUp = () => {
  return (
    <section className="flex bg-black h-screen">

      {/* LEFT SECTION */}
      <div className="w-[50%] bg-[#38000a] shadow-2xl shadow-orange-400 mx-4 my-4 rounded-lg"> 

        <div className="flex flex-col mx-4 mt-12 text-white mb-80">
          <div>
          <h1 className="text-4xl font-extrabold pl-10 ">Get Started With Us</h1>
        </div>
        <div>
          <p className="mx-10 mt-5 text-sm font-thin font-mono">Complete these steps to register your account</p>
        </div>
        </div>

        {/* CARDS  */}

        <div className="flex gap-8 px-10">
          
          {/* CARD ONE */}
          <div className="flex flex-col pl-2 items-start bg-teal-600 w-40 rounded-xl py-2">
            <div className="bg-black text-white font-serif w-10 h-10 rounded-full mb-4">
            <p className="px-4 py-2">1</p>
          </div>
          <div className="font-mono text-sm">
            <p className="">Sign up your <br /> account</p>
          </div>
          </div>

          {/* CARD TWO */}
          <div className="flex flex-col pl-2 text-white items-start bg-black w-40 rounded-xl py-2">
            <div className="bg-teal-600 text-white font-serif w-10 h-10 rounded-full mb-4">
            <p className="px-4 py-2">2</p>
          </div>
          <div className="font-mono text-sm">
            <p>Add personal details</p>
          </div>
          </div>

          {/* CARD THREE */}
          <div className="flex flex-col pl-2 text-white items-start bg-orange-500 w-40 rounded-xl py-2">
            <div  className="bg-black text-white font-serif w-10 h-10 rounded-full mb-4">
            <p className="text-orange-500 px-4 py-2">3</p>
          </div>
          <div className="font-mono text-sm">
            <p>Set up your profile</p>
          </div>
          </div>
         

        </div>

      </div>
 
      {/* RIGHT SECTION */}

      <form onSubmit={handleSubmit} className="flex justify-center my-4 items-center text-white w-[50%]">
        <div>
          <div className="text-2xl font-extrabold text-center">
            <h1>Sign Up Account</h1>
          </div>
         
          <div className="text-[12px] py-1 text-center"><p>Enter your personal data to create your account</p></div>

          <div className="flex justify-between px-30 py-6 gap-6">
            <div className="border border-white px-4 py-1 rounded-2xl">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={google} alt="" />
              <button>
              Google</button>
              </div>
              </div>
            <div className="border border-white px-4 py-1 rounded-2xl">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={facebook} alt="" />
              <button>
              Facebook</button>
              </div>
              </div>
          </div>
        
        <div className="flex justify-center font-extrabold text-xl items-center"><p>Or</p></div>

      {/* FIRST AND LAST NAME SECTION */}
        <div className="flex gap-4 pt-2">

          <div className="flex flex-col w-full">
          <div className="pb-2"><label className="">First Name</label></div>
          <div>
            <input className="border py-2 rounded-xl px-2"
          type="text"
          placeholder="e.g John"
          value={Text}
          // onChange={e => setFirstName(e.target.value)}
           />
          </div>
          </div>

          <div className="flex flex-col">
          <div div className="pb-2"><label>Last Name</label></div>
          <div><input className="border py-2 rounded-xl px-2" 
          type="text"
          placeholder="e.g Peters"
          value={Text}
          // onChange={e => setLastName(e.target.value)}
           /></div>
          </div>
          </div>

          {/* EMAIL SECTION  */}

          <div className="mt-4">
            <div className="pb-2"><label htmlFor="">Email</label></div>
            <div><input className="border py-2 rounded-xl px-2 w-full" 
            type="email"
            placeholder="example@gmail.com"
            // value={email}
            // onChange={e => setEmail(e.target.value)}
            /></div>
          </div>

          {/* PASSWORD SECTION */}
            <div className="mt-4">
            <div className="pb-2"><label htmlFor="">Password</label></div>
            <div><input className="border py-2 rounded-xl px-2 w-full"
            type="password"
            placeholder="Enter your password"
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            /></div>
            <div className="my-4 text-gray-400">
              <p>Password must be at least 8 characters</p>
              <p>Password must contain at least 1 upper case and lower case</p>
              <p>Password must contain at least 1 special character @!#$%^&*</p>
            </div>
          </div>

          <div><button className="bg-white text-black font-extrabold border py-2 rounded-xl px-2 w-full cursor-pointer hover:bg-amber-50" >
            {/* {isLoading ? "Loading..." : "Sign Up"} */} Sign Up
            </button></div>

            <div><p className="text-center pt-3">Already have an account? <span className="text-green-700 font-extrabold">Log in</span></p></div>
        
        </div>
      </form>
    </section>
  );
};

export default SignUp;