import PropTypes from "prop-types";
import React, { useRef } from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Image,
  List,
  Segment,
  Modal,
} from "semantic-ui-react";

import styles from "../lib/styles.module.css";
import { PageContainer } from "../lib/pageContainer";
import ContactForm from "./contact";
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice.
 * Use CSS or styled components for such things.
 */

const HomepageLayout = () => {
  const homeRef = useRef(null);
  const codeRef = useRef(null);
  const musicRef = useRef(null);

  return (
    <>
      <div ref={homeRef}>
        <PageContainer
          id="top"
          pageRefs={{ home: homeRef, code: codeRef, music: musicRef }}
        >
          <Segment style={{ padding: "8em 0em" }} vertical>
            <div>
              {/* Grid Container */}
              <div className={styles.row}>
                {/* Grid Row */}
                <div className={styles.column}>
                  {/* Grid Column */}
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Kinga Janicka
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>Fullstack Web Developer</p>

                  <p style={{ fontSize: "1.33em" }}>
                    Hi my name is Kinga, I live in central London.
                  </p>
                  <p style={{ fontSize: "1.33em" }}>
                    {" "}
                    I've been been teaching myself how to write HTML, CSS and
                    JavaScript for about a year now.
                  </p>
                  <p style={{ fontSize: "1.45em" }}>
                    I specialize in React, JAMstack and NextJS.
                  </p>

                  <Button size="huge" as="a" href="#projects">
                    My projects
                  </Button>
                </div>
                <div className={styles.column}>
                  {/* Grid Column */}
                  <Image bordered rounded size="large" src="/face.jpg" />
                </div>
              </div>
            </div>
          </Segment>

          <Segment style={{ padding: "0em" }} vertical textAlign="center">
            <div id="projects">
              {/* grid */}
              <div className={styles.row}>
                {/* grid row */}
                <div ref={codeRef} className={styles.column}>
                  {/* grid column */}
                  <Divider
                    id="code"
                    as="h3"
                    className="header"
                    horizontal
                    style={{ margin: "3em 0em", textTransform: "uppercase" }}
                  >
                    Code Projects
                  </Divider>
                  <Segment basic>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      Chonky.Cat
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      A near infinite source of cat pictures. Takes pictures
                      from reddit and aggregates them for a cleaner, distraction
                      free experience.
                    </p>
                    <Button
                      as="a"
                      size="large"
                      onClick={() =>
                        window.open(
                          "https://github.com/KingaJanicka/chonky.cat",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </Button>
                    <Button
                      as="a"
                      size="large"
                      onClick={() =>
                        window.open("https://chonky.cat", "_blank")}
                    >
                      Visit
                    </Button>
                  </Segment>
                  <Segment basic>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      Snake game
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      A basic Snake game written in C++. Failure states are
                      biting your own tail and running into a wall. Features a
                      eating mechaninc where after eating fruit, your snake will
                      get longer only when it passes through all of the snake's
                      body.
                    </p>
                    <Button
                      as="a"
                      size="large"
                      onClick={() =>
                        window.open(
                          "https://github.com/KingaJanicka/Snake",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </Button>
                  </Segment>
                  <Segment basic>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      Bouncer Bot
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      Currently in progress. A Zoom bot that notifies room host
                      when a person not from invite list is in the meeting. The
                      invite list is a Google Sheets document. Intended to
                      improve security and safety of Zoom events.
                    </p>
                  </Segment>
                </div>

                <div ref={musicRef} className={styles.column}>
                  {/* grid column */}
                  <Divider
                    id="music"
                    as="h3"
                    className="header"
                    horizontal
                    style={{ margin: "3em 0em", textTransform: "uppercase" }}
                  >
                    Music Projects
                  </Divider>
                  <Segment basic>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      DIY Serge Modular
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      Collaborating with my brother. DIY version of a Serge
                      Modular synthesizer using Elby PCBs, custom panels
                      inspired by old Paperface Serge and Make Noise Black and
                      Gold Shared System. To be sequenced and processed with
                      Ableton with the help of Expert Sleepers ES-9 Audio
                      Interface. Built with performing live in mind.
                    </p>
                    <Button
                      as="a"
                      size="large"
                      onClick={() =>
                        window.open(
                          "https://github.com/KingaJanicka/DIY-Serge",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </Button>
                  </Segment>
                </div>
              </div>
            </div>
          </Segment>

          <Segment inverted vertical style={{ padding: "5em 0em" }}>
            <Container>
              <div>
                {/* grid */}
                <div className={styles.row}>
                  {/* grid row */}
                  <div className={styles.column}>
                    {/* grid column */}
                    <Header inverted as="h4" content="About" />
                    <List link inverted>
                      <List.Item as="a">Github</List.Item>
                      <List.Item as="a">Chonky.Cat</List.Item>
                    </List>
                  </div>
                  <div className={styles.column}>
                    {/* grid column */}
                    {/* <Header inverted as="h4" content="Services" /> */}
                    <List link inverted>
                      <List.Item as="a">
                        {" "}
                        <ContactForm />
                      </List.Item>
                    </List>
                  </div>
                  <div className={styles.column}>
                    {/* grid column */}
                    <Header as="h4" inverted>
                      <a href="https://github.com/KingaJanicka/">
                        @KingaJanicka
                      </a>
                    </Header>
                    <p>
                      &copy; {new Date().getFullYear()}
                      {"  "} Kinga Janicka. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </Segment>
        </PageContainer>
      </div>
    </>
  );
};

export default HomepageLayout;
