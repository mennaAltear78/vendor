# 🏨 Vendor Hotel Management System

A full-featured hotel and tour management dashboard built with **React**, offering secure authentication, dynamic CRUD operations, responsive design, and insightful vendor statistics.

link drive to see the project video https://drive.google.com/file/d/1ETGbwAud8fwhiberYH9c30cIHh7KqO4E/view?usp=sharing
---

## 🔐 Authentication

- Implements secure authentication using **Access Token** and **Refresh Token**.
- Utilizes **Axios interceptors** to manage token expiration and automate refresh logic.
- Supports user account creation and password update functionalities.

---

## 📊 Vendor Dashboard & Statistics

- Users land on a dashboard displaying key vendor statistics post-login.
- Interactive charts display:
  - Number of hotels managed
  - Number of rooms available
  - Reviewing status

---

## 🏨 Hotel Management

- Users can:
  - Create new hotels
  - Upload hotel images after creation
  - Add multiple rooms per hotel
- If no rooms exist, the hotel card displays an 'Add Room' icon.
- Edit and update hotel information is fully supported.

---

## 📋 Hotel Listing Features

- View and manage all hotels with:
  - **Pagination**
  - **Sorting** (by name, date added, price range)
  - **Filtering** (by city, facilities, star rating)
  - **Search** (by name or location)
- Create new hotels directly from the listing.
- Clicking a hotel opens a **Drawer** with detailed information and editing options.

---

## 🛏 Room Listing Features

- Accessed via the 'Rooms' button on hotel cards.
- Displays all rooms within a hotel, with:
  - **Pagination**
  - **Sorting & Filtering** (by price, type, availability)
  - **Search** capability
  - Room creation and detailed room **Drawer** for viewing/editing

---

## 🧭 Tour Management Features

- Vendors can manage tour packages:
  - Linked to specific hotels or standalone
- Capabilities include:
  - Creating tour packages with details (name, duration, itinerary, price, images)
  - Editing and updating tours
  - Filtering/searching by location, duration, price
  - Managing booking settings, availability, and multilingual descriptions (if enabled)

---

## 🛠 Technologies Used

### Frontend
- **React (CRA)**
- **JavaScript**

### State Management
- `useContext` – local scoped state
- `Redux Toolkit` – global state (CRUD operations)

### Form Validation
- **Zod** – schema-based validation for forms

### Routing
- **React Router DOM**

### HTTP & Authentication
- **Axios** – API communication with auth interceptors

### Styling & UI
- **TailwindCSS** – utility-first styling
- Fully responsive layout (desktop & mobile)

### Charts
- **ReactApexChart** – interactive statistics and vendor data visualization

---

## ⚙️ Setup & Installation

To run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/mennaAltear78/vendor.git

# 2. Navigate to the project directory
cd vendor

# 3. Install dependencies
npm install

# 4. Start the application
npm start
