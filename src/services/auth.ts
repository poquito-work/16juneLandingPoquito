import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_TARGET ||
  "http://13.207.123.199:8080";

export const loginUser = async (
  email: string,
  password: string
) => {
  const payload = {
    email,
    username: "",
    phone_number: "",
    password,
    device_id: "web",
  };

  console.log("Login Payload:", payload);
  console.log("API URL:", `${API_BASE_URL}/api/v1/auth/login/password`);

  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/login/password`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};



export const sendOtp = async (
  identifier: string,
  otp_type: string
) => {
  const payload = {
    identifier,
    otp_type: "EMAIL_OTP",
  };

  console.log("Login Payload:", payload);
  console.log("API URL:", `${API_BASE_URL}/api/v1/auth/login/password`);

  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/send-otp`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};