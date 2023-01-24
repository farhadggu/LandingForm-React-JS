import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/services";
import "./RegisterPhone.css";

export default function RegisterCode({
  data,
  handleChange,
  loading,
  setLoading,
  setActive,
  error,
  setToken
}) {

  const [code, setCode] = useState("")

  const handleChangeCode = (e) => {
    setCode(Number(e.target.value))
  }

  const handleCodeRegister = async (e) => {
    setLoading(true)
    e.preventDefault();
    // setActive((prev) => prev + 1);
    await axios.post(`${baseUrl}/api/v1/login/`, {phone: data.phone, token: code}, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((resp) => {
      setLoading(false)
      toast.success(resp.data.message)
      setToken(resp.data.data.token)
      setActive((prev) => prev + 1)
    }).catch((error) => {
      setLoading(false)
      toast.error(error.response.data.message)
    })
  };

  return (
    <Box className="phone-card">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography m={4} fontSize={26} fontWeight="600">
          کد اعتبار سنجی
        </Typography>
        <Typography mb={4} fontSize={20}>
          کد اعتبار سنجی ارسال شده را وارد کنید
        </Typography>
      </Box>
      <TextField
        required
        label="کد تایید"
        placeholder="کد تایید"
        type="number"
        name="code"
        value={code}
        onChange={handleChangeCode}
        className="input-phone"
        helperText={`${error.hasError ? error.error : ""}`}
      />
      <Box m={2} width="100%" display="flex" justifyContent="space-around">
        <Button
          onClick={handleCodeRegister}
          disabled={error.hasError || !data.phone || loading}
        >
          {loading ? "صبر کنید..." : "تایید"}
        </Button>
        <Button
          className="back-btn"
          onClick={() => setActive((prev) => prev - 1)}
        >
          بازگشت
        </Button>
      </Box>
    </Box>
  );
}
