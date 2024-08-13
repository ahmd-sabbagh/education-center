import React from "react";
import "./style.css";
import { images, Lock, Mail, Phone, WhiteLogo } from "../../assets";
import Input from "../../components/input-login/Input";
import { Button, Text } from "../../components";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="Register d-flex">
      <div
        className="image d-none d-md-flex flex-column align-items-center"
        style={{ backgroundImage: `url(${images.BgRegister})` }}
      >
        <div className=" flex-grow-1 flex-c">
          <WhiteLogo />
        </div>
        <Text>{"مستقبل التعليم في مصر"}</Text>
      </div>
      <div className="data flex-c flex-grow-1">
        <div className="card-data p-3 p-md-5 d-flex flex-column align-items-center">
          <Text type="h2" size="regular">
            {"تسجيل حساب جديد"}
          </Text>
          <Text type="p" size="small">
            {"مرحبا بك ، سجل حساب جديد الان"}
          </Text>
          <form className="d-flex flex-column gap-3">
            <Input
              icon={<Mail />}
              placeholder={"البريد الاليكتروني"}
              type="email"
            />
            <Input icon={<Phone />} placeholder={"رقم الهاتف"} type="number" />
            <Input
              icon={<Lock />}
              placeholder={"الرقم السري"}
              type="password"
            />
            <Button text="التسجيل" />
          </form>
          <div className="mt-4 end d-flex align-items-center gap-1">
            <Text>لديك حساب؟</Text>
            <Link to="/login" className="pointer span">
              <Text style={{ color: " #7463D0" }}>{"سجل الدخول"}</Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
