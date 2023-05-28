import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import http from "../../services/HttpService";
import { Box, TextField, Button } from "@mui/material";
import * as React from 'react';

const New = (props: { inputs: any, title: string }) => {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const body: any = {
      name: formData.get('name'),
      price: Number(formData.get('price') as string),
      description: formData.get('description'),
      image: formData.get('image'),
      category: Number(formData.get('category') as string),
    }

    http.post("/api/product/", body, {
      headers: {
        "Content-type": "multipart/form-data",
      }
    });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{props.title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <Box component={"form"} onSubmit={handleSubmit}>
              {props.inputs.map((input: any) => (
                <TextField
                  key={input.id}
                  label={input.label}
                  placeholder={input.placeholder}
                  name={input.field}
                  type={input.type}
                />
              ))}
            <Button 
              style={{marginLeft: 60}} 
              type="submit" 
              variant="contained" 
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
