import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"

const Layout = ({ children, ...props }) => {

  return (
    <Styled.root>
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  )
}

export default Layout