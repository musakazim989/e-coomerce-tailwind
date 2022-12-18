import React, { useState, useEffect } from "react"
import Image from "./Image"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import { HiMenu } from "react-icons/hi"
import Container from "./Container"

const Navbar = () => {
  let [show, setShow] = useState(true)

  useEffect(() => {
    let scrollWidth = () => {
      // console.log(e)
      if (window.innerWidth < 1024) {
        setShow(false)
      } else {
        setShow(true)
      }
    }
    scrollWidth()
    window.addEventListener("resize", scrollWidth)
  }, [])
  return (
    <nav>
      <Container>
        <Flex className="lg:flex">
          <div className="lg:w-3/12">
            <Image imgsrc="assets/logo.png" />
          </div>

          <div className="w-9/12 ">
            <HiMenu
              onClick={() => setShow(!show)}
              className="lg:hidden block ml-auto text-2xl absolute top-2.5 right-2.5"
            />

            {show && (
              <List className=" lg:flex lg:justify-end lg:gap-x-10 font-dm text-sm font-bold mt-5 lg:mt-0 ">
                <ListItem itemname="Home" className="my-2.5 lg:my-0" />
                <ListItem itemname="Shop" className="my-2.5 lg:my-0" />
                <ListItem itemname="About" className="my-2.5 lg:my-0" />
                <ListItem itemname="Contact" className="my-2.5 lg:my-0" />
                <ListItem itemname="Service" className="my-2.5 lg:my-0" />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
