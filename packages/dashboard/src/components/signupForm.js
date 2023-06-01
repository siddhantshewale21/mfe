// import { useFormik } from "formik";
import {useFormik} from "formik";
import * as Yup from "yup";

const signupForm = ({submit,user}) => {
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const yesterdaysDate = new Date(year, month, day - 1, 0, 0, 0, 0);

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName || "",
      lastName: user.lastName ||"",
      userName: user.email || "",
      role:user.role ||"",
      dateOfBirth: user.dateOfBirth.substring(0, 10)    ||"",
      phoneNo: user.phoneNumber ||"",
      password:user.password || "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required.").max(255),
      lastName: Yup.string().required("Last Name is required.").max(255),
      role: Yup.string().required("Role is required."),
      userName: Yup.string()
        .required("Username is required.")
        .max(255)
        .email("Must be a valid email."),
     
      dateOfBirth: Yup.date()
        .required("Date Of Birth is required.")
        .max(yesterdaysDate, "Must be less than today's date."),
      phoneNo: Yup.string()
        .required("Phone number is required.")
        .length(10, "Must be a valid phone number of 10 digits."),
        
        password: Yup.string()
        .required("Password is required.")
        .max(255)
        .matches(
          passwordRegExp,
          "Minimum eight characters, at least one upper case, one lower case, one number and one special character."
        ),
    }),
    onSubmit: async (values) => {
      submit(values);
    },
  });
  return formik;
};

export default signupForm;
