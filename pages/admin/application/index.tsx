import { Box } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../components/Admin/app/hooks";
import SubNav from "../../../components/Admin/Jobs/subcomponents/SubNav";
import SettingsTab from "../../../components/Admin/Settings/SettingsTab";

const Settings = () => {
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;
  return (
    <Box
      pl={{ base: 0, md: sidebarOpen ? "320px" : "115px" }}
      backgroundColor="gray.100"
      fontFamily="sans-serif"
      w="100%"
      h="100vh"
    >
      <SubNav />
      <SettingsTab />
    </Box>
  );
};

export default Settings;
