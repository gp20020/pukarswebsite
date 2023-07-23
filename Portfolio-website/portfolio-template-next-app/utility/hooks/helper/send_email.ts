import emailjs from "@emailjs/browser"
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../../data/email_js_config";

export const sendEmail = async (fromName: string, emailId: string, message: string): Promise<boolean> => {
    let successStatus = false;
    let emialStatus = await emailjs
        .send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: fromName,
                email_id: emailId,
                message: message,
            },
            PUBLIC_KEY
        );
    console.log(
        emialStatus.status, emialStatus.text
    );
    if (emialStatus.status === 200) {
        successStatus = true;
    }
    return successStatus;

}