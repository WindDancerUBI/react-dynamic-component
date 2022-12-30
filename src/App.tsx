/*
 * @Title: app--根组件入口
 * @Author: huangjitao
 * @Date: 2022-12-30 10:05:44
 * @Description: description of this file
 */
import React from "react";
import "./App.css";
import "antd/dist/reset.css";
import * as Antd from "antd";

// const { Button, Input, Select} = Antd
const Button = Antd["Button"];
const Input = Antd["Input"];
const Select = Antd["Select"];

const components = [
  { id: 1, type: "Button", props: { type: "primary" }, children: "动态按钮" },
  {
    id: 2,
    type: "Input",
    props: { placeholder: "这是动态创建的输入框", style: { width: 200 } },
  },
  {
    id: 3,
    type: "Select",
    props: { placeholder: "请选择", style: { width: 200 } },
    children: (
      <>
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2">2</Select.Option>
        <Select.Option value="3">3</Select.Option>
      </>
    ),
  },
];

function App() {
  return (
    <div className="App">
      <h1>组件列表</h1>
      <p>固定组件</p>
      <p>
        <Button type="primary">固定按钮</Button>
      </p>
      <p>
        <Input placeholder="这是固定的输入框" style={{ width: 200 }} />
      </p>
      <p>
        <Select placeholder="请选择" style={{ width: 200 }}>
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
        </Select>
      </p>
      <p>动态创建的组件</p>
      {components.map((component: any) => {
        const AntdComponent = Antd[component.type];
        return (
          <p key={component.id}>
            <AntdComponent {...component.props}>
              {component.children && component.children}
            </AntdComponent>
          </p>
        );
      })}
    </div>
  );
}

export default App;
