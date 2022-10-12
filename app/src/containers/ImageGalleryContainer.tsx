import React from "react";
import Container from "@mui/material/Container";
import UploadImageForm from "../components/UploadImageForm/UploadImageForm";

const ImageGalleryContainer = () => {
  return (
    <Container>
      <UploadImageForm />

      <div>Image gallery section</div>
    </Container>
  );
};

export default ImageGalleryContainer;
