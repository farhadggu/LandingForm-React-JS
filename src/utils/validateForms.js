export const validateInput = ({name, value}) => {
    let hasError = false,
      error = "";
    switch (name) {
      case "first_name":
        if (value.trim() === "") {
          hasError = true;
          error = "نام خود را وارد کنید";
        } else if (!/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$/.test(value)) {
          hasError = true;
          error = "فقط از حروف فارسی استفاده کنید";
        } else {
          hasError = false;
          error = "";
        }
        break;
  
      case "last_name":
        if (value.trim() === "") {
          hasError = true;
          error = "نام خانوادگی خود را وارد کنید";
        } else if (!/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$/.test(value)) {
          hasError = true;
          error = "فقط از حروف فارسی استفاده کنید";
        } else {
          hasError = false;
          error = "";
        }
        break;
  
      case "national_code":
        if (value.trim() === "") {
          hasError = true;
          error = "کد ملی خود را وارد کنید";
        } else if (value.length < 10) {
          hasError = true;
          error = "تعداد ارقام کمتر از 10 میباشد";
        } else {
          let code = 0
          var codee = parseInt(code)
          for(let i = 0; i < value.length; i++){
            codee = value[i] * (value.length - i);
            code += codee;
          }
          let x = code % 11;
          console.log(x)
          if(x === 0) {
            hasError = false;
            error = "";
          } else {
            hasError = true;
            error = "کد ملی نامعتبر است!";
          }
          code = 0
        }
        break;
  
      case "mobile":
        if (value.trim() === "") {
          hasError = true;
          error = "شماره تلفن وارد کنید";
        } else if (!/^(\+98|0098|98|0)?9\d{9}$/.test(value)) {
          hasError = true;
          error = "فرمت شماره تلفن وارد شده نا معتبر می باشد";
        } else {
          hasError = false;
          error = "";
        }
        break;
  
      case "email":
        if (value.trim() === "") {
          hasError = true;
          error = "آدرس ایمیل خود را وارد کنید";
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
          hasError = true;
          error = "فرمت ایمیل وارد شده نادرست است!";
        } else {
          hasError = false;
          error = "";
        }
        break;
  
      case "username":
        if (value.trim() === "") {
          hasError = true;
          error = "نام کاربری خود را وارد کنید";
        } else if (value.trim().length < 5) {
          hasError = true;
          error = "نام کاربری وارد شده باید بیش از 4 کاراکتر باشد";
        } else {
          hasError = false;
          error = "";
          }
        break;
  
      case "password":
        if (value.trim() === "") {
          hasError = true;
          error = "رمز عبور وارد کنید";
        } else if (value.trim().length < 5) {
          hasError = true;
          error = "رمز عبور باید بیش از 5 کاراکتر باشد";
        } else {
          hasError = false;
          error = "";
        }
        break;
  
      default:
        break;
    }
    return { hasError, error };
  };