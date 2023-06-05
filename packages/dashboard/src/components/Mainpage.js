import React, { useState,useEffect } from 'react';

import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import ChartTwo from './ChartTwo';
import Orders from './Orders';
import DrawerMenu from './DrawerMenu';
import { useStyles } from './Styles';

import { Delete, Add, Edit } from '@material-ui/icons';


import {
  TextField,
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
} from '@material-ui/core';

export default function Mainpage(props) {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [mainMenu, setMainMenu] = useState(''); 
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  const handleMainMenuChange = (event) => {
    const value = event.target.value;
    setMainMenu(value);
    const SaveButton = () => {
      const [isSaving, setIsSaving] = useState(false);
    
      const handleSave = () => {
        // Set the isSaving state to true to show a loading state
        setIsSaving(true);
    
        // Simulate an asynchronous operation, e.g., saving data to a server
        setTimeout(() => {
          // After the save operation is complete, set isSaving state back to false
          setIsSaving(false);
    
          // You can perform additional actions here, such as displaying a success message
          console.log('Data saved successfully!');
        }, 2000);
      };
      return (
        <button onClick={handleSave} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save'}
        </button>
      );
    };
    
    // Validate the input
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setError('Only characters are allowed in the Main Menu');
    } else {
      setError('');
    }
  };
  
  useEffect(() => {
    // Fetch data from the API
    fetch('https://localhost:7007/WeatherForecast')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
















      
  }, []);
  return (
  //   <>
  //   <div className={classes.root}>
  //     <DrawerMenu />
  //     <Container maxWidth="xxl" className={clsx(classes.content, classes.centerContent)}>
  //       <div className={classes.appBarSpacer} />

  //       <Container maxWidth="xxl">
  //         <Grid container spacing={3}>
  //           <Grid item xs={12} md={6} lg={6}>
  //             <Card>
  //               <CardHeader
  //                 title="Menu Items"
  //                 action={
  //                   <IconButton>
  //                     <Add />
  //                   </IconButton>
  //                 }
  //               />
  //               <Divider />
  //               <CardContent>
  //                 <Grid container spacing={2}>
  //                   <Grid item xs={12} sm={6}>
  //                     <TextField
  //                       required
  //                       fullWidth
  //                       label="Main Menu"
  //                       margin="normal"
  //                       name="mainMenu"
  //                       value={mainMenu}
  //                       onChange={handleMainMenuChange}
  //                       error={Boolean(error)}
  //                       helperText={error}
  //                       variant="outlined"
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12} sm={6}>
  //                     <TextField
  //                       required
  //                       fullWidth
  //                       label="Display Menu"
  //                       margin="normal"
  //                       name="displayMenu"
  //                       variant="outlined"
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12} sm={6}>
  //                     <TextField
  //                       required
  //                       fullWidth
  //                       label="ID"
  //                       margin="normal"
  //                       name="id"
  //                       variant="outlined"
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12} sm={6}>
  //                     <TextField
  //                       required
  //                       fullWidth
  //                       label="isActive"
  //                       margin="normal"
  //                       name="isActive"
  //                       variant="outlined"
  //                     />
  //                   </Grid>
  //                 </Grid>
  //               </CardContent>
  //               <Divider />
  //               <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
  //                 <Button variant="contained" style={{ backgroundColor: 'blue' }}>
  //                   Save
  //                 </Button>
  //               </Box>
  //             </Card>
  //           </Grid>
  //         </Grid>
  //       </Container>
  //     </Container>
  //   </div>
  //   <div className={classes.root}>
  //     <DrawerMenu />
  //     <Container maxWidth="xxl" className={clsx(classes.content, classes.centerContent)}>
  //       <div className={classes.appBarSpacer} />

  //       <Container maxWidth="xxl">
  //         <Grid container spacing={3}>
  //           <Grid item xs={12} md={12} lg={12}>
  //             <Card>
  //               <CardHeader
  //                 title="Grid"
  //               />
  //               <Divider />
  //               <CardContent>
  //                 <Grid container spacing={2}>
  //                   {data.map((item) => (
  //                     <Grid item xs={12} sm={6} key={item.id}>
  //                       <Paper elevation={3} style={{ padding: '1rem' }}>
  //                         <Typography variant="subtitle1">ID: {item.id}</Typography>
  //                         <Typography variant="subtitle1">Main Menu: {item.mainmenu}</Typography>
  //                         <Typography variant="subtitle1">Display Order: {item.displayOrder}</Typography>
  //                         <Typography variant="subtitle1">Is Active: {item.isActive ? 'Yes' : 'No'}</Typography>
  //                         <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
  //                           <IconButton>
  //                             <Edit />
  //                           </IconButton>
  //                           <IconButton>
  //                             <Delete />
  //                           </IconButton>
  //                         </Box>
  //                       </Paper>
  //                     </Grid>
  //                   ))}
  //                 </Grid>
  //               </CardContent>
  //             </Card>
  //           </Grid>
  //         </Grid>
  //       </Container>
  //     </Container>
  //   </div>
  // </>
  <>
  <div className={classes.root}>
    <DrawerMenu />
    <Container maxWidth="xxl" className={clsx(classes.content, classes.centerContent)}>
      <div className={classes.appBarSpacer} />

      <Container maxWidth="xxl">
        <Grid container spacing={3}>
          <Grid>
            <Card>
              <CardHeader
                title="Menu Items"
                action={
                  <IconButton>
                    <Add />
                  </IconButton>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Main Menu"
                    margin="normal"
                    name="mainMenu"
                    value={mainMenu}
                    onChange={handleMainMenuChange}
                    error={Boolean(error)}
                    helperText={error}
                    variant="outlined"
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Display Menu"
                      margin="normal"
                      name="displayMenu"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="ID"
                      margin="normal"
                      name="id"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="isActive"
                      margin="normal"
                      name="isActive"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <Button variant="contained" style={{ backgroundColor: 'blue' }}>
                  Save
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  </div>
  <div className={classes.root}>
    <DrawerMenu />
    <Container maxWidth="xxl" className={clsx(classes.content, classes.centerContent)}>
      <div className={classes.appBarSpacer} />

      <Container maxWidth="xxl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardHeader
                title="Grid"
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  {data.map((item) => (
                    <Grid item xs={12} sm={12} key={item.id}>
                      <Paper elevation={3} style={{ padding: '1rem' }}>
                        <Typography variant="subtitle1">ID: {item.id}</Typography>
                        <Typography variant="subtitle1">Main Menu: {item.mainmenu}</Typography>
                        <Typography variant="subtitle1">Display Order: {item.displayOrder}</Typography>
                        <Typography variant="subtitle1">Is Active: {item.isActive ? 'Yes' : 'No'}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                          <IconButton>
                            <Edit />
                          </IconButton>
                          <IconButton>
                            <Delete />
                          </IconButton>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  </div>
</>
  );
  }
