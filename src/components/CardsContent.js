import React from 'react'

import { Card, Typography } from 'antd';
const { Title, Text } = Typography;

export default function CardsConnent ({cardImg, title, info, time}) {
    return (
        <div>
            <Card style={{ width: "100%" }}>
                <img src={cardImg} alt="Card Image"/>
                <Title style={{ "margin-top": 16 }} level={3}>{title}</Title>
                <Text style={{ "margin-top": 4 }} type="secondary">{info}</Text>
                <br/>
                <Text style={{ "margin-top": 4 }}>{time}</Text>
            </Card>
        </div>
    );
}