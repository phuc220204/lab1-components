// Import các components con để lắp ráp thành ứng dụng hoàn chỉnh
import AppNavbar from "./components/Navbar"; // Component thanh điều hướng
import GalleryHeader from "./components/GalleryHeader"; // Component tiêu đề gallery
import Orchids from "./components/Orchids"; // Component hiển thị danh sách hoa lan
import "./App.css"; // Import file CSS để styling cho toàn bộ ứng dụng

/**
 * Component chính của ứng dụng - nơi lắp ráp tất cả các component con
 * Đây là component gốc (root component) chứa toàn bộ layout của website
 * Layout theo thứ tự: Navbar -> Header -> Danh sách hoa lan
 */
function App() {
  return (
    <div className="App">
      {/* Thanh điều hướng ở đầu trang */}
      <AppNavbar />

      {/* Tiêu đề chính của gallery */}
      <GalleryHeader />

      {/* Phần hiển thị danh sách các hoa lan */}
      <Orchids />
    </div>
  );
}

export default App;
