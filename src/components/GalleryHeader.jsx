// Import Container từ React Bootstrap để tạo layout responsive
import { Container } from "react-bootstrap";

/**
 * Component hiển thị tiêu đề chính của gallery hoa lan
 * Đây là component đơn giản chỉ để hiển thị text, không có logic phức tạp
 * Sử dụng Container fluid để chiếm toàn bộ chiều rộng màn hình
 */
export default function GalleryHeader() {
  return (
    <Container fluid>
      <div className="gallery-header">
        {/* Tiêu đề chính - được styling trong App.css */}
        <h1>Orchids Gallery</h1>
      </div>
    </Container>
  );
}
