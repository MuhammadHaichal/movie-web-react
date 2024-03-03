import dotenv from "dotenv"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

//  run package config
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react()],

    // configuration enviroment variable
    define: {
        "process.env": process.env,
    },
})
