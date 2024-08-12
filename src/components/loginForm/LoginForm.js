import React from "react";
import "./style.css";
import Input from "../input-login/Input";
import { Lock, Mail } from "../../assets";
import { Button, Text } from "../../components";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate()
  const submit = (e) => {
    e.preventDefault();
    navigate("/")
  };
  return (
    <div className="LoginForm">
      <form onSubmit={submit} className="d-flex flex-column gap-4">
        <Input icon={<Mail />} placeholder="البريد الاليكتروني" />
        <Input icon={<Lock />} placeholder="الرقم السري" type={"password"} />
        <button className="forget border-0 bg-transparent text-end" type="button">
          <Text size="small">{"هل نسيت كلمة المرور؟"}</Text>
        </button>
        <Button type="submit" text="تسجيل الدخول" />
      </form>
    </div>
  );
}

export default LoginForm;
