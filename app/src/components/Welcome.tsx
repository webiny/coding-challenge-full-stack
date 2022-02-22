import React from "react";
import Container from "@mui/material/Container";
import GlobalStyles from "@mui/material/GlobalStyles";
import Markdown from "markdown-to-jsx";
import README from "README.md";

export const Welcome = () => {
  return (
    <Container fixed style={{ marginBottom: 20 }}>
      <GlobalStyles
        styles={{
          code: { backgroundColor: "#00ccb0", color: "white", padding: "2px 5px", borderRadius: 5 },
        }}
      />
      <Markdown options={{ }}>{README}</Markdown>
    </Container>
  );
};
