import React from 'react';
import { Descriptions } from 'antd';

const ResidentItem = ({ person }) => {
    return (
        <Descriptions labelStyle={{ color: "white", fontWeight: "bold" }}>
            <Descriptions.Item label="Adı Soyadı">{person?.name}</Descriptions.Item>
            <Descriptions.Item label="Telefon">{person?.phone}</Descriptions.Item>
            <Descriptions.Item label="İş">{person?.job}</Descriptions.Item>
        </Descriptions>
    )
}

export default ResidentItem;