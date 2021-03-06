import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
import axios from "axios";
// import * as Yup from "yup";
const DetailProduct = (props) => {
  const [product, setProduct] = useState([]);
  const history = useHistory();
  const id = props.match.params.id;
  console.log(id);
  const getSingleProduct = () => {
    axios
      .get("http://localhost:8000/product/getSingleProduct/" + id)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(getSingleProduct, []);
  return (
    <Container className="p-3 mt-5">
      <Card>
        <Row>
          <Col lg={6} md={6} sm={12} className="right-login">
            <img className="w-100" alt="product" />
          </Col>
          <Col lg={6} md={6} sm={12} className="left-login">
            <Card.Header>
              {product.name}

              {product.onSale === "yes" ? (
                <>
                  {" "}
                  <hr />
                  <Badge bg="success">Sale</Badge>
                  {product.DateSaleStart} - {product.DateSaleEnd}
                  <br />
                  Sale Price : {product.salePrice}
                </>
              ) : (
                console.log("no ")
              )}
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="text-muted">
                Regular Price: Rs {product.price}
              </Card.Subtitle>
              <hr></hr>
              <Card.Text>{product.Description}</Card.Text>
              <hr />
              <Button variant="outline-secondary">-</Button> 0{" "}
              <Button variant="outline-secondary">+</Button>
              <hr />
              <Card.Link href="#">
                <Button>Add to Cart</Button>
              </Card.Link>
            
                <Button
                  onClick={(e) => {
                    history.push("/checkout");
                  }}
                >
                  CheckOut
                </Button>
            
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetailProduct;
