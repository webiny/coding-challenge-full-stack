import React from "react";
import Container from "@mui/material/Container";
import Markdown from "markdown-to-jsx";
import README from "README.md";

export const Welcome = () => {
  return (
    <Container fixed>
      <Markdown>{README}</Markdown>
    </Container>
  );
};
