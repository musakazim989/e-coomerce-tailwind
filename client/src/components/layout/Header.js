import React, { useState } from "react"
import Container from "./Container"
import Dropdown from "./Dropdown"
import Flex from "./Flex"
import { HiOutlineBars3BottomLeft } from "react-icons/hi2"
import List from "./List"
import ListItem from "./ListItem"

const Header = () => {
  const [show, setShow] = useState(false)

  let handleShow = () => {
    setShow(!show)
  }

  return (
    <div className="bg-[#F5F5F3]">
      <Container className="max-w-container mx-auto p-2.5">
        <Flex className="flex justify-between">
          <div>
            <Dropdown onClick={handleShow}>
              <p className="flex items-center gap-x-2.5 ">
                <HiOutlineBars3BottomLeft />
                Shop by Category
              </p>
              {show && (
                <List className="absolute">
                  <ListItem itemname="Home" />
                  <ListItem itemname="Home" />
                  <ListItem itemname="Home" />
                </List>
              )}
            </Dropdown>
          </div>
          <div>sdfgsd</div>
          <div>sdfgsd</div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header
