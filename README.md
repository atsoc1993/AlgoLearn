# AlgoLearn

**AlgoLearn** is an interactive platform designed to help users learn and practice algorithms revolving around Algorand Smart Contracts. Built with modern web technologies, it provides an intuitive interface and multi-language support to enhance the learning experience.

## 🌐 Live Demo

The application is live and can be accessed here: [https://algo-learn.com](https://algo-learn.com)

## 🚀 Features

- **Interactive Algorithm Practice:** Solve practice problems and see step-by-step implementations of algorithms.
- **Search Functionality:** Quickly find chapters by title, content, or code snippets using a powerful search feature with real-time results.
- **Multi-Language Code Compilation:** Practice, compile, and test algorithms in Python, Java, Go, and more.
- **Algorand SDK Support:** Includes environment setup for **Algorand** code in Python (`py-algorand-sdk`), JavaScript (`algosdk`), and Go (`go-algorand-sdk`).
- **User-Friendly UI:** Clean and responsive design built with Tailwind CSS for an intuitive user experience.
- **State Management:** Efficient state management implemented using React Hooks.
- **Scalable Framework:** Built with Next.js for optimal performance, scalability, and flexibility.

## 🛠️ Technologies Used

| **Category**             | **Technologies/Tools**                                                                                                                                                                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**             | **React**, **Next.js** (TypeScript), **Tailwind CSS**, **Shadcn/UI**, **Lucide React**, **Axios**, **React Suspense**, **Next.js** Image & Link components                                                                                                            |
| **Backend**              | **Next.js API Routes** (for some tasks), **Express/Node.js** server (in separate code-runner context), **Docker** (for ephemeral code execution), **Python** + `py-algorand-sdk`, **Node.js** + `algosdk`, **Go** + pinned `go-algorand-sdk` in a single Docker image |
| **Containerization**     | **Docker** (Alpine-based image containing Python, Node, Go, plus pinned Algorand SDK dependencies)                                                                                                                                                                    |
| **Data Management**      | Static Data Files (`@/data/chapters`)                                                                                                                                                                                                                                 |
| **Development Tools**    | Node.js, npm, **TypeScript**, ESLint, Prettier                                                                                                                                                                                                                        |
| **Version Control**      | **GitHub**                                                                                                                                                                                                                                                            |
| **UI/UX Features**       | Responsive Design, Dark Mode Toggle, Accessibility (ARIA), Dropdown Menus                                                                                                                                                                                             |
| **Icons**                | **Lucide React** Icons                                                                                                                                                                                                                                                |
| **Security**             | Docker-based code isolation for user snippets, external code execution environment with pinned Go modules, error handling & logging                                                                                         |
| **Deployment**           | **Vercel** (for the Next.js frontend), **GCP VM** (e2-micro) hosting Docker-based code-runner backend                                                                                                                                                                |
| **Additional Libraries** | **Axios** for HTTP requests, **React Suspense** for async data, **Shadcn/UI** for component library, plus environment variables & secrets management                                                                                                                  |

## 🛡️ How the Backend Code-Runner Works

1. **User Submits Code**: The user interface sends code (in Python, JavaScript, or Go) and the chosen language to the backend.
2. **Node.js/Express Server**: A dedicated server receives the snippet and orchestrates ephemeral Docker containers.
3. **Docker Container**: The snippet is mounted into a Docker container that already has Python, Node, Go, and the respective Algorand SDKs installed.
4. **Code Execution**: Docker runs the snippet (e.g., `python3 script.py`, `node script.js`, or `go run main.go`). The server captures output or errors.
5. **Result Returned**: Output is sent back to the frontend in real time.

This approach ensures **isolation** (each snippet runs in a fresh environment) and includes **Algorand SDK** capabilities in all three languages for advanced contract interactions.

## 🛡️ Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mibernard/algolearn.git
   cd algolearn
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```
   By default, this starts the Next.js frontend on [http://localhost:3000](http://localhost:3000).

4. **Configure the Backend** (Optional Advanced):
   - If you’re also running the Docker-based code-runner backend locally, you need:
     1. **Docker** installed.
     2. A suitable Docker image built with `go-algorand-sdk`, `py-algorand-sdk`, and `algosdk`.
   - Ensure environment variables for any external compilers or APIs (Judge0, etc.) are configured.

5. **Access the Application**: Open your browser to [http://localhost:3000](http://localhost:3000).

<!--
## 🔑 API Key Setup

To enable the functionality of the embedded code compilers (Judge0, etc.), you need to configure environment variables for API access:

1. **Create a `.env.local` File** in the root directory of the project, not committed to version control.
2. **Add the Following Variables**:
   ```bash
   # Example for Judge0
   RAPIDAPI_KEY=your-rapidapi-key-here
   JUDGE0_HOST=judge0-ce.p.rapidapi.com
   JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com/submissions
   ```
3. **Restart the Development Server** to ensure changes take effect.
-->

## 🌐 Deployment

- The **frontend** is hosted on **Vercel**. Push to the main branch, and Vercel automatically builds and deploys.
- The **Docker-based code-runner** is hosted on a **GCP e2-medium VM** with Docker installed. The Node.js/Express server runs there (via PM2). Adjust your API endpoints to point from the Next.js app to this external service.

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork** the repository.
2. **Create** a feature branch: `git checkout -b feature-name`.
3. **Commit** your changes: `git commit -m "Add a feature"`.
4. **Push** to the branch: `git push origin feature-name`.
5. **Submit** a pull request.

## 📜 License

This project is licensed under the **MIT License**.

## 👩‍💻 Authors

- **Matthew Bernard** - Creator and Maintainer

