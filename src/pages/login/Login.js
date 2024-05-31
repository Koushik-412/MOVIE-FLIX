import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Login.css";



const Login = () => {
    const navigate = useNavigate();
    const defaultvalue = {
        email: "",
        password:""
    }

    const Register = yup.object().shape({
        email: yup.string().required("Enter Your E-mail"),
        password:yup.string().min(6,"minimum six character").required("Required")
    });

    const send = (values) => {
        // const url="http://localhost:4000/registration";
        console.log(values);
        localStorage.setItem("login",true);
        const email=localStorage.getItem("email");
        const password=localStorage.getItem("password");
        if(values.email===email && values.password===password){
            navigate("/");
        }else{
            alert("Wrong Information / Register")
        }
    
    };


    return (
        <>
        <Formik initialValues={defaultvalue} validationSchema={Register} onSubmit={send} onReset={" "}>
            <div className="b">
            <div class="center bg-color text-light">
                <h1 class="text-center">Login</h1>
                <Form>
                    <div class="form-group text-field">
                        <Field class="form-control" type="email" name="email" placeholder="Email" />
                        <p className="text-danger p-text"><ErrorMessage name="email" /></p>
                    </div>
                    <div class="form-group text-field">
                        <Field class="form-control" type="password" name="password" placeholder="Password"  />
                        <p className="text-danger p-text"><ErrorMessage name="password" /></p>
                    </div>
                        <button class="btn btn-primary w-100" type="submit">Login</button>
                </Form>
            </div>
            </div>
        </Formik>
        </>
    );
}


export default Login;