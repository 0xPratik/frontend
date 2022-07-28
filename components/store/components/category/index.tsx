import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { Methods, useAxios } from "../../../../hooks/useAxios";
import { Category } from "@prisma/client";

// const categories = [
//   "All",
//   "One",
//   "Two",
//   "Three",
//   "Four",
//   "Five",
//   "Six",
//   "Seven",
//   "Eight",
//   "Nine",
//   "Ten",
// ];

function CategoryTabs() {
  const [categories, setCategories] = useState<Category[]>();
  const { error, loading, response } = useAxios({
    method: Methods.GET,
    body: null,
    headers: null,
    url: "category",
  });
  // console.log("Category RES", response);

  useEffect(() => {
    if (response !== null) {
      setCategories(response);
      console.log("Category", categories);
    }
  }, [response, categories]);

  return (
    <Tabs variant="unstyled" color="#8B8B8B">
      <TabList>
        {categories !== undefined &&
          categories.map((category, i) => {
            return (
              <Tab
                bg="#313131"
                borderRadius={"full"}
                px={4}
                py={2}
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
                {category.name}
              </Tab>
            );
          })}
      </TabList>
    </Tabs>
  );
}

export default CategoryTabs;
