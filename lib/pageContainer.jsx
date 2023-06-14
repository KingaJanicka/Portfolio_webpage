import { useState, useRef } from "react";
import {
  Container,
  Menu,
  Visibility,
  Segment,
  Button,
  Icon,
} from "semantic-ui-react";
import PropTypes from "prop-types";

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

const DesktopContainer = ({ pageRefs, children }) => {
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
        <Segment inverted textAlign="center" vertical>
          <Menu fixed="top" inverted size="large">
            <Container style={{ padding: "0em 2.8em", width: "inherit" }}>
              <Menu.Item
                onClick={() => {
                  pageRefs.home.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  pageRefs.code.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Code
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  pageRefs.music.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Music
              </Menu.Item>
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
  pageRefs: PropTypes.node,
};

export const PageContainer = ({ children, pageRefs }) => (
  <div>
    <DesktopContainer pageRefs={pageRefs}>{children}</DesktopContainer>
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  pageRefs: PropTypes.node.isRequired,
};
