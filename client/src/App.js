import Image from "./components/layout/Image"
import Flex from "./components/layout/Flex"
import List from "./components/layout/List"
import ListItem from "./components/layout/ListItem"

function App() {
  return (
    <>
      <nav>
        <div className="max-w-container  mx-auto p-2.5">
          <Flex className="flex">
            <div className="w-3/12">
              <Image imgsrc="assets/logo.png" />
            </div>

            <div className="w-9/12">
              <List className="flex justify-end gap-x-10 font-dm text-sm font-bold">
                <ListItem itemname="Home" className="text-white" />
                <ListItem itemname="Shop" />
                <ListItem itemname="About" />
                <ListItem itemname="Contact" />
                <ListItem itemname="Service" />
              </List>
            </div>
          </Flex>
        </div>
      </nav>
    </>
  )
}

export default App
