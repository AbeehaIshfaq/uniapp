import React from 'react';
//import './App.css';
import axios from 'axios';
import { Button, Image, List } from 'semantic-ui-react'

class Upload extends React.Component {

  constructor(props) {
      super(props);
      this.state ={
          file: null
      };
      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('myfile',this.state.file);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      axios.post("http://localhost:5000/api",formData,config)
          .then((response) => {
              alert("The file is successfully uploaded");
          }).catch((error) => {
      });
  }

  onChange(e) {
      this.setState({file:e.target.files});
  }

  render() {
      return (
          
          <List divided verticalAlign='middle'  style={{ padding: "60px" }} >
          <h1>   Upload Your Documents Here </h1>
          <List.Item onSubmit={this.onFormSubmit} >
            <List.Content floated='right'>
            <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange} />
              {console.log(this.state.file)}
              <Button color='blue' className="upload-button" type="submit">Upload</Button>
            </List.Content>
            <List.Content>CNIC</List.Content>
          </List.Item>

          <List.Item onSubmit={this.onFormSubmit}>
            <List.Content floated='right'>
            <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange} />
              {console.log(this.state.file)}
              <Button color='blue' className="upload-button" type="submit">Upload</Button>
            </List.Content>
            <List.Content>Fathers CNIC</List.Content>
          </List.Item>
  
          <List.Item onSubmit={this.onFormSubmit}>
            <List.Content floated='right'>
            <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange} />
              {console.log(this.state.file)}
              <Button color='blue' className="upload-button" type="submit">Upload</Button>            </List.Content>
            <List.Content>O level Result Card</List.Content>
          </List.Item>
  
          <List.Item onSubmit={this.onFormSubmit}>
            <List.Content floated='right'>
            <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange} />
              {console.log(this.state.file)}
              <Button color='blue' className="upload-button" type="submit">Upload</Button>            </List.Content>
            <List.Content>A level Result Card</List.Content>
          </List.Item>
  
  
          <List.Item onSubmit={this.onFormSubmit}>
            <List.Content floated='right'>
            <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange} />
              {console.log(this.state.file)}
              <Button color='blue' className="upload-button" type="submit">Upload</Button>            </List.Content>
            <List.Content>Passport</List.Content>
          </List.Item>

          <List.Item onSubmit={this.onFormSubmit}>
            <List.Content floated='right'>
            <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange} />
              {console.log(this.state.file)}
              <Button color='blue' className="upload-button" type="submit">Upload</Button>            </List.Content>
            <List.Content>Character Certificate</List.Content>
          </List.Item>
          <h1>    </h1>
  
  <Button color='blue'>Submit</Button>  
        </List>
      )
      
  }
}

export default Upload;
