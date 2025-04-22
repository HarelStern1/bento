import React from "react";
import { Control, FieldValues, useController, useFormContext } from "react-hook-form";

type ControlledInputProps = {
  control: Control<FieldValues, any, FieldValues>;
  name: string;
  label: string;
  type?: string;
};

export const TextField: React.FC<ControlledInputProps> = ({
  control,
  name,
  label,
  type = "text",
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", marginBottom: 4 }}>{label}</label>
      <input
        {...field}
        type={type}
        style={{
          padding: "0.5rem",
          border: `1px solid ${error ? "red" : "#ccc"}`,
          borderRadius: 4,
        }}
      />
      {error && <p style={{ color: "red", marginTop: 4 }}>{error.message}</p>}
    </div>
  );
};
