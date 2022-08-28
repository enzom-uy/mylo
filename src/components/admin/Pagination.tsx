import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const Pagination: React.FC<{
  elementsPerPage: number;
  totalElements: number;
  currentPage?: number;
  paginate: (pageNumber: number) => void;
}> = ({ elementsPerPage, totalElements, paginate, currentPage }) => {
  const elementNumber = [];

  for (
    let index = 1;
    index <= Math.ceil(totalElements / elementsPerPage);
    index++
  ) {
    elementNumber.push(index);
  }

  return (
    <Flex gap={2}>
      {elementNumber.map((number) => (
        <Button
          onClick={() => paginate(number)}
          key={number}
          rounded="full"
          bgColor={currentPage === number ? "blue-gray-transparent" : undefined}
          _hover={currentPage === number ? {} : undefined}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {number}
        </Button>
      ))}
    </Flex>
  );
};

export default Pagination;
