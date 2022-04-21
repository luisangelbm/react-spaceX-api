import { HiCalendar } from "react-icons/hi";
import { Box, Text,Flex,Spacer,Tag, Button, Icon } from '@chakra-ui/react'


import dayjs from "dayjs";
import "dayjs/locale/es"

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2x1">
          Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex aling="center">
        <Icon as={HiCalendar} color="gray.500"/>
        <Text fontSize="sm" ml={1}>
          {/* {launch.launch_date_local.split("T")[0]} */}
          {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
        </Text>
      </Flex>
      <Button my={2} colorScheme="purple">
          More Details
      </Button>
    </Box>
  );
}
