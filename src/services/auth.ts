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

export const registerUser = async (data: {
  username: string;
  email: string;
  phone_number: string;
  password: string;
  city: string;
  otp:string
}) => {
  const payload = {
    username: data.username,
    email: data.email,
    phone_number: data.phone_number,
    password: data.password,
    city: data.city,
    email_otp:data.otp
    // device_id: "web",
  };

  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/register`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const verifyOtp = async (data: {
  identifier: string;
  otp: string;
  otp_type: string;
}) => {
  const payload = {
    identifier: data.identifier,
    otp: data.otp,
    otp_type: data.otp_type,
  };

  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/verify-otp`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};