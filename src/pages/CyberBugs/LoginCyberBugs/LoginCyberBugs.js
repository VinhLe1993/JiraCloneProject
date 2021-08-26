import React from "react";
import { Input, Button } from "antd";
import {
    UserOutlined,
    LockOutlined,
    FacebookOutlined,
    TwitterOutlined,
} from "@ant-design/icons";
import { withFormik } from "formik";
import * as Yup from 'yup';
import { connect } from 'react-redux'
import { USER_SIGNIN_API } from "../../../redux/constants/Cyberbugs/Cyberbugs";


function LoginCyberBugs(props) {
    const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
        props;

    return (
        <form
            onSubmit={handleSubmit}
            className="container"
            style={{ height: window.innerHeight }}
        >
            <div
                className="d-flex flex-column justify-content-center 
      align-items-center"
                style={{ height: window.innerHeight }}
            >
                <h3 className="text-center" style={{ fontWeight: 300, fontSize: 35 }}>
                    {props.displayName}
                </h3>
                <div className="d-flex mt-3">
                    <Input
                        onChange={handleChange}
                        style={{ minWidth: 300 }}
                        name="email"
                        size="large"
                        placeholder="Email"
                        prefix={<UserOutlined />}
                    />
                </div>
                <div className="text-danger">{errors.email}</div>
                <div className="d-flex mt-3">
                    <Input
                        onChange={handleChange}
                        style={{ minWidth: 300 }}
                        type="password"
                        name="password"
                        size="large"
                        placeholder="Password"
                        prefix={<LockOutlined />}
                    />
                </div>
                <div className="text-danger">{errors.password}</div>
                <Button
                    htmlType="submit"
                    shape="round"
                    style={{
                        width: 300,
                        backgroundColor: "rgb(102,117,223)",
                        color: "#fff",
                    }}
                    size="large"
                    className="mt-5"
                >
                    Login
                </Button>
                <div className="social mt-3 d-flex">
                    <Button
                        style={{ backgroundColor: "rgb(59,89,152)", color: "#fff" }}
                        shape="circle"
                        icon={<FacebookOutlined />}
                        size={"large"}
                    />
                    <Button
                        type="primary ml-3"
                        shape="circle"
                        icon={<TwitterOutlined />}
                        size={"large"}
                    />
                </div>
            </div>
        </form>
    );
}

const LoginCyberBugsWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: "",
        password: "",
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required !').email('email is invalid !'),
        password: Yup.string().min(6, 'Password must be at least 6 characters !')
            .max(32, 'Password must be maximum 32 characters !')
    }),
    handleSubmit: (values, {props, setSubmitting }) => {
        let action = {
            type:USER_SIGNIN_API,
            userLogin: {
                email:values.email,
                password:values.password
            }
        }
        props.dispatch(action)
        console.log(values)
    },

    displayName: "Login Cyberbugs",
})(LoginCyberBugs);

export default connect() (LoginCyberBugsWithFormik);
