import PropTypes from "prop-types";
import React, { useRef } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Responsive,
  Segment,
  GridColumn,
} from "semantic-ui-react";

import { PageContainer } from "../lib/pageContainer";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice.
 * Use CSS or styled components for such things.
 */

const HomepageLayout = () => {
  const codeRef = useRef(null);
  const musicRef = useRef(null);
  console.log(codeRef);
  return (
    <>
      <PageContainer refs={{ "/code": codeRef, "/music": musicRef }}>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that&quot;s right, you thought it was the stuff of dreams,
                  but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  size="large"
                  src="/images/wireframe/white-image.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "0em" }} vertical textAlign="center">
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Divider
                  as="h3"
                  className="header"
                  horizontal
                  style={{ margin: "3em 0em", textTransform: "uppercase" }}
                >
                  <span ref={codeRef}>Code Projects</span>
                </Divider>
                <Segment basic>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Breaking The Grid, Grabs Your Attention
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Instead of focusing on content creation and hard work, we
                    have learned how to master the art of doing nothing by
                    providing massive amounts of whitespace and generic content
                    that can seem massive, monolithic and worth your attention.
                  </p>
                  <Button as="a" size="large">
                    Read More
                  </Button>
                </Segment>
                <Segment basic>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Breaking The Grid, Grabs Your Attention
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Instead of focusing on content creation and hard work, we
                    have learned how to master the art of doing nothing by
                    providing massive amounts of whitespace and generic content
                    that can seem massive, monolithic and worth your attention.
                  </p>
                  <Button as="a" size="large">
                    Read More
                  </Button>
                </Segment>
              </Grid.Column>

              <Grid.Column width={8}>
                <Divider
                  as="h3"
                  className="header"
                  horizontal
                  style={{ margin: "3em 0em", textTransform: "uppercase" }}
                >
                  <span ref={musicRef}>Music Projects</span>
                </Divider>
                <Segment basic>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Breaking The Grid, Grabs Your Attention
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Instead of focusing on content creation and hard work, we
                    have learned how to master the art of doing nothing by
                    providing massive amounts of whitespace and generic content
                    that can seem massive, monolithic and worth your attention.
                  </p>
                  <Button as="a" size="large">
                    Read More
                  </Button>
                </Segment>
                <Segment basic>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Breaking The Grid, Grabs Your Attention
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Instead of focusing on content creation and hard work, we
                    have learned how to master the art of doing nothing by
                    providing massive amounts of whitespace and generic content
                    that can seem massive, monolithic and worth your attention.
                  </p>
                  <Button as="a" size="large">
                    Read More
                  </Button>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment inverted vertical style={{ padding: "5em 0em" }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </PageContainer>
    </>
  );
};

export default HomepageLayout;
