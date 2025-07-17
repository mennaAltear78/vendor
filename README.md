# 🏨 Vendor Hotel Management System
<img width="1879" height="930" alt="image" src="https://github.com/user-attachments/assets/1b13c9b7-71ec-44a2-ab79-69ed7d6b4f75" />

A full-featured hotel and tour management dashboard built with **React**, offering secure authentication, dynamic CRUD operations, responsive design, and insightful vendor statistics.

---

## 🔐 Authentication

- Implements secure authentication using **Access Token** and **Refresh Token**.
- Utilizes **Axios interceptors** to manage token expiration and automate refresh logic.
- Supports user account creation and password update functionalities.

---

## 📊 Vendor Dashboard & Statistics
<img width="1886" height="947" alt="image" src="https://github.com/user-attachments/assets/81fa5c92-5942-4ef4-bd3b-a5f0933db602" />

- Users land on a dashboard displaying key vendor statistics post-login.
- Interactive charts display:
  - Number of hotels managed
  - Number of rooms available
  - Reviewing status

---

## 🏨 Hotel Management
<img width="1891" height="946" alt="image" src="https://github.com/user-attachments/assets/e9b770a2-27da-416b-9c6b-2c0bbc1d6b1f" />

- Users can:
  - Create new hotels
  - Upload hotel images after creation
  - Add multiple rooms per hotel
- If no rooms exist, the hotel card displays an 'Add Room' icon.
- Edit and update hotel information is fully supported.

---

## 📋 Hotel Listing Features
<img width="1890" height="943" alt="image" src="https://github.com/user-attachments/assets/60812b7a-d0d8-470a-8e9c-481b75171151" />


- View and manage all hotels with:
  - **Pagination**
  - **Sorting** (by name, date added, price range)
  - **Filtering** (by city, facilities, star rating)
  - **Search** (by name or location)
- Create new hotels directly from the listing.
- Clicking a hotel opens a **Drawer** with detailed information and editing options.

---

## 🛏 Room Listing Features
<img width="1853" height="928" alt="image" src="https://github.com/user-attachments/assets/ebd34cb8-aa4e-4c5b-a34a-c4c2a99a1375" />

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

link project video https://drive.google.com/file/d/1A2SsRunSS-17-6r12PaRnzmhzVaVIufp/view?usp=sharing 
linkeIn post https://www.linkedin.com/posts/menna-altear-b308b6347_graduationproject-react-javascript-activity-7351606749348405249-i1-w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFbO-dQBpaRtXzGSZyzp0qJJE4JrVnPmeYM 

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



