import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

const categories = [
  "All",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

function CategoryTabs() {
  return (
    <Tabs variant="unstyled" color="#8B8B8B">
      <TabList>
        {categories.map((category, i) => {
          return (
            <Tab
              bg="#313131"
              borderRadius={"3xl"}
              mr={4}
              border="1px"
              borderColor={"#313131"}
              key={i}
              _selected={{
                color: "#D6096E",
                borderColor: "#D6096E",
                bg: "#FFF4F9",
              }}
            >
              {category}
            </Tab>
          );
        })}
      </TabList>
    </Tabs>
  );
}

export default CategoryTabs;
