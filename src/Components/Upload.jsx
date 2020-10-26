import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Axios from "axios";

const endpoint = "http://localhost:9090";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    file: undefined,
    name: "",
    parent: "",
    tags: [],
    err: undefined,
  };

  onFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  verify() {
    debugger;
    if (!this.state.file) {
      this.setState({ err: "Invalid File" });
      return false;
    }
    if (!this.state.name) {
      this.setState({ err: "Invalid Name" });
      return false;
    }
    return true;
  }
  //INPUT
  // Name     string
  // FileName string
  // Parent   string
  // Tags     []string
  onSubmit = () => {
    if (this.verify()) {
      const data = new FormData();
      data.append("file", this.state.file);
      const metadata = {
        name: this.state.name,
        FileName: this.state.file.name,
        Parent: this.state.parent,
        Tags: this.state.tags,
      };

      data.append("metadata", metadata);

      Axios.post(endpoint + "upload", data).then((res) => {
        console.log(res.statusText);
      });
    } else {
      console.log("Submission invalid");
    }
  };

  render() {
    // let filename = "";
    // if (this.state.file != null) {
    //   filename = this.state.file.name;
    // }
    return (
      <div>
        <div className="uploadContainer">
          <Container maxWidth="sm">
            <Typography variant="h6" gutterBottom>
              Upload New Image
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="file"
                  accept="image/*"
                  required
                  id="filename"
                  name="filename"
                  label="filename"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="parent"
                  name="parent"
                  label="Parent ID"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="tags"
                  name="tags"
                  label="Tags seperated by spaces"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={this.onSubmit}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}
