# Food сайт с меню кафе с калькулятором калорий
Карточки с меню берутся из БД, в качестве пробного варианты можно использовать локальный json-server
## Краткое описание
Приложение выполнено на нативном JS, предусмотрено только десктопная версия, без автоматической адаптации на мобильную платформу.
Сервисные функции представлены в виде заглушек куда могут быть помещены реальные вызовы к API. 
## Подготовка локального backend для работы с карточками меню
<pre>
npm install --save-dev json-server
</pre>
### Настройка
Настраиваем json-server таким образом, чтобы наше апи было доступно с префиксом api
Создаём файл routes.json куда помещаем 
<pre>
{ "/api/*": "/$1" }
</pre>
<ol>
<li>save-json-api подготовка необходимого окружения (папки файлы в dist)
<li>build производит подготовку окружения production
<li>Настраиваем запуск json-server в соответствующей секции package.json
<li>predeploy предварительно очищаем dist
</ol>
<pre>
  "scripts": {
    "save-json-api": "node ./js/save-json-api.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=production --node-env=production && npm run save-json-api",
    "build:dev": "webpack --mode=development",
    "build:prod": "webpack --mode=production --node-env=production",
    "watch": "webpack --watch",
    "serve": "json-server --watch ./db/db.json --routes ./server/routes.json --port 3000",
    "predeploy": "rm -rf dist && npm run build",
    "deploy": "gh-pages -d dist"
  }
</pre>
Сборка и выкат production
<pre>
npm run deploy
</pre>
<a href="https://dvorobiev1968.github.io/food/">Посомотреть pet-проект</a>
