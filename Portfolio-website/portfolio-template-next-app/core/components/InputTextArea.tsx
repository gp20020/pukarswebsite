import { Label, Textarea } from "flowbite-react";
import React from "react";

type Props = {
  label?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  placeholder: string;
  rows?: number;
  cols?: number;
  required?: boolean;
};

export default function InputTextArea({
  label = "",
  onChange,
  placeholder,
  value,
  rows = 5,
  cols,
  required = true,
}: Props) {
  return (
    <div>
      {label != "" && (
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
      )}

      <textarea
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="border-2 border-primary focus:border-primary p-2 w-full"
        onChange={onChange}
        value={value}
        required={required}
      />
    </div>
  );
}
