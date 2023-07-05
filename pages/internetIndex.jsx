import { Divider } from "semantic-ui-react";
import { PageContainer } from "../lib/pageContainer";

export default function InternetIndex() {
  return (
    <PageContainer>
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
          <img src="/img/i3.png" style={{ height: "70vh", width: "auto" }} />
        </div>
      </div>
    </PageContainer>
  );
}
