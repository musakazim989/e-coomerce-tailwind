import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import List from "./List";
import ListItem from "./ListItem";

const Header = () => {
  const [show, setShow] = useState(false);

  let ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(ref.current)
      console.log(e.target);
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#F5F5F3]">
      <Container className="mx-auto max-w-container p-2.5">
        <Flex className="flex justify-between">
          <div>
            <Dropdown dropref={ref} className="relative">
              <p className="flex items-center gap-x-2.5">
                <HiOutlineBars3BottomLeft />
                Shop by Category
              </p>
              {show && (
                <List className="absolute top-8 w-[263px] bg-primary text-[#979797]">
                  <ListItem
                    className="broder-solid border border-[#2D2D2D]  py-4 px-5 duration-300 ease-in hover:px-9 hover:text-white "
                    itemname="Accesories"
                  />
                  <ListItem
                    className="broder-solid border border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-9 hover:text-white"
                    itemname="Furniture"
                  />
                  <ListItem
                    className="broder-solid border border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-9 hover:text-white"
                    itemname="Clothes"
                  />
                  <ListItem
                    className="broder-solid border border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-9 hover:text-white"
                    itemname="Bags"
                  />
                  <ListItem
                    className="broder-solid border border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-9 hover:text-white"
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div>sdfgsd</div>
          <div>sdfgsd</div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
