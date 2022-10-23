import { Input } from "@chakra-ui/react";
import React from "react";

const StandardInput = ({ title, w, handleChange, value, name }) => {
  return (
    <Input
      value={value}
      onChange={handleChange}
      rounded="full"
      name={name}
      w={w ? w : "100%"}
      size="sm"
      borderColor="gray.400"
      _placeholder={{ fontSize: "12px", px: "2", color: "gray.400" }}
      placeholder={title}
    />
  );
};

export default StandardInput;
