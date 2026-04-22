import http from "http"
import fs from "fs/promises"
import path from "path"
import { obtenerSaludo } from "./saludo.js"

const PORT = 3000

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Servidor activo")
    return
  }

  if (req.url === "/info") {
    const info = {
      mensaje: "El Server de información académica funcionando correctamente",
      curso: "Sistemas y tecnologías web",
      tecnologia: "Node.js - modulo http nativo"

    }
    /* Tercera corrección: 
    * 1. application-json estaba mal escrito, debia ser application/json (slash, no gión), al poner un '-' el
    *    cliente no interpreta la respuesta como JSON.
    * 2. la ruta tiene Content-Type, pero el application/json responde en texto plano, lo que es inconsistente. 
    */
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(info, null, 2))
    return
  }

  if (req.url === "/saludo") {
    const mensaje = obtenerSaludo()
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
    res.end(mensaje)
    return
  }

  if (req.url === "/api/student") {
    /* Cuarta corrección:
    * 1. El Promise estaba sin resolver, sin await, texto es un objeto Promise y al ejecutar JSON.stringify(texto)
    *    se obtiene un resultado vacío. Al agregar await, se espera la Promise de fs.readFile, permitiendo que se 
    *    obtenga el contenido real del archivo.
    * 2. No existe un archio datos.json, hay que crearlo en la raíz del proyecto
    * 3. El stringify hace que el json no se mire bien en eln navegador para este caso
    */
    const filePath = path.join(process.cwd(), "datos.json")
    const texto = await fs.readFile(filePath, "utf-8")
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(texto)
    return
  }

  if (req.url === "/api/status") {
    const status = {
      ok: true,
      status: "online",
      puerto: PORT
    }
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(status, null, 2))
    return
  }

  const respuesta404 = {
    error: "Ruta no encontrada",
    rutaVisitada: req.url,
    mensaje: `La ruta "${req.url}" no existe en este servidor.`
  }

  res.writeHead(404, { "Content-Type": "application/json" })
  res.end(JSON.stringify(respuesta404, null, 2))
}) // Primera Corrección: Cierre correcto del callback de createServer (faltaba el paréntesis de cierre)

/* Segunda corrección: 
*  1. El servidor no estaba escuchando ningún puerto porque no estaba ingresado correctamente 
*  2. Cierre correcto del callback de listen (faltaba el paréntesis de cierre)
*/
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
  console.log(`Rutas disponibles:`)
  console.log(`  GET /`)
  console.log(`  GET /info`)
  console.log(`  GET /saludo`)
  console.log(`  GET /api/student`)
  console.log(`  GET /api/status`)
})