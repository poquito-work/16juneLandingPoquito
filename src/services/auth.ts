import axios from "axios";



const API_BASE_URL =
  import.meta.env.VITE_API_TARGET ||
  "http://13.207.123.199:8080";


  const api = axios.create({ baseURL: API_BASE_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");

      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);


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
  avatar_url: string;
  
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
     avatar_url: data.avatar_url,
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


export async function getUserProfile() {
  const response = await api.get(`/api/v1/users/profile`);
  return response.data;
}

export const updateUserProfile = async (data: {
  name?: string;
  username?: string;
  phone_number?: string | null;
  avatar_url?: string;
  city_id?: number;
  is_mfa_enabled?: boolean;
  is_biometric_enabled?: boolean;
  
  
}) => {
  const response = await api.put(`/api/v1/users/profile`, data);
  return response.data;
};

export async function getPackageList() {
  const response = await api.get(`/api/v1/package-master`);
  return response.data;
}

export const getTransactionList = async (
  page = 0,
  size = 10
) => {
  return api.get(
    `${API_BASE_URL}/api/v1/subscriptions/transactions?page=${page}&size=${size}`
  );
};

export function upgradeSubscription(new_plan_uuid: string) {
  return api.post("/api/v1/subscriptions/upgrade", { new_plan_uuid });
}


export function cancelSubscription() {
  return api.post("/api/v1/subscriptions/cancel");
}


export const forgotPassword = async (email: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/forgot-password`,
    { email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const resetPassword = async (
  email: string,
  reset_otp: string,
  new_password: string
) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/reset-password`,
    {
      email,
      reset_otp,
      new_password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};


export const initializeSubscription = async (
  user_uuid: string,
  plan_uuid: string
) => {
  const response = await api.post(
    `${API_BASE_URL}/api/v1/subscriptions/`,
    {
      user_uuid,
      plan_uuid,
    }
  );

  return response.data;
};