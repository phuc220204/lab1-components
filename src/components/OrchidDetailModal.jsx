// Import các components từ React Bootstrap để tạo modal layout
import { Modal, Button, Row, Col, Badge } from "react-bootstrap";

/**
 * Component Modal hiển thị thông tin chi tiết của hoa lan
 * @param {Object} orchid - Object chứa thông tin chi tiết hoa lan được chọn
 * @param {boolean} show - Boolean điều khiển hiển thị/ẩn modal
 * @param {Function} onHide - Callback function để đóng modal
 */
function OrchidDetailModal({ orchid, show, onHide }) {
  // Early return: nếu không có orchid data thì không render gì cả  // Early return: nếu không có orchid data thì không render gì cả
  if (!orchid) return null;

  // Destructure để lấy ra các thuộc tính từ orchid object
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

  /**
   * Hàm tạo mô tả tự động cho hoa lan
   * Tách riêng thành function để dễ đọc và có thể customize
   * @param {Object} orchid - Object chứa thông tin hoa lan
   * @returns {string} Chuỗi mô tả chi tiết về hoa lan
   */
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

  /**
   * Hàm render rating dạng emoji stars
   * Tách riêng để dễ đọc và có thể thay đổi cách hiển thị
   * @param {number} rating - Số sao từ 1-5
   * @returns {string} Chuỗi emoji sao
   */
  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      {/* Header của modal với nút đóng */}
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Sử dụng Row/Col của Bootstrap để chia layout thành 2 cột */}
        <Row>
          {/* Cột bên trái: hiển thị hình ảnh */}
          <Col md={6} className="mb-3">
            <img
              src={image}
              alt={name}
              className="img-fluid rounded shadow"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px", // Giới hạn chiều cao tối đa
                objectFit: "cover", // Giữ tỷ lệ ảnh
              }}
            />
          </Col>

          {/* Cột bên phải: hiển thị thông tin chi tiết */}
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
              </p>{" "}
            </div>

            {/* Phần hiển thị badges */}
            <div className="mb-3">
              {/* Conditional rendering: chỉ hiển thị badge Special nếu isSpecial = true */}
              {isSpecial && (
                <Badge bg="warning" className="me-2">
                  Special
                </Badge>
              )}
              {/* Hiển thị badge Natural hoặc Hybrid dựa trên isNatural */}
              {isNatural ? (
                <Badge bg="success">Natural</Badge>
              ) : (
                <Badge bg="secondary">Hybrid</Badge>
              )}
            </div>

            {/* Phần mô tả chi tiết */}
            <div>
              <h6>Mô tả:</h6>
              {/* Gọi function getDescription để tạo mô tả tự động */}
              <p className="text-muted">{getDescription(orchid)}</p>
            </div>
          </Col>
        </Row>
      </Modal.Body>

      {/* Footer của modal với nút đóng */}
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrchidDetailModal;
