import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { login } from "../https/index";
import axios from "axios";



const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    text_s: {
      height: theme.spacing(3),
    },
  }));

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errormess, setMessagReg] = useState("");

    const loginButt = async () => {
      
        axios.post("https://res-zeta-one.vercel.app/api", {
            email: email,
            password: password
          }).catch(
            function (error) {
              if (error.response) {
                //alert(error.response.data.errors);
                setMessagReg(error.response.data.errors);
              
              }
            }
          )
          .then(function (response) {
            try {
              console.log(response);
            setPassword("")
            setEmail("")
            setMessagReg(response.data.message)
            } catch (error) {
              console.log(error);

            }
            
          });



        
      };
      console.log(errormess)
    const classes = useStyles();
    return (
        <div className="app">
        <div className="login">
          <div className="login_ava">
            <Avatar className={classes.large} />
          </div>
          {(
            <div className="login_er_p">{errormess}</div>
          )}
          <div className="  ">
            <TextField
              name="Email"
              label="Email "
              variant="outlined"
              style={{ height: 40 }}
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div>
            
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              style={{ height: 40 }}
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
            />
          </div>
          <div className="log_div">
            <Button
              variant="contained"
              color="primary"
              className="login_butt"
              onClick={loginButt}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    )
}

export default Login
