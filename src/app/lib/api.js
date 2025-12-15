import axios from "axios";

// ===============================
// AXIOS INSTANCE
// ===============================
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_ENV,
  timeout: 15000,
  //  headers: {
  //   "accept-language": "ar", // ✅ Header add kar diya
  // },
});

// ===============================
// READY-TO-USE API FUNCTIONS
// ===============================

// ✅ Masdar List (GET)
export const getMasdarList = async () => {
  try {
    const res = await api.get(
      "/website/name-of-references/for-select"
    );
    return res.data;
  } catch (error) {
    console.error("Masdar fetch error:", error);
    return [];
  }
};

export const getRawwiList = async () => {
  try {
    const res = await api.get(
      "/website/ravis/for-select"
    );
    return res.data?.data || [];
  } catch (error) {
    console.error("Masdar fetch error:", error);
    return [];
  }
};

export const getRaqamUlAli = async () => {
  try {
    const res = await api.get(
      "/website/title-of-the-hadiths/for-select"
    );
    return res.data?.data || [];
  } catch (error) {
    console.error("Masdar fetch error:", error);
    return [];
  }
};



// ===============================
// EXPORT INSTANCE
// ===============================
export default api;
