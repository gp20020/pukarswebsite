import { Label } from "flowbite-react";
import React from "react";

type Props = {
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
};

export default function InputTextField({
  type = "text",
  label = "",
  onChange,
  placeholder,
  value,
  required = true,
}: Props) {
  return (
    <div>
      {label != "" && (
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
      )}

      <input
        placeholder={placeholder}
        className="border-2 border-primary focus:border-primary p-2 w-full"
        onChange={onChange}
        value={value}
        type={type}
        required={required}
      />
    </div>
  );
}
