<div align="center">
<a href="https://github.com/fahmirizalbudi/qraft" target="blank">
<img src="./public/logo.svg" width="200" alt="Qraft Logo" />
</a>

<br />
<br />

![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

</div>

<br/>

## Qraft

Qraft is a lightweight, modular, and fast REST API for generating QR codes. Built with Node.js, Express, and TypeScript, it provides a simple interface to generate high-quality QR code images instantly from any text or URL.

## Features

- **Standardized API Responses:** Implements consistent error handling and structured responses for a predictable developer experience.
- **Dual Response Modes:** Automatically detects browser requests to serve a SEO-friendly HTML preview, while providing raw binary PNG data for API clients.
- **Modular Architecture:** Engineered with a clean Controller-Service-Route pattern for high maintainability and scalability.
- **SVG Branding:** Includes a custom-designed SVG logo and favicon support directly integrated into the API.
- **Full TSDoc Documentation:** Every component is documented following TSDoc standards for superior developer experience.
- **Fast Performance:** Minimal overhead ensuring rapid QR code generation and delivery.
- **TypeScript Support:** Fully typed codebase ensuring robust development and fewer runtime errors.

## Tech Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **qrcode**: A powerful QR code generation library for Node.js.

## Getting Started

To set up a local instance of this project, follow these instructions.

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended).
- **npm** (Node Package Manager).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/fahmirizalbudi/qraft.git
   cd qraft
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the project:**

   ```bash
   npm run build
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

## Usage

### QR Code Generation

Generates a QR code for the provided text.

- **URL:** `GET /qr?text=...`
- **Query Params:**
  - `text`: (Required) The string or URL to encode.
- **Response:**
  - `image/png` for both browser and API clients. No HTML wrapper or design is used.

### Health Check

Check the server status.

- **URL:** `GET /health`
- **Response:**
  ```json
  {
    "status": "success",
    "message": "Server is healthy",
    "timestamp": "2026-02-22T17:00:00.000Z"
  }
  ```

> The API runs on [http://localhost:3000](http://localhost:3000) by default.

## License

All rights reserved. This project is for educational purposes only and cannot be used or distributed without permission.
