# mod-icon-library

> libreria de iconos 

[![NPM](https://img.shields.io/npm/v/mod-icon-library.svg)](https://www.npmjs.com/package/mod-icon-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mod-icon-library
```

## Usage

```jsx
import React from 'react';
import Icon from 'mod-icon-library'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap'

function RowColLayoutExample() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>    <h1>Iconos SVG Personalizados</h1> </Col>
            </Row>
            <Row >
                <Col>
                    <Form.Label>deleteIcon</Form.Label>
                    <Form.Group className="mb-3">
                        <Icon name="deleteIcon" color="blue" size="32"/>
                    </Form.Group>
                    <Form.Label>size: default 32</Form.Label>
                </Col>
                <Col>
                    <Form.Label>chatUnreadIcon</Form.Label>
                    <Form.Group className="mb-3" >
                        <Icon name="chatUnreadIcon" />
                    </Form.Group>
                    <Form.Label>size: default 32</Form.Label>
                </Col>
                <Col>
                    <Form.Label>chatUnreadIcon</Form.Label>
                    <Form.Group className="mb-3" >
                        <Icon name="chatUnreadIcon" size="24"/>
                    </Form.Group>
                    <Form.Label>size: size 24</Form.Label>
                </Col>
                <Col>
                    <Form.Label>ticketPlusIcon</Form.Label>
                    <Form.Group className="mb-3" >
                        <Icon name="ticketPlusIcon"  size="64"/>
                    </Form.Group>
                    <Form.Label>size: 64</Form.Label>
                </Col>
                <Col>
                    <Form.Label>ticketPlusCircularIcon</Form.Label>
                    <Form.Group className="mb-3" >
                        <Icon name="ticketPlusCircularIcon" />
                    </Form.Group>
                    <Form.Label>size: default 32</Form.Label>
                </Col>
                <Col>
                    <Form.Label>notificacionesIcon</Form.Label>
                    <Form.Group className="mb-3">
                        <Icon name="notificacionesIcon" />
                    </Form.Group>
                    <Form.Label>size: default 32</Form.Label>
                </Col>
            </Row>
        </Container>
    );
}

function Iconos() {
    return (
        <>
            <RowColLayoutExample />
        </>
    );
}

export default Iconos;
```
PREVIEW
![Iconos personalizados](https://github.com/jmodestoag/mod-icon-library/assets/57456689/3eb98d59-e8cb-402a-a667-e1eeb1e4546c)

## License




MIT © [Modesto Alvarez](https://github.com/jmodestoag)
