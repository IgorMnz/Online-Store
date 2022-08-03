import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    let navigate = useNavigate()

    return (
        <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
            <Card style={{border: '1px solid lightgray', width: 160, cursor: 'pointer'}}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/><br/>
                <div style={{width: '90%', margin: '0 auto', textalign: 'center'}}>{device.name}<br/>
                    цена: {device.price} руб.
                </div>

            </Card>
        </Col>
    );
};

export default DeviceItem;