/**
 * Utility function to decrypt data.
 * You can implement your actual decryption logic here using crypto-js or any other library.
 */
export const decryptData = (data) => {
    try {
        // If it's already an object, return it.
        if (typeof data === "object") return data;
        // Otherwise, attempt to parse or decrypt.
        return JSON.parse(data);
    } catch (error) {
        console.error("Decryption failed:", error);
        return data;
    }
};

export const encryptData = (data) => {
    return JSON.stringify(data);
};
