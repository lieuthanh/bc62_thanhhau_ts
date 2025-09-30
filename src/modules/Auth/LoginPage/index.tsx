import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";

export default function LoginPage() {
  return (
    <div className="w-[400px] ">
      <div className="my-4 text-center">
        <Typography className="font-bold text-3xl">Đăng nhập</Typography>
        <Typography className="mt-2">Hi, Chào mừng bạn quay lại 👋</Typography>
      </div>

      <Form layout="vertical">
        <Row gutter={[48, 16]}>
          <Col span={24}>
            <label className="text-xs text-[#6A7280]">*Tài khoản</label>
            <Input
              type="text"
              size="large"
              className="mt-1"
              placeholder="Vui lòng nhập tài khoản..."
            />
          </Col>
          <Col span={24}>
            <label className="text-xs text-[#6A7280]">*Mật khẩu</label>
            <Input
              type="password"
              size="large"
              className="mt-1"
              placeholder="Vui lòng nhập mật khẩu..."
            />
          </Col>

          <Col span={24}>
            <Button type="primary" size="large" block>
              Đăng nhập
            </Button>
          </Col>
        </Row>
      </Form>

      <Typography className="mt-8 text-center">
        Chưa có tài khoản?{" "}
        <span className="text-blue-700 font-medium cursor-pointer">
          Tạo tài khoản
        </span>
      </Typography>
    </div>
  );
}
