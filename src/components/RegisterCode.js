import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import login from "../images/login.svg";
import "./RegisterPhone.css"


export default function RegisterCode({
  data,
  handleChange,
  loading,
  setLoading,
  setActive,
  error
}) {

  const handleCodeRegister = async (e) => {
    e.preventDefault()
    await axios.post('', {phone: data.phone, token: data.code}, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((resp) => {
      console.log(resp)
    }).catch((error) => {
      console.log(error.response.data.message)
    })
  }

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="auto"
      height="80vh"
      className="phone-box"
    >
      <Box className="phone-card">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography m={4} fontSize={26} fontWeight="600">کد اعتبار سنجی</Typography>
          <Typography mb={4} fontSize={20}>کد اعتبار سنجی ارسال شده را وارد کنید</Typography>
        </Box>
        <TextField 
          required
          variant="standard"
          label="کد تایید"
          placeholder="کد تایید"
          type="number"
          name="code"
          value={data.code}
          onChange={handleChange}
          className='input-phone'        
          helperText={`${error.hasError ? error.error : '' }`}
        />
        <Box m={4} width="100%" display="flex" justifyContent='space-around'>
          <Button onClick={handleCodeRegister}>تایید</Button>
          <Button className="back-btn" onClick={() => setActive((prev) => prev - 1)}>بازگشت</Button>
        </Box>
      </Box>
      <img src={login} alt="login" />
    </Box>
  )
}
