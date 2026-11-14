import { useState } from "react";
import { useNavigate } from "react-router-dom";

const COUNTRIES = [
  "Pakistan",
  "United State",
  "United Kingdom",
  "Saudia Arabia",
  "Canada",
  "Australia",
  "Others",
];
function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up form", form);
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-110 bg-white px-8 py-10 shadow-sm border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <h3 className="tracking-[3px] text-lg font-medium">SAJIYA</h3>
        </div>
        <h2 className="text-2xl font-semibold mb-1">Sign Up</h2>
        <p className="text-sm text-gray-500 mb-6">Create your account</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              required
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              autoComplete="off"
              className="flex-1 border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
            />
            <input
              type="text"
              name="lastName"
              required
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              autoComplete="off"
              className="flex-1 border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
            />
          </div>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone No"
            autoComplete="off"
            className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />
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
          <select
            name="country"
            required
            value={form.country}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black bg-white text-gray-700"
          >
            <option value="" disabled>
              Select Country
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-700 text-white text-sm font-semibold py-3 mt-2 transition-colors"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-5 text-center">Already have an account?{""}</p>
        <span 
        onClick={()=>navigate("/SigninPage")}
        className="text-black font-medium cursor-pointer hover:underline"
        >Sign in</span>
      </div>
    </div>
  );
}
export default SignupPage;
