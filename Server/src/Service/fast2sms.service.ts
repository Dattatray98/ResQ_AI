import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const FAST2SMS = async (PhoneNumber: number, message: any) => {
    try {
        const response = await axios.post(
            "https://www.fast2sms.com/dev/bulkV2",
            {
                route: "otp",
                numbers: PhoneNumber,
                variables_values: message,
                flash: 0
            },
            {
                headers: {
                    authorization: process.env.FAST2SMS_API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );

        if (response.data.return) {
            console.log("SMS sent successfully!");
        } else {
            console.log("SMS failed:", response.data);
        }

    } catch (err: any) {
        console.error("Error sending SMS:", err.response ? err.response.data : err.message);
    }
};
