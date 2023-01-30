import React, { useEffect, useRef, useState } from "react";
import { baseUrl } from "../utils/services";
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

  // useEffect(() => {
  //   images.map((item) => {
  //     return (axios.post('http://192.168.100.19:8001/api/v1/upload', {file: item.base64}, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json",
  //         "Authorization": `Bearer 1|uxioJxwyDtO84E6k2E3pKuzdZTEwVZN7xUV5ZlfN`
  //       }
  //     }).then((resp) => {
  //       console.log(resp)
  //       setData({...data, file: {...data.file, ...resp.data.data.file_path}})
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  //   )})
  // }, [images])

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file)
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     }
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     }
  //   })
  // }

  // const handleFileRead = async (event) => {
  //   const file = event.target.files
  //   Promise.all(Array.from(file).map((item) => {
  //     const base64 = convertBase64(item)
  //     setFile({...file, file:base64})
  //   }))

  // await axios.post(`${baseUrl}/api/v1/upload`, {file:base64}, {
  //   headers: {
  //     'Authorization': `Bearer ${token}`,
  //     'Content-Type': "application/json",
  //     'Accept': "application/json"
  //   }
  // }).then((resp) => {
  //   console.log(resp)
  // }).catch((error) => {
  //   console.log(error)
  // })
  // console.log(base64)
  // }
  console.log(images);
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
          توضیحات در مورد اینکه چرا خود را واجد شرایط استفاده از این کمک خیریه
          می دانید:
        </FormLabel>
        <TextField
          multiline
          rows={5}
          placeholder="توضیحات در مورد اینکه چرا خود را واجد شرایط استفاده از این کمک خیریه می دانید"
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
