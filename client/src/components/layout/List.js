import React, { Children } from "react"

const List = ({ children, className }) => {
  return <ul className={className}>{children}</ul>
}

export default List
