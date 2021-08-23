import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';



export const UserLoginTemplate = (props) => {
    
    let {Component,...restRoute} = props;
 
    
    return <Route {...restRoute} render={(propsRoute)=> {
        return <>
            <Component {...propsRoute}/>
            <Button type="primary" >
          Primary
        </Button>
        </>
    }} />
}