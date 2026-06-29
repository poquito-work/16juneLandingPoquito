import { a as axios } from "../_libs/axios.mjs";
const API_BASE_URL = "http://13.207.123.199:8080";
const api = axios.create({ baseURL: API_BASE_URL });
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
const loginUser = async (email, password) => {
  const payload = {
    email,
    username: "",
    phone_number: null,
    password,
    device_id: "web"
  };
  console.log("Login Payload:", payload);
  console.log("API URL:", `${API_BASE_URL}/api/v1/auth/login/password`);
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/login/password`,
    payload,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return response.data;
};
const sendOtp = async (identifier, otp_type) => {
  const payload = {
    identifier,
    otp_type: "EMAIL_OTP"
  };
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/send-otp`,
    payload,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return response.data;
};
const registerUser = async (data) => {
  const payload = {
    username: data.username,
    email: data.email,
    phone_number: data.phone_number,
    password: data.password,
    city_id: data.city_id,
    email_otp: data.otp,
    role_name: data.role_name,
    is_terms_condition_accepted: data.is_terms_condition_accepted,
    is_privacy_policy: data.is_privacy_policy
  };
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/register`,
    payload,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return response.data;
};
const verifyOtp = async (data) => {
  const payload = {
    identifier: data.identifier,
    otp: data.otp,
    otp_type: data.otp_type
  };
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/verify-otp`,
    payload,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return response.data;
};
const checkEmailExists = async (email) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/auth/availability/email?email=${encodeURIComponent(email)}`
  );
  return response.data;
};
const checkUserExists = async (email) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/auth/availability/username?username=${encodeURIComponent(email)}`
  );
  return response.data;
};
const getPredefinedListByType = async (entity_type) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/admin/predefined/?entity_type=${entity_type}`
  );
  return response.data;
};
const getTermsCondition = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/compliance-documents/terms-and-conditions`
  );
  return response.data;
};
const getPrivacyPolicy = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/compliance-documents/privacy-policy`
  );
  return response.data;
};
async function getUserProfile() {
  const response = await api.get(`/api/v1/users/profile`);
  return response.data;
}
const updateUserProfile = async (data) => {
  const response = await api.put(`/api/v1/users/profile`, data);
  return response.data;
};
async function getPackageList() {
  const response = await api.get(`/api/v1/package-master`);
  return response.data;
}
const getTransactionList = async (page = 0, size = 10) => {
  return api.get(
    `${API_BASE_URL}/api/v1/subscriptions/transactions?page=${page}&size=${size}`
  );
};
function upgradeSubscription(new_plan_uuid) {
  return api.post("/api/v1/subscriptions/upgrade", { new_plan_uuid });
}
function cancelSubscription() {
  return api.post("/api/v1/subscriptions/cancel");
}
export {
  getPrivacyPolicy as a,
  checkUserExists as b,
  checkEmailExists as c,
  getPredefinedListByType as d,
  getPackageList as e,
  getUserProfile as f,
  getTermsCondition as g,
  getTransactionList as h,
  upgradeSubscription as i,
  cancelSubscription as j,
  loginUser as l,
  registerUser as r,
  sendOtp as s,
  updateUserProfile as u,
  verifyOtp as v
};
