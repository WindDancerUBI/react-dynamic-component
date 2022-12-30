/*
 * @Title: 自己创建的组件
 * @Author: huangjitao
 * @Date: 2022-12-30 13:56:12
 * @Description: description of this file
 */

import React from "react";

interface IMyComponentOneProps {
  author: string;
  title: string;
  stared: number;
  [x: string]: any;
}

const MyComponentOne = (props: IMyComponentOneProps) => {
  const { author, title, stared } = props;

  return (
    <>
      <p>作者：{author}</p>
      <p>标题：{title}</p>
      <p>关注：{stared}</p>
    </>
  );
};

export default MyComponentOne;
