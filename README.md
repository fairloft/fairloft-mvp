# 🏌️‍♂️ Fairloft MVP

This repository contains the **Fairloft MVP** — a TypeScript monorepo with both **B2C** and **C2C** marketplace features, plus admin tooling, scrapers, and backend functions.

---

## 📂 Project Structure

### **apps/**
- **`apps/web/`**  
  Main **user-facing frontend** built with **Next.js** + **Tailwind CSS**.  
  Includes:
  - B2C marketplace UI (price comparison, product details)
  - C2C marketplace UI (map views, geo listings)
  - User profiles & authentication

- **`apps/admin/`**  
  Separate **internal dashboard** for QA and moderation:  
  - Review merged product listings  
  - Fix or enrich product data  
  - Moderate seller activity  

---

### **functions/**
- **`functions/scraping/`**  
  Web scrapers (TypeScript) for multiple retailers  
  - Uses **Puppeteer** / **Playwright**  
  - Example: `golftown.ts`, `pgatoursuperstore.ts`  
  - Can run as **Firebase Cloud Functions** or a Node.js server with scheduled triggers

- **`functions/api/`**  
  Backend APIs for:
  - Product normalization
  - Scheduled scraping triggers
  - Any server logic the frontend needs

- **`functions/auth/`**  
  User verification functions:
  - Email & phone verification
  - Badge awarding for trust system

---

### **shared/**
- **`shared/types/`**  
  Global **TypeScript interfaces** shared across apps and functions  
  Examples:  
  - `Product.ts`  
  - `User.ts`  
  - `Listing.ts`  

- **`shared/utils/`**  
  Reusable helper functions for:
  - Data normalization
  - Price formatting
  - Common transformations

---

### **firestore/**
- **`firestore/rules/`**  
  Firestore security rules (`firestore.rules`) and index configuration.

---

### **scripts/**
- Deployment scripts
- Data seeding tools
- Utility CLI scripts

---

## 🚀 Tech Stack

| Layer       | Tech |
|-------------|------|
| Frontend    | Next.js, Tailwind CSS |
| Backend     | Node.js, Firebase Functions |
| Database    | Firebase Firestore |
| Scraping    | Puppeteer / Playwright |
| Maps        | Mapbox / Leaflet.js |
| Auth        | Firebase Auth |
| Storage     | Firebase Storage / Cloudinary |
| Email       | SendGrid |

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Run frontend (web app)
cd apps/web
npm run dev
