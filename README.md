# CA Monk - Blog Application Assignment

Welcome to the CA Monk Blog Application assignment! This project tests your ability to build a modern React application with state management, styling, and component libraries.

## Installation

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd camonk-interview
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install required libraries** , ie, TanStack Query, Tailwind CSS, and shadcn/ui
4. **Start the JSON Server (Backend API)**

   ```bash
   npm run server
   ```

   The API will run on `http://localhost:3001`

5. **Start the Development Server (in a new terminal)**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`

### Technologies

- ✅ **TanStack Query** - For server state management and data fetching
  - 📚 [Documentation](https://tanstack.com/query/latest)
- ✅ **Tailwind CSS** - For styling
  - 📚 [Documentation](https://tailwindcss.com/docs)
- ✅ **shadcn/ui** - For UI components
  - 📚 [Documentation](https://ui.shadcn.com/)

### API Endpoints

The JSON Server provides the following endpoints:

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| GET    | `/blogs`     | Get all blogs             |
| GET    | `/blogs/:id` | Get a specific blog by ID |
| POST   | `/blogs`     | Create a new blog         |

## 📂 Project Structure

```text
src/
├── api/            # API service calls (fetch/POST)
├── components/     # Reusable UI components
│   ├── ui/         # Atomic components (Button, Input, Card)
│   ├── BlogCard.tsx# Feed item component
│   ├── BlogList.tsx# Sidebar/Feed container
│   ├── BlogDetail.tsx# Reading view
│   └── BlogSkeleton.tsx # Skeleton loading states
├── hooks/          # Custom TanStack Query hooks (useBlogs)
├── lib/            # Utility functions (cn helper)
└── App.tsx         # Routing and Layout configuration

```
