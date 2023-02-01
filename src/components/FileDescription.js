import React, { useEffect, useRef, useState } from "react";
import { Box, Button, FormLabel, Grid, TextField } from "@mui/material";
import axios from "axios";
import "./ChechInformation.css";
import close from "../images/close.png";
import pdf from "../images/pdf.png"

export default function FileDescription({
  data,
  handleChange,
  setActive,
  setActiveStep,
  token,
  setData,
  images,
  setImages
}) {
  const inputRef = useRef();
  // const [base64Image, setBase64Image] = useState([])

  const fileToDataUri = (image) => {
    return new Promise((res) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        res({
          image: reader.result,
          base64: reader.result.split(',')[1]
        });
      });
      reader.readAsDataURL(image);
    });
  };

  const uploadImage = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImagesPromises = [];
      for (let i = 0; i < e.target.files.length; i++) {
        newImagesPromises.push(fileToDataUri(e.target.files[i]));
      }
      const newImages = await Promise.all(newImagesPromises);
      setImages([...images, ...newImages]);
    }
    e.target.value = "";
  };

  console.log(data);

  const removeImage = (id) => {
    setImages(images.filter((item, index) => index !== id));
  };

  return (
    <Box
      mt={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="20px"
    >
      <Button onClick={() => inputRef.current.click()}>انتخاب فایل</Button>
      <input
        hidden
        ref={inputRef}
        type="file"
        multiple
        accept="application/pdf, image/png, image/jpeg"
        onChange={uploadImage}
      />
      <Box
        display="flex"
        alignItems="center"
        gap="15px"
        justifyContent="flex-start"
        width="100%"
        p="0 20px"
      >
        {images.length > 0
          ? images.map((imageObj, i) => {
            if(imageObj.image.includes('application')) {
              return (
                <Box
                  key={i}
                  boxShadow="10px 10px 100px rgba(0, 0, 0, .4)"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  position='relative'
                  padding="15px"
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={pdf}
                    alt=""
                  />
                  <Box display="flex" flexDirection="column">
                    <img
                      src={close}
                      onClick={() => removeImage(i)}
                      style={{
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "0",
                        right: "0"
                      }}
                      alt="delete"
                    />
                  </Box>
                </Box>
              );
            } else {
              return (
                <Box
                  key={i}
                  boxShadow="10px 10px 100px rgba(0, 0, 0, .4)"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  position='relative'
                  padding="15px"
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={imageObj.image}
                    alt=""
                  />
                  <Box display="flex" flexDirection="column">
                    <img
                      src={close}
                      onClick={() => removeImage(i)}
                      style={{
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "0",
                        right: "0"
                      }}
                      alt="delete"
                    />
                  </Box>
                </Box>
              );
            }
            })
          : null}
      </Box>
      <Grid item md={12} sm={12} xs={12} p="0 10px">
        <FormLabel id="demo-row-radio-buttons-group-label">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ:
        </FormLabel>
        <TextField
          multiline
          rows={5}
          placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          type="number"
          name="description"
          value={data.description}
          onChange={handleChange}
          className="input-phone"
          sx={{ width: "95%" }}
        />
      </Grid>

      <Button
        onClick={() => {
          setActive((prev) => prev + 1);
          setActiveStep((prev) => prev + 1);
        }}
      >
        تایید
      </Button>
    </Box>
  );
}
