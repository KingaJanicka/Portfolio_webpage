import { Container, Divider, Header, List, Segment } from "semantic-ui-react";
import { PageContainer } from "../lib/pageContainer";
import ContactForm from "./contact";
import styles from "../lib/styles.module.css";

export default function InternetIndex() {
  return (
    <PageContainer link>
      <div style={{ padding: "2em" }}>
        <Divider
          as="h3"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          Internet Index
        </Divider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: " center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: "1em",
            }}
          >
            <img src="/img/i3.png" style={{ height: "70vh" }} />
            <img src="/img/i3.png" style={{ height: "70vh" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: "1em",
            }}
          >
            <img src="/img/i3.png" style={{ height: "70vh", width: "auto" }} />
          </div>
        </div>
      </div>{" "}
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
                  <a href="https://github.com/KingaJanicka/">@KingaJanicka</a>
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
  );
}
