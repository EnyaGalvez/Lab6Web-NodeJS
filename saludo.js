export function obtenerSaludo() {
    const ahora = new Date()
    const hora = ahora.getHours()

    let saludo

    if (hora >= 3 && hora <12) {
        saludo = "Buenos días"
    } else if (hora >= 12 && hora < 19) {
        saludo = "Buenas tardes"
    } else {
        saludo = "Buenas noches"
    }
    return `¡${saludo}! aquí visualizarás la información de los estudiantes`
}