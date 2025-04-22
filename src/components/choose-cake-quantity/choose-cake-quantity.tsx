import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField } from "../text-field/text-field";

export const ChooseCakeQuantity = () => {
  const { control } = useFormContext();

  return (
    <div>
      <TextField control={control} name="cakeQuantity" label="How may cakes?..." />
    </div>
  );
};
