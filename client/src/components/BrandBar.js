import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Container className="d-flex">
            <Row>
                {device.brands.map(brand =>
                    <Col key={brand.id}>
                        <Card
                            style={{cursor: 'pointer'}}
                            className="p-2"
                            onClick={() => device.setSelectedBrand(brand)}
                            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        >
                            {brand.name}
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
});

export default BrandBar;