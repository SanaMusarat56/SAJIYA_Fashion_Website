import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SigninPage() {
  const navigate = useNavigate();
  const [form, setFoem] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in form:", form);
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-110 bg-white px-8 py-10 shadow-sm border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <h3 className="tracking-[3px] text-lg font-medium">SAJIYA</h3>
        </div>
        <h2 className="text-2xl font-semibold mb-1">Sign in</h2>
        <p className="text-sm text-gray-500 mb-6">Sign in to your account</p>
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        >
            <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="off"
            className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete="off"
            className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />
          <div className="flex justify-end -mt-1">
            <span onClick={()=>navigate("/ForgotPassword")}
            className="text-sm text-gray-500 hover:text-black cursor-pointer hover:underline"
            >
                Forgot Password?
            </span>
          </div>
           <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-3 mt-2 transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-5 text-center">
            Don&apos;t have an account? {""}
            <span
            onClick={()=>navigate("/SignupPage")}
            className="text-black font-medium cursor-pointer hover:underline"
            >
                Sign Up
            </span>
        </p>
      </div>
    </div>
  );
}
export default SigninPage;
