import { Divider } from "semantic-ui-react";
import { PageContainer } from "../lib/pageContainer";

export default function Fcb() {
  return (
    <PageContainer link>
      <div style={{ padding: "2em" }}>
        <Divider
          as="h3"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          Human Threads
        </Divider>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, auto)",
            gridGap: "1em",
          }}
        >
          <img src="/img/human1.png" style={{ width: "30vw" }} />
          <img src="/img/human2.png" style={{ width: "30vw" }} />
          <img src="/img/human6.png" style={{ width: "30vw" }} />
          <img src="/img/human7.png" style={{ width: "30vw" }} />
          <img src="/img/human9.png" style={{ width: "30vw" }} />
        </div>
      </div>
    </PageContainer>
  );
}
