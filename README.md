# Livre Mercado

**Livre Mercado** is a prototype e-commerce platform built for study purposes. It showcases key e-commerce functionalities such as product listing, detailed product pages, and an add-to-cart feature. This project is designed as a full-stack application, utilizing **Next.js** and **React** for the frontend and **Express.js** with **SQLite3** for the backend.

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 22.x or higher recommended)
- **npm** (included with Node.js) or **yarn**

### Installation

1. **Clone the repository**:

```shell
git clone https://github.com/7robertodantas/livremercado.git
cd livremercado
```

2. **Install dependencies**:

Run the following commands to install dependencies for both the frontend and backend:

```shell
npm --prefix ./frontend install  
npm --prefix ./backend install
```

## Running the Project

### 1. Start the Backend

Start the development server for the backend:

```shell
npm --prefix ./backend run dev
```

By default, the backend server will be accessible at [http://localhost:4000](http://localhost:4000).

### 2. Start the Frontend

In a separate terminal, start the development server for the frontend:

```shell
npm --prefix ./frontend run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```plaintext
.
├── frontend/    # Next.js application (React-based frontend)  
├── backend/     # Express.js application (API and database logic)  
├── README.md    # Project documentation  
└── ...
```

## Features

- **Product Listing**: Browse a list of available products.
- **Product Details**: View detailed information about a specific product.
- **Add to Cart**: Add items to a shopping cart for potential checkout.

This prototype is designed to simulate a basic e-commerce flow while keeping the architecture simple and educational.

## Additional Notes

- **Environment Variables**: Ensure `.env` files are set up in both `frontend` and `backend` directories. Refer to the provided `.env.example` files for required variables.
- **Scripts**: Common commands include:
  - dev - Run the development server.
  - build - Compile the application for production.
  - start - Run the production server.
- **Database**: The backend uses SQLite3 for database operations. The database file is automatically created in the `backend/db` directory.

## Troubleshooting

- Ensure all dependencies are installed and the correct Node.js version is used.
- Check that no other services are running on ports `3000` (frontend) or `4000` (backend), or update the `.env` files to change the ports.

