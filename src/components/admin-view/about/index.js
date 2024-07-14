"use client";

import { FormControl, TextField, Box, Button } from "@mui/material";

const controls = [
  {
    name: "aboutMe",
    placeholder: "About me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noOfProjects",
    placeholder: "No of projects",
    type: "text",
    label: "Enter no of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({
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
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          onClick={() => handleSaveData("about")}
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
