import { Card, Col, Container, Row } from "react-bootstrap";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import './All.css'
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Style1 = () => {
    return (
        <>
            {/* STYLE START  */}
            <Container>
                <div className="text-center border-top pt-5">
                    <h1>Style 1</h1>
                    <p className="text-body-tertiary w-50 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                </div>
                <Row>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '16rem' }}>
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src='/public/Styl1.jpg' alt="card1" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                            </div>
                            <Card.Body className="text-center">
                                <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <span className="fs-6">(5.0)</span>
                                </div>
                                <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $145
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '16rem' }}>
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src='/public/Styl2.jpg' alt="card1" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                            </div>
                            <Card.Body className="text-center">
                                <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Fruits</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStarOutline />
                                    <span className="fs-6">(4.5)</span>
                                </div>
                                <Card.Title className="fs-6 my-2">Fresh organic apple 1kg simla marming</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '16rem' }}>
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" ,}}>
                                        <img src='/public/Styl3.jpg' alt="card1" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                            </div>
                            <Card.Body className="text-center">
                                <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Fruits</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStarOutline />
                                    <IoMdStarOutline />
                                    <span className="fs-6">(3.2)</span>
                                </div>
                                <Card.Title className="fs-6 my-2">Organic fresh venila farm watermelon 5kg</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $50.30
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$72.60</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '16rem' }}>
                        <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" ,}}>
                                        <img src='/public/Styl4.jpg' alt="card1" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                            </div>
                            <Card.Body className="text-center">
                                <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <span className="fs-6">(5.0)</span>
                                </div>
                                <Card.Title className="fs-6 my-2">Sweet crunchy nut mix 250gm pack</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* ST&YLE END  */}
        </>
    )
}

export default Style1;