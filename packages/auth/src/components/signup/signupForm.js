import { useFormik } from "formik";
import * as Yup from "yup";

const signupForm = (props) => {
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
      username: Yup.string()
        .required("Username is required.")
        .max(255)
        .email("Must be a valid email."),
      password: Yup.string()
        .required("Password is required.")
        .max(255)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/,
          "Minimum eight characters, at least one upper case, one lower case, one number and one special character."
        ),
      confirmPassword: Yup.string()
        .required("Password is required")
        .max(255)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/,
          "Minimum eight characters, at least one upper case, one lower case, one number and one special character."
        )
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      dateOfBirth: Yup.date()
        .required("Date Of Birth is required.")
        .max(new Date()),
      phoneNo: Yup.number().required("Phone Number is required.").length(10),
    }),
    onSubmit: async (values) => {
      props.submit(values);
    },
  });
  return formik;
};

export default signupForm;
