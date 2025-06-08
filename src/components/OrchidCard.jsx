// Import Card component từ React Bootstrap để tạo card layout
import { Card } from "react-bootstrap";
// Import icons ngôi sao từ react-icons/fa để hiển thị rating
import { FaStar, FaRegStar } from "react-icons/fa";

/**
 * Component hiển thị thông tin cơ bản của một hoa lan dạng card
 * @param {Object} orchid - Object chứa thông tin hoa lan (name, image, rating...)
 * @param {Function} onOrchidClick - Callback function được gọi khi user click vào card
 */
function OrchidCard({ orchid, onOrchidClick }) {
  // Destructure để lấy ra các thuộc tính cần thiết từ orchid object
  const { name, image, origin, color, rating, isSpecial, isNatural, category } =
    orchid;

  /**
   * Hàm render ngôi sao dựa trên rating (1-5)
   * Tách riêng thành function để code dễ đọc và có thể tái sử dụng
   * @param {number} rating - Số sao từ 1-5
   * @returns {Array} Array các JSX elements chứa icon sao
   */
  const renderStars = (rating) => {
    const stars = []; // Mảng chứa các icon sao
    const maxStars = 5; // Tổng số sao tối đa

    // Vòng lặp tạo 5 ngôi sao
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        // Nếu i <= rating thì tạo sao đầy (FaStar)
        stars.push(<FaStar key={i} style={{ color: "#ffc107" }} />);
      } else {
        // Nếi i > rating thì tạo sao rỗng (FaRegStar)
        stars.push(<FaRegStar key={i} style={{ color: "#ffc107" }} />);
      }
    }

    return stars;
  };

  /**
   * Hàm xử lý khi user click vào card
   * Gọi callback function từ parent component và truyền orchid data
   */
  const handleClick = () => {
    // Kiểm tra xem callback function có tồn tại không trước khi gọi
    if (onOrchidClick) {
      onOrchidClick(orchid);
    }
  };
  return (
    <Card
      className="m-2 orchid-card"
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={handleClick} // Gắn event handler cho click
    >
      {/* Hình ảnh hoa lan */}
      <Card.Img
        variant="top"
        src={image}
        style={{
          objectFit: "cover", // Giữ tỷ lệ ảnh, cắt phần thừa nếu cần
          width: "100%",
          height: "200px", // Chiều cao cố định cho tất cả ảnh
        }}
        alt={name} // Alt text cho accessibility
      />

      {/* Nội dung card */}
      <Card.Body>
        {/* Tên hoa lan */}
        <Card.Title>{name}</Card.Title>

        {/* Thông tin chi tiết */}
        <Card.Text>
          <strong>Origin:</strong> {origin}
          <br />
          <strong>Color:</strong> {color}
          <br />
          <strong>Category:</strong> {category}
          <br />
          {/* Hiển thị rating bằng ngôi sao */}
          <strong>Rating:</strong> {renderStars(rating)}
          <br />
          {/* Conditional rendering cho badges */}
          {/* Chỉ hiển thị badge "Special" nếu isSpecial = true */}
          {isSpecial && <span className="badge bg-warning">Special</span>}
          {/* Hiển thị "Natural" hoặc "Hybrid" dựa trên isNatural */}
          {isNatural ? (
            <span className="badge bg-success ms-1">Natural</span>
          ) : (
            <span className="badge bg-secondary ms-1">Hybrid</span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OrchidCard;
