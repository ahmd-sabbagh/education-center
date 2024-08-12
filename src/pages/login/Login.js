import React from "react";
import "./Login.css";
import { LoginLogo } from "../../assets";
import LoginForm from "../../components/loginForm/LoginForm";
import { Link } from "react-router-dom";
import { Text } from "../../components";

function Login() {
  return (
    <div className="Login flex-c flex-column">
      <div className="card-login p-5 d-flex flex-column align-items-center">
        <div>
          <LoginLogo />
        </div>
        <Text type="h2" size="regular">
          {"سجل دخولك الآن!"}
        </Text>
        <Text type="p" style={{ color: "rgba(0, 0, 0, 0.40)" }}>
          {"مرحبا بك ، سجل الدخول للمتابعة!"}
        </Text>
        <LoginForm />
        <div className="mt-4 end d-flex align-items-center gap-1">
          <Text>{"ليس لديك حساب؟"}</Text>
          <Link to="/register" className="pointer span">
          <Text>{" إنشاء حساب"}</Text>
          </Link>
        </div>
      </div>
      <Text type="p" weight="light" style={{marginTop:"32px"}}>{"مستقبل التعليم في مصر"}</Text>
    </div>
  );
}

export default Login;
