import React from "react";
import "./style.css";
import { Button, Drop, Text } from "../../components";

function ModifyTest() {
  return (
    <>
      <div className="ModifyTest bg-white">
        <Text type="h2" size="regular">
          اضافة اختبار
        </Text>
        <div className="mt-4">
          <div className="row g-4">
            <div className="col-12">
              <Drop placholder={"اختر المادة"} title={"اسم المادة"} />
            </div>
            <div className="col-6">
              <Drop placholder={"اختر المادة"} title={"اسم المادة"} />
            </div>
            <div className="col-6">
              <Drop placholder={"اختر المادة"} title={"اسم المادة"} />
            </div>
            <div className="col-6">
              <Drop placholder={"اختر المادة"} title={"اسم المادة"} />
            </div>
            <div className="col-6">
              <Drop placholder={"اختر المادة"} title={"اسم المادة"} />
            </div>
            <div className="col-12">
              <Drop placholder={"اختر المادة"} title={"اسم المادة"} />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end" style={{marginTop:"37px"}}>
        <Button text={"حفظ و اضافة"} />
      </div>
    </>
  );
}

export default ModifyTest;
