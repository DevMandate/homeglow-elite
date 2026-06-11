# HomeGlow Elite

HomeGlow Elite is a modern cleaning services platform designed to help customers discover services, view completed projects, submit bookings, and stay connected with the business. The platform includes a responsive customer-facing website and an administrative dashboard for managing business operations efficiently.

## Features

### Customer Features

* Service showcase and pricing information
* Interactive gallery with images and videos
* Online booking and quotation requests
* Customer testimonials and reviews
* Newsletter subscription
* Contact and inquiry forms
* Fully responsive design for mobile, tablet, and desktop devices

### Admin Features

* Dashboard overview and analytics
* Booking management
* Gallery management
* Testimonial management
* Newsletter subscriber management
* Content and media administration

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Material UI (MUI)
* Emotion
* Tailwind CSS

### Media Management

* Cloudinary

### Package Management

* PNPM

## Getting Started

### Prerequisites

Ensure you have the following installed:

* Node.js (v18 or later recommended)
* PNPM

Verify installations:

```bash
node -v
pnpm -v
```

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/homeglow-elite.git
```

Navigate to the project directory:

```bash
cd homeglow-elite
```

Install dependencies:

```bash
pnpm install
```

### Environment Variables

Create a `.env` file in the project root and configure the required variables:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

> Never commit your `.env` file to version control.

### Running the Development Server

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:5173
```

### Building for Production

```bash
pnpm build
```

### Previewing the Production Build

```bash
pnpm preview
```

## Project Structure

```text
homeglow-elite/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   └── assets/
├── public/
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Media Management

All gallery images and videos are hosted on Cloudinary to provide:

* Fast global content delivery
* Optimized image transformations
* Video streaming support
* Reduced application bundle size
* Centralized media management

## Deployment

The application can be deployed on platforms such as:

* Vercel
* Netlify
* Cloudflare Pages
* Render

Build command:

```bash
pnpm build
```

Output directory:

```bash
dist
```

## Contributing

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Caleb Wafula (DevMandate)**

Building digital solutions that help businesses streamline operations, improve customer experience, and scale effectively.
