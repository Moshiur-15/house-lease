
# 🏠 HOUSELEASE – FULL STACK PROPERTY RENTAL PLATFORM

**HouseLease** is a feature-rich, full-stack real estate rental platform that empowers users to explore, list, and manage properties seamlessly. With modern UI components, secure authentication, and powerful role-based dashboards for Admins, Sellers, and Buyers – this application streamlines the entire property rental experience from end to end.perties with role-based access for Admins, Sellers, and Buyers.

🔗 **Live Site:** [https://house-lease.vercel.app](https://house-lease.vercel.app)

![HOUSELEASE](/public//3d11125e-afbc-47c4-9eb3-38d659de0952.jpg)

---

## ⚙️ TECH STACK

### ✅ Frontend:
- **Next.js**
- **Tailwind CSS**
- **Shadcn/UI**
- **Magic UI**

### ✅ Backend:
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

### ✅ Authentication & Security:
- **NextAuth.js**
- **Bcrypt**

### ✅ Deployment:
- **Vercel**

# NEXT_DB_CONNECT=your_mongodb_uri
# NEXT_PUBLIC_API_URL=your_api_url
# NEXTAUTH_SECRET=your_secret_key
# NEXTAUTH_URL=http://localhost:3000
# STRIPE_SECRET_KEY=your_stripe_secret_key
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# NEXT_PUBLIC_SERVICE_KEY=your_emailjs_service_key
# NEXT_PUBLIC_TEMPLATE_KEY=your_emailjs_template_key
# NEXT_PUBLIC_KEY=your_emailjs_public_key

## 🚀 MAIN FEATURES

- 🔐 **Role-Based Dashboards** (Admin, Seller, Buyer)
- 🏘️ **Property Listings** with filters, detailed view, and image gallery
- ❤️ **Wishlist** system for buyers
- 💳 **Stripe Payment Integration**
- ✍️ **Blog System** with full CRUD functionalities
- 🛡️ **Secure Authentication** with hashed passwords
- 📱 **Fully Responsive Design** with modern UI components

---

## 📁 ROUTES OVERVIEW

### 🌍 Public Routes:
- `/` – Home
- `/login` – User Login
- `/register` – User Registration
- `/properties` – All Properties
- `/property/:id` – Property Details
- `/blogs` – All Blog Posts
- `/blog/:id` – Single Blog Post
- `/about` – About Us
- `/contact` – Contact Page
- `/gallery` – Image Gallery

---

### 🔧 Admin Dashboard:
- `/admin/users` – Manage Users (Update Role / Delete)
- `/admin/properties` – View & Delete Properties
- `/admin/Blog Management` – View, Update & Delete Blogs
- `/admin/Add Blog` – Add New Blog
- `/profile` – Admin Profile Update

---

### 🏷️ Seller Dashboard:
- `/seller/dashboard` – Seller Overview
- `/seller/properties` – Manage Posted Properties (Edit/Delete)
- `/seller/add-property` – Add New Property
- `/seller/bookings` – View/Manage Property Bookings
- `/profile` – Seller Profile Update

---

### 👤 Buyer Dashboard:
- `/home` – Property Browsing
- `/wishlist` – Favorite Properties
- `/bookings` – Manage Bookings
- `/payment` – Payment History
- `/profile` – Buyer Profile Update