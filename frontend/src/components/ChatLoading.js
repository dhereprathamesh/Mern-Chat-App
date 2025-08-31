import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";

const ChatLoading = ({ count = 12 }) => {
  return (
    <Stack spacing={3}>
      {[...Array(count)].map((_, i) => (
        <Skeleton
          key={i}
          height="45px"
          borderRadius="md"
          startColor="gray.200"
          endColor="gray.400"
        />
      ))}
    </Stack>
  );
};

export default ChatLoading;
