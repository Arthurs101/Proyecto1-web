webpacklab
NECESITA NODE JS, NPM , WEBPACK , BABEL y REACT
Descripción
Este proyecto es una plantilla para proyectos de webpack.

Instalación
Para instalar las dependencias del proyecto, ejecuta el siguiente comando:
npm install

Para construir el proyecto en modo de desarrollo webpack, ejecuta el siguiente comando:
npm run web

Para ejecutar el servidor de desarrollo, ejecuta el siguiente comando:
npm run live-webpack

Documentos:
PROYECTO 1 WEB:

dist_with_babel 
src
    app
        app.js <-- componente que manda a llamar a los demás para armar la página web
        app.scss
    assets <--- aqui se almacenan todos los elementos (imagenes, videos, svg etc...)
    components  <--react componentes
        countDown <-- reloj de cuenta regresiva
            clock.js
            clock.scss
        footers
            Bottom.js <--- acá va el anuncio del circo solei , el collage y el ultimo footer
            Bottom.scss
        messiStats <--componente para las estadísticas
            bar.js <-- barra que se anima (component)
            bar.scss
            number.js <-- numero que se automaumenta (component)
            stat.js <-- componente principal 
            stats.scss
        newsBanner <-- el apartado de noticias de la página
            news.js <-- el componente
            news.scss
        storeBanner <-- el apartado para la tienda de  messi
            store.js <-- el componente
            store.scss
        wellcomeBanner <-- el componente de la portada
            cover.js <- el componente
            cover.scss
    index.html
    index.js
babel.config.js
README.md
webpack.config.js


Dependencias
Este proyecto utiliza las siguientes dependencias:

"@babel/polyfill": "^7.12.1"
"@babel/runtime": "^7.21.0"
"@webpack-cli/serve": "^2.0.2"
"babel-loader": "^9.1.2"
"bootstrap-icons": "^1.10.3"
"react": "^18.2.0"
"react-card-flip": "^1.2.0"
"react-dom": "^18.2.0"
"webpack-cli": "^5.0.1"
Dependencias de desarrollo

Este proyecto utiliza las siguientes dependencias de desarrollo:

"@babel/cli": "^7.21.0"
"@babel/core": "^7.21.4"
"@babel/plugin-transform-arrow-functions": "^7.20.7"
"@babel/preset-env": "^7.21.4"
"@babel/preset-react": "^7.18.6"
"bootstrap": "^5.2.3"
"clean-webpack-plugin": "^4.0.0"
"css-loader": "^6.7.3"
"extract-plugin": "^0.3.0"
"file-loader": "^6.2.0"
"html-loader": "^4.2.0"
"html-webpack-plugin": "^5.5.0"
"mini-css": "^1.0.3"
"mini-css-extract-plugin": "^2.7.5"
"raw-loader": "^4.0.2"
"sass": "^1.59.3"
"sass-loader": "^13.2.1"
"style-loader": "^3.3.2"
"webpack": "^5.76.3"
"webpack-dev-server": "^4.13.3"
Licencia
Este proyecto utiliza la licencia ISC. Consulta el archivo LICENSE para más información.

