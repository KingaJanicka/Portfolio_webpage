import { Divider } from "semantic-ui-react";
import { PageContainer } from "../lib/pageContainer";

export default function Ukef() {
  return (
    <PageContainer>
      <div style={{ padding: "2em" }}>
        <Divider
          as="h3"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          UKEF
        </Divider>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img src="/img/ukef1.png" style={{ width: "80vh" }} />
          <img src="/img/ukef2.png" style={{ width: "80vh" }} />
        </div>
      </div>
    </PageContainer>
  );
}
