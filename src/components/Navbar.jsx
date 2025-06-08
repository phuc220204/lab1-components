// Import các components từ React Bootstrap để tạo navbar responsive
import { Navbar, Nav, Container } from "react-bootstrap";

/**
 * Component thanh điều hướng (Navigation Bar) ở đầu trang
 * Sử dụng React Bootstrap để tạo navbar responsive với menu collapse trên mobile
 * Chứa logo/brand và các link điều hướng (Home, About, Contact)
 */
export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      {/* Container fluid để navbar chiếm toàn bộ chiều rộng */}
      <Container fluid className="px-0">
        {/* Brand/Logo với emoji hoa và text */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          🌸 <span className="ms-2">Orchids</span>
        </Navbar.Brand>

        {/* Nút toggle để mở/đóng menu trên mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Phần menu có thể collapse trên mobile */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav links được căn phải (ms-auto = margin-start: auto) */}
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
