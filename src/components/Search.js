import React from 'react'


import { SearchOutlined } from '@ant-design/icons';
import {  Input } from 'antd';

const style = {
    margin : '40px 87px 0 0',
    display : 'flex',
    'align-items':'center',
    'border-bottom' : '1px solid #757575' 
}

export default function Search() {
    return(
        <div style={style}>
            <SearchOutlined style={{ fontSize: '14px' }}/>
            <Input placeholder="Search for restaurant or cuisine" bordered={false} />
        </div>
    )
}