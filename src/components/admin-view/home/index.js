"use client";

import { FormControl, TextField, Box, Button } from "@mui/material";

const controls = [
  {
    name: "heading",
    placeholder: "enter heading text",
    type: "text",
    label: "enter heading text",
  },
  {
    name: "summary",
    placeholder: "enter career summary",
    type: "text",
    label: "enter career summary",
  },
];

export default function AdminHomeView({
  formData,
  setFormData,
  handleSaveData,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {controls.map((control) => (
          <Box key={control.name} mb={2}>
            <FormControl fullWidth variant="outlined">
              <TextField
                name={control.name}
                placeholder={control.placeholder}
                type={control.type}
                label={control.label}
                value={formData[control.name]}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>
          </Box>
        ))}
        <Button
          onClick={() => handleSaveData("home")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
          variant="contained"
          color="primary"
        >
          Add Info
        </Button>
      </div>
    </div>
  );
}
