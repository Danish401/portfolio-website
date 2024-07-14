"use client";

import { FormControl, TextField, Box, Button } from "@mui/material";

const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];

export default function AdminExperienceView({
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
                  <p>{item.position}</p>
                  <p>{item.company}</p>
                  <p>{item.duration}</p>
                  <p>{item.location}</p>
                  <p>{item.jobprofile}</p>
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
                value={formData[control.name] || ""}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>
          </Box>
        ))}
        <Button
          onClick={handleSaveData}
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
