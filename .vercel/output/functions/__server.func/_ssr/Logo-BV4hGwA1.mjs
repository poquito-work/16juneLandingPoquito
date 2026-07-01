import { a as axios } from "../_libs/axios.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as logoSrc } from "./pocket-dragon-logo-B1TjRRiN.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const API_BASE_URL = "http://ec2-13-207-123-199.ap-south-1.compute.amazonaws.com:8080";
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
    is_privacy_policy: data.is_privacy_policy,
    avatar_url: data.avatar_url
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
const forgotPassword = async (email) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/forgot-password`,
    { email },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return response.data;
};
const resetPassword = async (email, reset_otp, new_password) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/reset-password`,
    {
      email,
      reset_otp,
      new_password
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return response.data;
};
const initializeSubscription = async (user_uuid, plan_uuid) => {
  const response = await api.post(
    `${API_BASE_URL}/api/v1/subscriptions/`,
    {
      user_uuid,
      plan_uuid
    }
  );
  return response.data;
};
const sizeClasses = {
  sm: "h-14 w-auto",
  md: "h-14 w-auto",
  lg: "h-20 w-auto",
  xl: "h-28 w-auto md:h-36",
  hero: "h-40 w-auto sm:h-56 md:h-72 lg:h-80"
};
const wrapperSizeClasses = {
  sm: "h-10 w-40",
  md: "h-14 w-56",
  lg: "h-20 w-80",
  xl: "h-28 w-auto md:h-36",
  hero: "h-40 sm:h-56 md:h-72 lg:h-80 w-full max-w-[480px]"
};
const EASE = [0.22, 0.61, 0.36, 1];
function PocketDragonLogo({
  className = "",
  size = "sm",
  animate = false,
  light = false
}) {
  const lightFilter = "brightness(0) invert(1)";
  if (!animate) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: logoSrc,
        alt: "Pocket Dragon",
        width: 1024,
        height: 768,
        decoding: "async",
        className: `${sizeClasses[size]} object-contain shrink-0 select-none transition-all duration-500 ${className}`,
        style: light ? { filter: lightFilter } : void 0,
        draggable: false
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative ${wrapperSizeClasses[size]} shrink-0 select-none ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "absolute inset-0 overflow-hidden",
            initial: { clipPath: "inset(0% 0% 100% 0%)" },
            animate: { clipPath: "inset(0% 0% 0% 0%)" },
            transition: { duration: 1.1, ease: EASE, delay: 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoSrc,
                alt: "Pocket Dragon",
                width: 1024,
                height: 768,
                decoding: "async",
                draggable: false,
                className: "w-full h-full object-contain"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            initial: { opacity: 0, x: "-110%" },
            animate: { opacity: [0, 0.4, 0], x: ["-110%", "210%"] },
            transition: { duration: 0.55, delay: 1.2, ease: "easeInOut" },
            style: {
              background: "linear-gradient(105deg, transparent 30%, rgba(249,242,228,0.6) 50%, transparent 70%)"
            }
          }
        )
      ]
    }
  );
}
export {
  PocketDragonLogo as P,
  getPrivacyPolicy as a,
  checkUserExists as b,
  checkEmailExists as c,
  getPredefinedListByType as d,
  resetPassword as e,
  forgotPassword as f,
  getTermsCondition as g,
  getUserProfile as h,
  getTransactionList as i,
  getPackageList as j,
  initializeSubscription as k,
  loginUser as l,
  upgradeSubscription as m,
  cancelSubscription as n,
  registerUser as r,
  sendOtp as s,
  updateUserProfile as u
};
