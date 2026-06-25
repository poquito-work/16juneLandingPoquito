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
    phone_number: null,
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
  phone_number: string | null;
  password: string;
  city_id: number;
  otp: string;
  role_name: string;
  is_terms_condition_accepted: boolean;
  is_privacy_policy: boolean;
}) => {
  const payload = {
    username: data.username,
    email: data.email,
    phone_number: data.phone_number,
    password: data.password,
    city_id: data.city_id,
    email_otp: data.otp,
    role_name: data.role_name,
    is_terms_condition_accepted: data.is_terms_condition_accepted,
    is_privacy_policy: data.is_privacy_policy,
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

export const checkEmailExists = async (email: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/auth/availability/email?email=${encodeURIComponent(email)}`
  );
  return response.data;
};
export const checkUserExists = async (email: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/auth/availability/username?username=${encodeURIComponent(email)}`
  );
  return response.data;
};

export const getPredefinedListByType = async (entity_type: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/admin/predefined/?entity_type=${entity_type}`
  );

  return response.data;
};



export const getTermsCondition = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/compliance-documents/terms-and-conditions`
  );

  return response.data;
};


export const getPrivacyPolicy = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/compliance-documents/privacy-policy`
  );

  return response.data;
};