import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NadeInfoText: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <Box>
      <Text fontSize=".8rem" fontWeight="semibold">
        {title}
      </Text>
      <Text fontWeight="light">{content}</Text>
    </Box>
  );
};

export default NadeInfoText;
