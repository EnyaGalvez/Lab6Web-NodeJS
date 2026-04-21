import http from "http"
import fs from "fs/promises"
import path from "path"

const PORT = 3000

const server = http.createServer(async (req, res) => {
  if (req.url === "/info") {
    /* Segunda corrección: 
    * 1. application-json estaba mal escrito, debia ser application/json (slash, no gión), al poner un '-' el
    *    cliente no interpreta la respuesta como JSON.
    * 2. la ruta tiene Content-Type, pero el application/json responde en texto plano, lo que es inconsistente. 
    */
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ message: "Ruta de información" }))
    return
  }

  if (req.url === "/api/student") {
    const filePath = path.join(process.cwd(), "datos.json")
    /* Tercera corrección:
    * El Promise estaba sin resolver, sin await, texto es un objeto Promise y al ejecutar JSON.stringify(texto)
    * se obtiene un resultado vacío. Al agregar await, se espera la Promise de fs.readFile, permitiendo que se 
    * obtenga el contenido real del archivo.
    */
    const texto = await fs.readFile(filePath, "utf-8")
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(texto))
    return
  }

  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Ruta no encontrada")
}) //Primera Corrección: Cierre correcto del callback de createServer (faltaba el paréntesis de cierre)

server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3000")
}