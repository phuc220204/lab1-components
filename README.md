# 🌺 Orchids Gallery - Lab 1 Components

A beautiful and responsive React application showcasing an orchid gallery with modern UI components.

## ✨ Features

- **Modern React Components**: Built with functional components and hooks
- **Responsive Design**: Mobile-first approach with React Bootstrap
- **Interactive Gallery**: Click-to-view orchid details with modal
- **Dynamic Rating System**: Star-based rating display with React Icons
- **Local Image Assets**: Optimized placeholder images for each orchid
- **Smooth Animations**: CSS transitions and hover effects
- **Clean UI/UX**: Natural green & flower pink color palette

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: React Bootstrap + Custom CSS
- **Icons**: React Icons (Font Awesome)
- **Build Tool**: Vite
- **Package Manager**: Yarn

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/phuc220204/lab1-components.git
cd lab1-components
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── GalleryHeader.jsx # Gallery title section
│   ├── Orchids.jsx     # Main orchids grid
│   ├── OrchidCard.jsx  # Individual orchid card
│   └── OrchidDetailModal.jsx # Detail modal
├── data/               # Static data
│   └── ListOfOrchids.js # Orchids data with local images
├── assets/orchids/     # Local placeholder images
└── App.css            # Global styles and responsive design
```

## 🎨 Design Features

- **Responsive Grid Layout**: Adapts from 1-4 columns based on screen size
- **Card Hover Effects**: Smooth scale and shadow transitions
- **Image Optimization**: Fixed aspect ratio with object-fit cover
- **Typography**: Nunito font family for modern look
- **Color Scheme**: Natural green (#2f5d50) and flower pink (#f28ab2)

## 📱 Responsive Breakpoints

- **Mobile**: ≤576px (1 column)
- **Tablet**: 577px-768px (2 columns)  
- **Desktop**: 769px-1399px (3 columns)
- **Large Desktop**: ≥1400px (4+ columns)

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 📝 Version History

- **v1.0 (Final-1.0)** - Complete orchid gallery with local images and responsive design

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for educational purposes.

---

Built with ❤️ using React + Vite
