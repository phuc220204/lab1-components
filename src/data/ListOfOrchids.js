
/**
 * File chứa dữ liệu mẫu cho danh sách các loài hoa lan
 * Sử dụng ES6 import để load hình ảnh từ thư mục assets
 */

// Import tất cả hình ảnh hoa lan từ thư mục assets/orchids
import TaichungBeautyImg from '../assets/orchids/Taichung beauty.jpg';
import BlackBeautyImg from '../assets/orchids/Black Beauty.jpg';
import GoldenSunsetImg from '../assets/orchids/Golden Sunset.jpg';
import WhiteAngelImg from '../assets/orchids/White Angel.jpg';
import RedDragonImg from '../assets/orchids/Red Dragon.jpg';
import BlueMoonImg from '../assets/orchids/Blue Moon.jpg';
import PurpleRainImg from '../assets/orchids/Purple Rain.jpg';
import GreenParadiseImg from '../assets/orchids/Green Paradise.jpg';
import PinkLadyImg from '../assets/orchids/Pink Lady.jpg';
import OrangeFlameImg from '../assets/orchids/Orange Flame.jpg';
import SilverStarImg from '../assets/orchids/Silver Star.jpg';
import CoralDreamImg from '../assets/orchids/Coral Dream.jpg';
import LavenderMistImg from '../assets/orchids/Lavender Mist.jpg';
import CrimsonGloryImg from '../assets/orchids/Crimson Glory.jpg';
import GoldenCrownImg from '../assets/orchids/Golden Crown.jpg';
import MysticMoonImg from '../assets/orchids/Mystic Moon.jpg';

/**
 * Mảng chứa dữ liệu của 16 loài hoa lan
 * Mỗi object trong mảng có cấu trúc:
 * - id: Mã định danh duy nhất (string)
 * - name: Tên hoa lan (string)
 * - rating: Đánh giá từ 1-5 sao (number)
 * - isSpecial: Có phải hoa đặc biệt/quý hiếm không (boolean)
 * - isNatural: Có phải hoa tự nhiên không, false = lai tạo (boolean)
 * - image: Đường dẫn hình ảnh (imported image)
 * - color: Màu sắc chủ đạo (string)
 * - numberOfLike: Số lượt yêu thích (number)
 * - origin: Quốc gia/vùng xuất xứ (string)
 * - category: Loại/họ hoa lan (string)
 */
export const orchids = [
  // Hoa lan đầu tiên - Taichung Beauty: hoa lai tạo đặc biệt từ Đài Loan
  { 
    id: '1',                    // id: mã định danh duy nhất
    name: 'Taichung beauty',    // name: tên hoa lan
    rating: 5,                  // rating: đánh giá 1-5 sao
    isSpecial: true,            // isSpecial: true = hoa đặc biệt/quý hiếm
    isNatural: false,           // isNatural: false = hoa lai tạo, true = tự nhiên
    image: TaichungBeautyImg,   // image: đường dẫn hình ảnh đã import
    color: 'pink',              // color: màu sắc chủ đạo
    numberOfLike: 192,          // numberOfLike: số lượt yêu thích
    origin: 'Taiwan',           // origin: quốc gia/vùng xuất xứ
    category: 'Cattleya'        // category: loại/họ hoa lan
  },
  
  // Hoa lan thứ hai - Black Beauty: hoa tự nhiên từ Mexico
  { id: '2', name: 'Black Beauty', rating: 4, isSpecial: false, isNatural: true, image: BlackBeautyImg, color: 'purple', numberOfLike: 85, origin: 'Mexico', category: 'Catasetum' },
  
  // Hoa lan thứ ba - Golden Sunset: hoa lai tạo đặc biệt từ Thái Lan
  { id: '3', name: 'Golden Sunset', rating: 4, isSpecial: true, isNatural: false, image: GoldenSunsetImg, color: 'yellow', numberOfLike: 156, origin: 'Thailand', category: 'Dendrobium' },
  
  // Các hoa lan còn lại với cấu trúc tương tự
  { id: '4', name: 'White Angel', rating: 5, isSpecial: false, isNatural: true, image: WhiteAngelImg, color: 'white', numberOfLike: 203, origin: 'Philippines', category: 'Phalaenopsis' },
  { id: '5', name: 'Red Dragon', rating: 3, isSpecial: true, isNatural: false, image: RedDragonImg, color: 'red', numberOfLike: 98, origin: 'Vietnam', category: 'Cattleya' },
  { id: '6', name: 'Blue Moon', rating: 4, isSpecial: false, isNatural: true, image: BlueMoonImg, color: 'blue', numberOfLike: 134, origin: 'Indonesia', category: 'Vanda' },
  { id: '7', name: 'Purple Rain', rating: 5, isSpecial: true, isNatural: false, image: PurpleRainImg, color: 'purple', numberOfLike: 178, origin: 'Malaysia', category: 'Oncidium' },
  { id: '8', name: 'Green Paradise', rating: 3, isSpecial: false, isNatural: true, image: GreenParadiseImg, color: 'green', numberOfLike: 87, origin: 'Brazil', category: 'Cattleya' },
  { id: '9', name: 'Pink Lady', rating: 4, isSpecial: true, isNatural: false, image: PinkLadyImg, color: 'pink', numberOfLike: 165, origin: 'Colombia', category: 'Phalaenopsis' },
  { id: '10', name: 'Orange Flame', rating: 5, isSpecial: false, isNatural: true, image: OrangeFlameImg, color: 'orange', numberOfLike: 189, origin: 'Ecuador', category: 'Dendrobium' },
  { id: '11', name: 'Silver Star', rating: 4, isSpecial: true, isNatural: false, image: SilverStarImg, color: 'silver', numberOfLike: 142, origin: 'India', category: 'Vanda' },
  { id: '12', name: 'Coral Dream', rating: 3, isSpecial: false, isNatural: true, image: CoralDreamImg, color: 'coral', numberOfLike: 76, origin: 'Australia', category: 'Cymbidium' },
  { id: '13', name: 'Lavender Mist', rating: 5, isSpecial: true, isNatural: false, image: LavenderMistImg, color: 'lavender', numberOfLike: 198, origin: 'New Zealand', category: 'Oncidium' },
  { id: '14', name: 'Crimson Glory', rating: 4, isSpecial: false, isNatural: true, image: CrimsonGloryImg, color: 'crimson', numberOfLike: 123, origin: 'Costa Rica', category: 'Cattleya' },
  { id: '15', name: 'Golden Crown', rating: 3, isSpecial: true, isNatural: false, image: GoldenCrownImg, color: 'gold', numberOfLike: 91, origin: 'Panama', category: 'Epidendrum' },
  { id: '16', name: 'Mystic Moon', rating: 5, isSpecial: true, isNatural: true, image: MysticMoonImg, color: 'blue', numberOfLike: 210, origin: 'Nepal', category: 'Phalaenopsis' }
];
