# Lab6Web-NodeJS
Laboratorio 6: NODE JS

## Parte 1
### Ejecución inicial del servidor
````
file:///~/tercerUbuntu/Lab6NodeJs/servidor.js:30
}
^

SyntaxError: missing ) after argument list
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:152:18)
    at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:298:14)
    at async link (node:internal/modules/esm/module_job:67:21)

Node.js v18.19.1
````
### Solución de errores
La solución de cada uno de los errores se encuentra documentada en el nuevo archivo 'servidor.js', <br>
a continuación se le muestra un resumen de las resoluciones:


#### Mensajes de error
A continuación se muestran los mensajes de error obtenidos en pruebas realizadas después de cada resolución:
1. Se presenta nuevo error de inexistencia de parentesis porque hacía falta en función listen:
````
file:///~/tercerUbuntu/Lab6NodeJs/servidor.js:28
}
^

SyntaxError: missing ) after argument list
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:152:18)
    at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:298:14)
    at async link (node:internal/modules/esm/module_job:67:21)
````
2. Al momento de abrir el servidor en /info se muestra este error en el localhost no se muestran errores, pero no se muestra un JSON
```
Ruta de informaciÃ³n
```
Además, al intentar abrir /api/student el JSON se muestra vacío en el localhost

3. Si se corrije el codigo para /api/student y no se crea el archivo datos.json se muestra este error a continuación, porque ahora que si espera el Promise no logra ejecutarse el servidor.
```

// Mensaje de error en PowerShell
node:internal/process/promises:288
            triggerUncaughtException(err, true /* fromPromise */);
            ^

[Error: ENOENT: no such file or directory, open '~/tercerUbuntu/Lab6NodeJs/datos.json'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/egalve/tercerUbuntu/Lab6NodeJs/datos.json'
}

Node.js v18.19.1
```
