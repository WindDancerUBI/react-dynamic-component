/*
 * @Title: 动态组件库
 * @Author: huangjitao
 * @Date: 2022-12-30 11:13:08
 * @Description: description of this file
 */

import React, { useEffect, useState } from 'react'
// import * as Antd from 'antd'

interface DynamicComponentProps {
  componentName: string;
  componentPath: string;
  componentProps: {
    style?: React.CSSProperties,
    placeholder?: string;
    type?: string;
    dataSource?: { label: string, value: any};
    [x: string]: any
  }
  children: React.ReactNode
}

const DynamicComponent = (props: DynamicComponentProps) => {
  const { componentPath, componentName, componentProps, children} = props

  const [component, setComponent] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const asyncComponent = async() => {
      debugger
      const library = await import(componentPath)
      console.log('library', library)
      const Component = library[componentName]
      setComponent(<Component {...componentProps}>{children}</Component>)
    }
    asyncComponent()
  }, [componentPath])
  
  return component
}

export default DynamicComponent