import React, {useState} from "react";
import {Container, Row, Col, Navbar, Form, Button, Image} from "react-bootstrap";
import { Check2All } from "react-bootstrap-icons";

export default () => {
    // return <div className="container">
    //     <div className="row gy-2 gx-2">
    //         {/* div.col{$}*20 */}
    //         <div className="col col-12 py-3 px-5 bg-dark text-light">1</div>
    //         <div className="col col-6">2</div>
    //         <div className="col col-6">3</div>
    //         <div className="col col-12">4</div>
    //         <div className="col col-12 col-sm-6 col-md-3 bg-warning">5</div>
    //         <div className="col col-12 col-sm-6 col-md-3 bg-warning">6</div>
    //         <div className="col col-12 col-sm-6 col-md-3 bg-warning">7</div>
    //         <div className="col col-12 col-sm-6 col-md-3 bg-warning">8</div>
    //         <div className="col col-1">9</div>
    //         <div className="col col-11">10</div>
    //         <div className="col col-1">11</div>
    //         <div className="col col-4">12</div>
    //         <div className="col col-4">13</div>
    //         <div className="col col-2">14</div>
    //         <div className="col col-1">15</div>
    //         <div className="col col-12">16</div>
    //     </div>
    // </div>
    const [img, setImg] = useState("");
    return <Container className="bg-body">
        <Row className="g-3 align-content-start min-vh-100">
            <Col as="header" xs={12}>
                <Navbar className="bg-dark text-light p-3">
                    <Navbar.Brand href="" className="text-light">Site</Navbar.Brand>
                </Navbar>
            </Col>
            <Col xs={12} md={6}>
                {/* 
                    Добавить товар:
                    Картинка (ссылка) (input => link)
                    Название    (input => text)
                    Цена        (input => number)
                    Скидка      (select => 0 - 25%)
                    Описание    (textarea)
                */}
                <Form className="d-flex flex-column" style={{gap: "1rem"}}>
                    <Form.Group>
                        <Form.Label for="name">Название товара</Form.Label>
                        <Form.Control id="name" placeholder="Рулька говяжья"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="image">Изображение товара</Form.Label>
                        <Form.Control id="image" placeholder="https://4lapy.ru/resize/480x480/upload/iblock/ba4/ba49e8b8ed1033689b9fa3738c803cdf.jpg" value={img} onChange={e => setImg(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="price">Цена</Form.Label>
                        <Form.Control id="price" type="number" min="0" step="10" placeholder="0"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="discount">Скидка</Form.Label>
                        <Form.Select id="discount">
                            <option value="0">Нет скидки</option>
                            <option value="5">5%</option>
                            <option value="10">10%</option>
                            <option value="15">15%</option>
                            <option value="20">20%</option>
                            <option value="25">25%</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="description">Название товара</Form.Label>
                        <Form.Control as="textarea" rows={4} id="description" placeholder="Прекрасное лакомство для собачек"/>
                    </Form.Group>
                    <Button className="btn-dark w-25 align-self-end">
                        <Check2All/>
                    </Button>
                </Form>
            </Col>
            <Col xs={12} md={6}>
                <Image src={img} className="w-100"/>
            </Col>
            <Col xs={12} as="footer" className="bg-dark text-info p-3">
                &copy;{new Date().getFullYear()}
            </Col>
        </Row>
    </Container>
}