import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "./RegisterPhone.css";

export default function RegisterCode({
  data,
  loading,
  setLoading,
  setActive,
  error,
  setToken,
  setActiveStep
}) {

  const [code, setCode] = useState("")

  const handleChangeCode = (e) => {
    setCode(Number(e.target.value))
  }

  const handleCodeRegister = async (e) => {
    // setLoading(true)
    e.preventDefault();
    setActive((prev) => prev + 1);
    setActiveStep((prev) => prev + 1)
    toast.success("شما با موفقیت وارد شدید")
  };

  return (
    <Box className="phone-card">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="0 10px"
      >
        <Typography m={4} fontSize={26} fontWeight="600">
          کد اعتبار سنجی
        </Typography>
        <Typography mb={4} fontSize={20}>
          کد ارسال شده را وارد کنید
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
