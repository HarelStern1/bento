import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField } from "../text-field/text-field";

export const ChooseCakeColor = () => {
  const { control } = useFormContext();

  return (
    <div>
      <TextField control={control} name="cakeColor" label="Choose cake color..." />
    </div>
  );
};
