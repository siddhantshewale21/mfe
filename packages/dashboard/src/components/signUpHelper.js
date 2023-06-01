

export const IsValidate = ({
  firstname,
  lastname,
  username,
  phoneNo,
  dateOfBirth,
  role,
  password
}) => {
  let isproceed = true;
  let errormessage = "Please enter the value in ";

  if (firstname === null || firstname === "") {
    isproceed = false;
    errormessage += " Firstname";
  }
  if (lastname === null || lastname === "") {
    isproceed = false;
    errormessage += " Lastname";
  }
  if (username === null || username === "") {
    isproceed = false;
    errormessage += " Invalid Username";
  }
  if (phoneNo === null || phoneNo === "") {
    isproceed = false;
    errormessage += "Phone No";
  }
  if (!dateOfBirth || dateOfBirth.value === null || dateOfBirth.value === "") {
    isproceed = false;
    errormessage += "Date Of Birth";
  }
  if (role === null || role === "") {
    isproceed = false;
    errormessage += " role";
  }
  if (password === null || password === "") {
    isproceed = false;
    errormessage += " Password";
  }
  if (!isproceed) {
    toast.warning(errormessage);
  } else {
    return isproceed;
  }
};

export const handlesubmit = async (
  values,
  usenavigate,
  setMessage,
  setMessageTitle,
  selectedUserId  
) => {
  debugger;
  if (!IsValidate(values)) {

    return;
  }
  try {
    const user = {
      // id: 0,
      // username: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      role: values.role,
      phoneNumber: values.phoneNo,
      dateOfBirth: values.dateOfBirth,
      password:values.password,
    };
    const response = await fetch(`https://localhost:5052/api/Users/${selectedUserId}`, 
    { // Include the selected user ID in the API URL
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(user),
    });
    if (response.ok) {
      // Update successful
      setMessageTitle("success");
      setMessage("Record updated successfully");
     
    } else {
      // Update failed
      setMessageTitle("error");
      setMessage("Failed to update record");
    }
    
    // Rest of the code...
  } catch (error) {
    // Error handling code...
  }
  };


