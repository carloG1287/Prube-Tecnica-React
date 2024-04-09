//Se esta creando un archivo de configuracion para el proyecto de react debido a que estoy usando vite vanilla y no vite-React
//aqui estoy usando React como plugin de vite para poder tener una mejor configuracion de react en el proyecto
//ya que lo usare para putno de entrada de la aplicacion

import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()]
})