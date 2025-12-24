/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Slices/AuthSlice";
import { decryptData } from "./encrypt";

// Update the base URL according to your environment
export const baseURL = "http://192.168.18.60:9000/api/";
// export const baseURL = "https://api.protectllc.us/api/";

/**
 * apiFunction is a custom hook that provides methods for API calls
 * with built-in deduplication and automatic authorization header management.
 */
const apiFunction = () => {
    const encryptedUser = useSelector(selectUser);
    const userData = encryptedUser ? decryptData(encryptedUser) : null;
    const token = userData?.data?.tokens?.accessToken;

    const header1 = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };

    const header2 = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
    };

    const header3 = {};

    const axiosInstance = axios.create({
        baseURL,
    });

    // -------------------------------
    // MULTIPLE CALL STOP LOGIC (Deduplication)
    // -------------------------------
    const activeRequestsRef = new Map();

    const getRequestKey = (method, endpoint, params) => {
        return `${method}:${endpoint}:${JSON.stringify(params || {})}`;
    };
    // --------------------------------------------------

    const getData = async (endpoint, headers = header1, options = {}) => {
        try {
            const { deduplicate = true } = options;
            const requestKey = getRequestKey("GET", endpoint, headers);

            if (deduplicate && activeRequestsRef.has(requestKey)) {
                return activeRequestsRef.get(requestKey);
            }

            const requestPromise = axiosInstance
                .get(endpoint, {
                    headers: {
                        ...headers,
                    },
                })
                .then((res) => res.data)
                .finally(() => {
                    activeRequestsRef.delete(requestKey);
                });

            if (deduplicate) {
                activeRequestsRef.set(requestKey, requestPromise);
            }

            return requestPromise;
        } catch (error) {
            console.error("Error in GET request:", error);
            throw error;
        }
    };

    const postData = async (
        endpoint,
        apiData,
        headers = header1,
        options = {}
    ) => {
        try {
            const { deduplicate = true } = options;
            const requestKey = getRequestKey("POST", endpoint, apiData);

            if (deduplicate && activeRequestsRef.has(requestKey)) {
                return activeRequestsRef.get(requestKey);
            }

            const requestPromise = axiosInstance
                .post(endpoint, apiData, {
                    headers: {
                        ...headers,
                    },
                })
                .then((res) => res.data)
                .finally(() => {
                    activeRequestsRef.delete(requestKey);
                });

            if (deduplicate) {
                activeRequestsRef.set(requestKey, requestPromise);
            }

            return requestPromise;
        } catch (error) {
            console.error("Error in POST request:", error);
            throw error;
        }
    };

    const deleteData = async (endpoint, headers = header1, options = {}) => {
        try {
            const { deduplicate = true } = options;
            const requestKey = getRequestKey("DELETE", endpoint);

            if (deduplicate && activeRequestsRef.has(requestKey)) {
                return activeRequestsRef.get(requestKey);
            }

            const requestPromise = axiosInstance
                .delete(endpoint, {
                    headers: {
                        ...headers,
                    },
                })
                .then((res) => res.data)
                .finally(() => {
                    activeRequestsRef.delete(requestKey);
                });

            if (deduplicate) {
                activeRequestsRef.set(requestKey, requestPromise);
            }

            return requestPromise;
        } catch (error) {
            console.error("Error in DELETE request:", error);
            throw error;
        }
    };

    const putData = async (
        endpoint,
        apiData,
        headers = header1,
        options = {}
    ) => {
        try {
            const { deduplicate = true } = options;
            const requestKey = getRequestKey("PUT", endpoint, apiData);

            if (deduplicate && activeRequestsRef.has(requestKey)) {
                return activeRequestsRef.get(requestKey);
            }

            const requestPromise = axiosInstance
                .put(endpoint, apiData, {
                    headers: {
                        ...headers,
                    },
                })
                .then((res) => res.data)
                .finally(() => {
                    activeRequestsRef.delete(requestKey);
                });

            if (deduplicate) {
                activeRequestsRef.set(requestKey, requestPromise);
            }

            return requestPromise;
        } catch (error) {
            console.error("Error in PUT request:", error);
            throw error;
        }
    };

    const patchData = async (endpoint, apiData, headers = {}, options = {}) => {
        try {
            const { deduplicate = true } = options;
            const requestKey = getRequestKey("PATCH", endpoint, apiData);

            if (deduplicate && activeRequestsRef.has(requestKey)) {
                return activeRequestsRef.get(requestKey);
            }

            const requestPromise = axiosInstance
                .patch(endpoint, apiData, {
                    headers: {
                        ...headers,
                    },
                })
                .then((res) => res.data)
                .finally(() => {
                    activeRequestsRef.delete(requestKey);
                });

            if (deduplicate) {
                activeRequestsRef.set(requestKey, requestPromise);
            }

            return requestPromise;
        } catch (error) {
            console.error("Error in PATCH request:", error);
            throw error;
        }
    };

    return {
        getData,
        postData,
        deleteData,
        putData,
        patchData,
        header1,
        header2,
        header3,
        userData,
    };
};

export default apiFunction;
