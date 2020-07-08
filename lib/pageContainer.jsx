import { useState } from "react";
import {
  Container,
  Menu,
  Sidebar,
  Visibility,
  Responsive,
  Segment,
  Button,
  Icon,
} from "semantic-ui-react";
import Link from "next/link";
import PropTypes from "prop-types";
import { HomepageHeading } from "./homepageHeading";

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const MENU_ITEMS = [
  { to: "#top", label: "Home" },
  { to: "#code", label: "Code" },
  { to: "#music", label: "Music" },
];

const DesktopContainer = ({ children }) => {
  const [state, setState] = useState({});

  const hideFixedMenu = () => setState({ fixed: false });
  const showFixedMenu = () => setState({ fixed: true });

  const { fixed } = state;

  return (
    <div>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 70, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              {MENU_ITEMS.map(({ to, label }) => (
                <Menu.Item as="a" href={`${to}`}>
                  {label}
                </Menu.Item>
              ))}
            </Container>
          </Menu>
          {/* <HomepageHeading /> */}
        </Segment>
      </Visibility>

      {children}
    </div>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export const PageContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
