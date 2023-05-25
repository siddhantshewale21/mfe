import { useFormik } from "formik";
import * as Yup from "yup";

export const yesterdaysDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (day === 1) {
    month = month - 1;
  } else {
    day = day - 1;
  }
  const monthStr = month > 9 ? month : "0" + month;
  const yesterday = year + "-" + monthStr + "-" + day;
  // const todaysDate = new Date(year, month, day, 0, 0, 0, 0);
  return yesterday;
};

const signupForm = (props) => {
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      phoneNo: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required.").max(255),
      lastName: Yup.string().required("Last Name is required.").max(255),
      userName: Yup.string()
        .required("Username is required.")
        .max(255)
        .email("Must be a valid email."),
      password: Yup.string()
        .required("Password is required.")
        .max(255)
        .matches(
          passwordRegExp,
          "Minimum eight characters, at least one upper case, one lower case, one number and one special character."
        ),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .max(255)
        .matches(
          passwordRegExp,
          "Minimum eight characters, at least one upper case, one lower case, one number and one special character."
        )
        .oneOf(
          [Yup.ref("password"), null],
          "Password and Confirm Password must match."
        ),
      dateOfBirth: Yup.date()
        .required("Date Of Birth is required.")
        .max(yesterdaysDate(), "Must be less than today's date."),
      phoneNo: Yup.string()
        .required("Phone number is required.")
        .length(10, "Must be a valid phone number of 10 digits."),
    }),
    onSubmit: async (values) => {
      props.submit(values);
    },
  });
  return formik;
};

export default signupForm;
