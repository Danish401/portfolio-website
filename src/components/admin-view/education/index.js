"use client";

import { FormControl, TextField, Box, Button } from "@mui/material";

const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];

export default function AdminEducationView({
  formData,
  setFormData,
  handleSaveData,
  data,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 border p-4 border-green-600"
                >
                  <p>{item.degree}</p>
                  <p>{item.college}</p>
                  <p>{item.year}</p>
                </div>
              ))
            : null}
        </div>
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
          onClick={() => handleSaveData("education")}
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
