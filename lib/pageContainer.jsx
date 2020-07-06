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
  { to: "/", label: "Home" },
  { to: "/code", label: "Code" },
  { to: "/music", label: "Music" },
];
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const DesktopContainer = ({ children, refs }) => {
  const [state, setState] = useState({});

  const hideFixedMenu = () => setState({ fixed: false });
  const showFixedMenu = () => setState({ fixed: true });

  const { fixed } = state;

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
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
                <Menu.Item
                  as="a"
                  onClick={() => {
                    if (to === "/") window.scrollTo(0, 0);
                    else refs[to].current.scrollIntoView();
                  }}
                >
                  {label}
                </Menu.Item>
              ))}
              <Menu.Item position="right">
                {/* <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button> */}
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const MobileContainer = ({ children, refs }) => {
  const [state, setState] = useState({});

  const handleSidebarHide = () => setState({ sidebarOpened: false });

  const handleToggle = () => setState({ sidebarOpened: true });

  const { sidebarOpened } = state;

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        {MENU_ITEMS.map(({ to, label }) => (
          <Menu.Item
            as="a"
            onClick={() => {
              refs[to].current.scrollIntoView();
            }}
          >
            {label}
          </Menu.Item>
        ))}
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 350, padding: "1em 0em" }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted>
                  Log in
                </Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
          <HomepageHeading mobile />
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const PageContainer = ({ children, refs }) => (
  <div>
    <DesktopContainer refs={refs}>{children}</DesktopContainer>
    <MobileContainer refs={refs}>{children}</MobileContainer>
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
