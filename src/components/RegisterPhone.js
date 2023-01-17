import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import login from "../images/login.svg";
import "./RegisterPhone.css"

export default function RegisterPhone({
  data,
  handleChange,
  loading,
  setLoading,
  setActive,
  error
}) {
  const handlePhoneRegister = async (e) => {
    e.preventDefault();
    setActive((prev) => prev + 1)
    setLoading(true);
    await axios
      .post(
        "",
        { phone: data.phone },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        setLoading(false);
        toast.success(resp.data.message);
        setActive((prev) => prev + 1);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };

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
          <Typography m={4} fontSize={26} fontWeight="600">ثبت نام</Typography>
          <Typography mb={4} fontSize={20}>شماره تلفن خود را وارد کنید</Typography>
        </Box>
        <TextField 
          required
          variant="standard"
          label="شماره تماس"
          placeholder="شماره تماس"
          type="number"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          className='input-phone'          
          helperText={`${error.hasError ? error.error : '' }`}
        />
        <Box m={4} width="100%" display="flex" justifyContent='space-around'>
          <Button onClick={handlePhoneRegister}>تایید</Button>
          <Button className="back-btn" onClick={() => setActive((prev) => prev - 1)}>بازگشت</Button>
        </Box>
      </Box>
      <img src={login} alt="login" />
    </Box>
  );
}
