import Image from "./components/layout/Image"
import Flex from "./components/layout/Flex"
import List from "./components/layout/List"
import ListItem from "./components/layout/ListItem"
import { HiMenu } from "react-icons/hi"
import { useEffect, useState } from "react"

function App() {
  let [show, setShow] = useState(true)

  useEffect(() => {
    let scrollWidth = (e) => {
      // console.log(e)
      if (window.innerWidth < 1024) {
        setShow(false)
      } else {
        setShow(true)
      }
    }

    window.addEventListener("resize", scrollWidth)
  }, [])

  return (
    <>
      <nav>
        <div className="max-w-container  mx-auto p-2.5">
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
        </div>
      </nav>
    </>
  )
}

export default App
