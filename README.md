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
A continuación se muestran los mensajes de error obtenidos en pruebas realizadas después de la resolución 1 o más errores:
* Mensaje de error después de las primeras 2 correcciones:
````
import http from "http"
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1274:20)
    at Module._compile (node:internal/modules/cjs/loader:1320:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    at Module.load (node:internal/modules/cjs/loader:1197:32)
    at Module._load (node:internal/modules/cjs/loader:1013:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49

Node.js v18.19.1
````