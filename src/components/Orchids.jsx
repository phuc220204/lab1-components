// Import React và hook useState để quản lý state
import React, { useState } from "react";
// Import Container từ React Bootstrap cho layout
import { Container } from "react-bootstrap";
// Import dữ liệu danh sách hoa lan từ file data
import { orchids } from "../data/ListOfOrchids";
// Import các component con
import OrchidCard from "./OrchidCard"; // Component hiển thị từng card hoa lan
import OrchidDetailModal from "./OrchidDetailModal"; // Component modal chi tiết

/**
 * Component chính hiển thị danh sách tất cả các hoa lan
 * Quản lý state cho việc mở/đóng modal chi tiết
 * Render danh sách OrchidCard và modal OrchidDetailModal
 */
function Orchids() {
  // State để lưu hoa lan được chọn (null = không có hoa nào được chọn)
  // Khi user click vào card, hoa lan đó sẽ được set vào state này
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  /**
   * Hàm xử lý khi user click vào một OrchidCard
   * @param {Object} orchid - Object chứa thông tin hoa lan được click
   */
  const handleOrchidClick = (orchid) => {
    // Set hoa lan được chọn vào state để mở modal
    setSelectedOrchid(orchid);
  };

  /**
   * Hàm xử lý đóng modal chi tiết
   * Set selectedOrchid về null để ẩn modal
   */
  const handleCloseModal = () => {
    setSelectedOrchid(null);
  };

  return (
    <Container fluid className="orchids-container">
      {/* Grid container chứa tất cả các OrchidCard */}
      <div className="grid-container">
        {/* 
          Dùng map() để render một OrchidCard cho mỗi hoa lan trong array
          Key={o.id} để React có thể track từng item hiệu quả
          Truyền orchid data và callback function qua props
        */}
        {orchids.map((o) => (
          <OrchidCard key={o.id} orchid={o} onOrchidClick={handleOrchidClick} />
        ))}
      </div>

      {/* 
        Modal chi tiết hoa lan
        - show={selectedOrchid !== null}: chỉ hiển thị khi có hoa lan được chọn
        - orchid={selectedOrchid}: truyền data hoa lan được chọn
        - onHide={handleCloseModal}: callback để đóng modal
      */}
      <OrchidDetailModal
        orchid={selectedOrchid}
        show={selectedOrchid !== null}
        onHide={handleCloseModal}
      />
    </Container>
  );
}

export default Orchids;
