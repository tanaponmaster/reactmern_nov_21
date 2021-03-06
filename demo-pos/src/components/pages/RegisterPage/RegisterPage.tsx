/* eslint-disable import/no-anonymous-default-export */
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { SxProps } from "@mui/system";
import { httpClient } from "./../../../utils/HttpClient";
import { server } from "../../../constants";

const classes: SxProps = {
  root: { display: "flex", justifyContent: "center", alignItems: "center" },
  submitBtn: { marginTop: 4 },
  canelBtn: { marginTop: 2 },
};

export default (props: any) => {
  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }: any) => {
    return (
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="standard"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={values.password}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          sx={classes.submitBtn}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          Create
        </Button>
        <Button
          sx={classes.canelBtn}
          onClick={() => props.history.goBack()}
          type="button"
          fullWidth
          variant="outlined"
        >
          Cancel
        </Button>
      </form>
    );
  };

  const initialValue: any = { username: "admin", password: "1234" };
  return (
    <Box sx={classes.root}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Register
          </Typography>
          <Formik
            initialValues={initialValue}
            onSubmit={async (values, { setSubmitting }) => {
              const result = await httpClient.post(server.REGISTER_URL, values);
              alert(JSON.stringify(result.data));

              setSubmitting(false);
            }}
          >
            {showForm}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};
