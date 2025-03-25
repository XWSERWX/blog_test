# Project README

## Table of Contents
- [How to Setup and Run](#how-to-setup-and-run)
- [Assumptions or Limitations](#assumptions-or-limitations)
- [API Integrations](#api-integrations)
- [Deployment](#deployment)

---

## How to Setup and Run

### Prerequisites
Before setting up the project, make sure you have the following installed:
- **Node.js** (version 16 or higher)
  [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) 
  If you prefer Yarn, feel free to install it globally.

### Setup Instructions

1. Clone the repository:
   `git clone https://github.com/XWSERWX/blog_test.git`
   `cd your-project`

2. Install dependencies:
   Using npm:
   `npm install`
   Or using Yarn:
   `yarn install`

3. Set up environment variables:
   Create a `.env.local` file at the root of the project and add your configuration (e.g., API keys or database credentials). You can find the required variables in the `.env.example` file.

4. Run the project:
   Start the development server:
   Using npm:
   `npm run dev`
   Or using Yarn:
   `yarn dev`

---

## Assumptions or Limitations

- This project assumes that you are using a modern version of Node.js (v16 or higher).
- The project uses React and Next.js, so familiarity with these technologies is required.
- The backend is integrated with third-party APIs like JSONPlaceholder, so internet access is needed for API calls to function.
- The project is currently intended to be run in a development environment. Deployment instructions are provided in a separate section.

---

## API Integrations

The project integrates with JSONPlaceholder for fetching and displaying blog posts. The API endpoints being used are as follows:
- **GET /posts**: Fetches a list of all blog posts.
- **GET /posts/{id}**: Fetches a specific post by its ID, using the dynamic route `[slug]`.

Ensure that the API calls are correctly handled by Axios in the `api` directory. Each call corresponds to a specific component or page that uses the fetched data.

---

## Deployment

1. **Build the application**:
   To build the application for production, run:
   `npm run build`
   Or using Yarn:
   `yarn build`

2. **Deploy**:
    The application is available at:
   `https://blog-test.vercel.app`.