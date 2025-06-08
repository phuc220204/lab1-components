import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { orchids } from "../data/ListOfOrchids";
import OrchidCard from "./OrchidCard";
import OrchidDetailModal from "./OrchidDetailModal";

function Orchids() {
  // State quản lý hoa lan được chọn
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  // Hàm xử lý khi click vào card
  const handleOrchidClick = (orchid) => {
    setSelectedOrchid(orchid);
  };

  // Hàm đóng modal
  const handleCloseModal = () => {
    setSelectedOrchid(null);
  };  return (
    <Container fluid className="orchids-container">
      <div className="grid-container">
        {orchids.map((o) => (
          <OrchidCard key={o.id} orchid={o} onOrchidClick={handleOrchidClick} />
        ))}
      </div>

      {/* Modal chi tiết hoa lan */}
      <OrchidDetailModal
        orchid={selectedOrchid}
        show={selectedOrchid !== null}
        onHide={handleCloseModal}
      />
    </Container>
  );
}

export default Orchids;
