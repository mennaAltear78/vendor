# Vendor Hotel and Tours Management System

A web-based dashboard built with **React** and **JavaScript** to manage vendors, hotels, rooms, and tour packages with full CRUD operations, secure authentication, and a responsive interface.

---

## 📋 Table of Contents

1. [Authentication](#authentication)
2. [Vendor Dashboard & Statistics](#vendor-dashboard--statistics)
3. [Hotel Management](#hotel-management)
4. [Hotel Listing Features](#hotel-listing-features)
5. [Room Listing Features](#room-listing-features)
6. [Tour Management Features](#tour-management-features)
7. [Technologies Used](#technologies-used)
8. [Setup & Installation](#setup--installation)
9. [Conclusion](#conclusion)

---

## 🔐 Authentication

- Implements secure authentication using **Access Token** and **Refresh Token**.
- Utilizes **Axios interceptors** to handle token expiration and automatic refresh.
- Includes user account creation and password update functionality.

---

## 📊 Vendor Dashboard & Statistics

- After login, users land on a **dashboard with vendor statistics**.
- Interactive charts visualize key metrics such as:
  - Number of hotels managed
  - Number of available rooms
  - Reviewing status

---

## 🏨 Hotel Management

- Users can:
  - Create new hotels
  - Upload hotel images after creation
  - Add multiple rooms per hotel
- If no rooms are added, an **'Add Room' icon** is shown on the hotel card.
- Supports editing/updating hotel information.

---

## 📋 Hotel Listing Features

- Lists all hotels with:
  - Pagination
  - Sorting (by name, date, price)
  - Filtering (by city, facilities, rating)
  - Search (by name or location)
  - Add New Hotel
- Clicking on a hotel opens a **Drawer** with detailed hotel info.
- Allows editing of hotel details, including facilities and images.

---

## 🛏️ Room Listing Features

- Accessible via the **'Rooms' button** on each hotel card.
- Displays rooms with:
  - Pagination
  - Sorting & Filtering (by price, type, availability)
  - Search functionality
  - Add New Room
- Room detail **Drawer** includes:
  - View/edit room information

---

## 🧭 Tour Management Features

- Vendors can manage **tours linked to hotels or standalone**.
- Key features:
  - Create/edit tour packages with name, duration, itinerary, price, and images
  - Filter and search tours by location, duration, or price
- Tours support:
  - Booking settings
  - Availability status
  - Multilingual descriptions (if enabled)

---

## 🧰 Technologies Used

### Frontend
- React (Create React App)
- JavaScript

### State Management
- `useContext` – local state
- `Redux Toolkit` – global state (CRUD)

### Form Validation
- `Zod` – schema-based validation

### Routing
- `React Router DOM`

### HTTP Requests
- `Axios` – with interceptors for authentication

### Styling & UI
- `TailwindCSS` – responsive, utility-first design

### Charts & Visualization
- `ReactApexChart` – for interactive data visualization

---

## ⚙️ Setup & Installation

To run the project locally:

```bash
git clone https://github.com/mennaAltear78/vendor.git
cd vendor
npm install
npm start

