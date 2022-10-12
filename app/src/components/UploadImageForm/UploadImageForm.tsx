import React, { useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MyContainer } from "./UploadImageForm.styles";
import Box from "@mui/material/Box";
import defaultUploadImg from "../../images/default-upload-img.png";

const mainContainerStyles = {
  borderBottom: 1,
  borderColor: "#E1E1E1",
  margin: "25px 0",
  display: "flex",
  flexDirection: "row",
  padding: "20px 0",
};

/** Thumbnail image styles */
const thumbnailImgBoxStyles = {
  borderRadius: 2,
  border: 1,
  borderColor: "#E1E1E1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 110,
  height: 110,
};

const thumbnailImgStyles = {
  width: 100,
  height: 100,
  borderRadius: 5,
  objectFit: "cover",
};

const UploadImageForm = () => {
  const [imageData, setImageData] = useState(null);

  const handleOnImageSelect = (e) => {
    setImageData(e.target.files[0]);
  };

  const handleOnCancelClick = () => {
    setImageData(null);
  };

  const applyThumbnailImage = () => {
    return imageData ? URL.createObjectURL(imageData) : defaultUploadImg;
  };

  return (
    <Container sx={mainContainerStyles}>
      <Stack spacing={2} direction="row">
        <Box sx={thumbnailImgBoxStyles}>
          <img
            style={thumbnailImgStyles}
            alt="not fount"
            width={100}
            height={100}
            src={applyThumbnailImage()}
          />
        </Box>
        <Box>
          <Typography variant="h5">Upload image</Typography>
          <ul>
            <li>100x100 or higher recommended. Max 5MB</li>
            <li>Supported image files: png, jpg</li>
          </ul>
          <Stack spacing={2} direction="row">
            {!imageData && (
              <Button variant="contained" component="label">
                Select
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleOnImageSelect(e)}
                />
              </Button>
            )}
            {imageData && (
              <>
                <Button variant="contained" component="label">
                  Upload
                </Button>
                <Button component="label" onClick={() => handleOnCancelClick()}>
                  Cancel
                </Button>
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default UploadImageForm;
