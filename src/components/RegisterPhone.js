import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import "./RegisterPhone.css";

export default function RegisterPhone({
  data,
  handleChange,
  loading,
  setLoading,
  setActive,
  error,
}) {

  const handlePhoneRegister = async (e) => {
    e.preventDefault();
    setActive((prev) => prev + 1)
    toast.success('کد ارسالی را وارد نمایید');
    // setLoading(true);
  };

  return (
    <Box
      className="phone-card"
      component="form"
      onSubmit={(e) => handlePhoneRegister(e)}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography m={4} fontSize={26} fontWeight="600">
          ثبت نام
        </Typography>
        <Typography mb={4} fontSize={20}>
          شماره تلفن خود را وارد کنید
        </Typography>
      </Box>
      <TextField
        required
        label="شماره تماس"
        placeholder="شماره تماس"
        type="number"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        className="input-phone"
        helperText={`${error.hasError ? error.error : ""}`}
      />
      <Box m={2} width="100%" display="flex" justifyContent="space-evenly">
        <Button
          type="submit"
          disabled={error.hasError || !data.phone || loading}
        >
          {loading ? "صبر کنید..." : 'تایید'}
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
