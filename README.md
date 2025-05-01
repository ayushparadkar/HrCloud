# HR Cloud UI

A modern, responsive HR management frontend built with **React**, **Tailwind CSS**, and **Lucide React Icons**. This project includes pages for About, Services, Contact, and more—designed to deliver a clean, professional user experience for HR software platforms.

---

## 🚀 Features

- ✅ React-based modular components
- 🎨 Tailwind CSS for styling
- 🔍 Lucide-react icons for a lightweight, beautiful UI
- 📱 Fully responsive layout
- 📬 Contact form with optional embedded Google Map
- 🃏 Service cards, company mission, team showcase, and more

---

## 💠 Tech Stack

- **React** – Component-based UI framework
- **Tailwind CSS** – Utility-first CSS framework
- **lucide-react** – Feather-style SVG icon pack

---

## 🛆 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/hr-cloud-ui.git
cd hr-cloud-ui
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
# or
npm start
```

4. **Build for production**

```bash
npm run build
```

---

## 🧰 Configuration Notes

### Tailwind CSS

Tailwind is already configured via `postcss.config.js` and `tailwind.config.js`.\
Ensure you have the following in your `tailwind.config.js`:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
```

### Lucide Icons

Installed via:

```bash
npm install lucide-react
```

Use like this in components:

```jsx
import { UserCheck } from "lucide-react";

<UserCheck className="text-blue-600 w-6 h-6" />;
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Services.jsx
│   └── ...
├── assets/
│   └── images, icons
├── App.jsx
├── index.jsx
└── styles/
    └── tailwind.css
```
