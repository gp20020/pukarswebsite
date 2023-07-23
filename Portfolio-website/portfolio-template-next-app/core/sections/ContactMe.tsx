import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FiMail, FiNavigation, FiPhone } from "react-icons/fi";
import { ADDRESS, EMAIL_ADDRESS, MOBILE_NUMBER } from "../../data/contact_data";
import { sendEmail } from "../../utility/hooks/helper/send_email";
import ContactInfoItem from "../components/contactInfoItem";
import HeadlineTexts from "../components/HeadlineText";
import InputTextArea from "../components/InputTextArea";
import InputTextField from "../components/InputTextField";
import MySpinner from "../components/MySpinner";

type Props = {
  contactMeRef: React.LegacyRef<HTMLDivElement>;
};

function ContactMe({ contactMeRef }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<boolean>();

  const handeSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(undefined);

    let status = await sendEmail(name, email, message);

    setStatus(status);
    setIsLoading(false);
  };
  return (
    <div id="contact-me" className="pb-16" ref={contactMeRef}>
      <HeadlineTexts frontText="GET IN TOUCH" backText="Contact" />

      <div className="flex flex-col sm:flex-row gap-4 sm:px-12  w-full h-1/2">
        {/* CONTACT INFO  */}
        <div className="w-full">
          <h2 className="sub-headline-text">Don’t be shy</h2>
          <div className="p-4" />
          <div className="flex flex-col gap-8">
            <ContactInfoItem
              icon={<FiMail className="w-10 h-10 mr-2 stroke-1" />}
              title={"MAIL ME"}
              content={EMAIL_ADDRESS}
            />

            <ContactInfoItem
              icon={<FiPhone className="w-10 h-10 mr-2 stroke-1" />}
              title={"CALL ME"}
              content={MOBILE_NUMBER}
            />
            <ContactInfoItem
              icon={<FiNavigation className="w-10 h-10 mr-2 stroke-1" />}
              title={"ADDRESS POINT"}
              content={ADDRESS}
            />
          </div>
        </div>
        {/* FORM  */}
        <form className="flex flex-col gap-8 w-full" onSubmit={handeSubmit}>
          <InputTextField
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <InputTextField
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputTextArea
            value={message}
            placeholder="Message..."
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="w-24 btn" type="submit">
            {isLoading ? <MySpinner /> : "Submit"}
          </button>
          {status !== undefined && (
            <span>
              {status ? (
                <span className="text-green-400">
                  Your message has been successful send
                </span>
              ) : (
                <span className="text-red-500">
                  Unable to send your message, Please try again
                </span>
              )}
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
