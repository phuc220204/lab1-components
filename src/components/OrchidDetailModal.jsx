import React from "react";
import { Modal, Button, Row, Col, Badge } from "react-bootstrap";

function OrchidDetailModal({ orchid, show, onHide }) {
  if (!orchid) return null;

  const {
    name,
    image,
    origin,
    color,
    rating,
    isSpecial,
    isNatural,
    category,
    numberOfLike,
  } = orchid;
  // Tạo mô tả tuỳ chỉnh cho từng hoa
  const getDescription = (orchid) => {
    return `${orchid.name} là một loại hoa lan ${
      orchid.isNatural ? "tự nhiên" : "lai tạo"
    } 
    có nguồn gốc từ ${orchid.origin}. Với màu sắc ${
      orchid.color
    } đặc trưng và đánh giá ${orchid.rating} sao, 
    đây là một trong những loài hoa lan ${
      orchid.isSpecial ? "đặc biệt và quý hiếm" : "phổ biến"
    } 
    thuộc họ ${orchid.category}. Loài hoa này đã nhận được ${
      orchid.numberOfLike
    } lượt yêu thích từ cộng đồng.`;
  };

  // Tạo rating stars
  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          {/* Cột hình ảnh */}
          <Col md={6} className="mb-3">
            <img
              src={image}
              alt={name}
              className="img-fluid rounded shadow"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </Col>

          {/* Cột thông tin */}
          <Col md={6}>
            <div className="mb-3">
              <h5>Thông tin chi tiết</h5>
              <p>
                <strong>Nguồn gốc:</strong> {origin}
              </p>
              <p>
                <strong>Màu sắc:</strong> {color}
              </p>
              <p>
                <strong>Loại:</strong> {category}
              </p>
              <p>
                <strong>Đánh giá:</strong> {renderStars(rating)} ({rating}/5)
              </p>
              <p>
                <strong>Số lượt thích:</strong> {numberOfLike} ❤️
              </p>
            </div>

            {/* Badges */}
            <div className="mb-3">
              {isSpecial && (
                <Badge bg="warning" className="me-2">
                  Special
                </Badge>
              )}
              {isNatural ? (
                <Badge bg="success">Natural</Badge>
              ) : (
                <Badge bg="secondary">Hybrid</Badge>
              )}
            </div>

            {/* Mô tả */}
            <div>
              <h6>Mô tả:</h6>
              <p className="text-muted">{getDescription(orchid)}</p>
            </div>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrchidDetailModal;
