# CSSSR Project Template
**Шаблон проекта для быстрого старта.**

## Инструменты

* `bump` - обновление версии проекта.
* `clean` - очистка папки от файлов.
* `spritesmith` - генератор спрайтов и CSS переменных.
* `imagemin` - сжатие картинок.
* `stylus` - препроцессор CSS.
* `autoprefixer` - подстановка префиксов для заданных браузеров.
* `combine-media-queries` - комбинирование медиа-запросов в CSS.
* `csscomb` - форматирование CSS.
* `jade` - препроцессор HTML.
* `prettify` - форматирование HTML.
* `jshint` - проверка JavaScript на качество кода с подсказками.
* `copy` - создание копий файлов.
* `uglify` - минифицирование и обфускация скриптов.
* `replace` - автозамена паттернов на заданные значения.
* `connect` - сервер проекта.
* `watch` - отслеживание изменений файлов и их компиляция.

## Подготовка к работе

1. Устанавливаем [Node.js](http://nodejs.org/download/), включающий в себя NPM (Node Packet Manager).
2. `npm i -g grunt-cli` - устанавливаем Grunt.
3. Ознакомьтесь со [статьей по установке git](http://git-scm.com/book/ru/Введение-Установка-Git) под Вашу операционную систему.

Эти 3 шага выполняются один раз.<br>
Если при вызове команды `grunt` будет писать ошибку, что эта команда не найдена, то нужно перезагрузиться или выйти из системы и зайти снова.

## Приступаем к работе

1. `git clone https://github.com/CSSSR/csssr-project-template.git new-project` - cкачать в папку `new-project`.
2. `npm i` - устанавливаем пакеты.
3. `grunt` - запускаем Grunt и работаем.

## Доступные команды

### Сборка

Команда | Назначение
--- | ---
`grunt build` | Очищается папка `dist/`, компилируются<br>и копируются файлы в `dist/` только один раз.
`grunt serve` | Запускается сервер с доступом к сайту<br>по адресу [`http://127.0.0.1:3000`](http://127.0.0.1:3000).
`grunt` | Тоже самое, что и в предыдущих двух,<br>плюс отслеживаются изменения файлов.

Чтобы выключить, нужно нажать `ctrl + c` или закрыть консоль.

### Обновление версии

Команда | Назначение
--- | ---
`grunt bump` / `grunt bump:patch` | Патч версия: 0.0.x.
`grunt bump:minor` | Минорная версия: 0.x.0.
`grunt bump:major` | Мажорная версия: x.0.0.

## Структура папок

Папка | Назначение
--- | ---
`app` | Исходники.
`dist` | Сборка сайта для заказчика. Открывается по адресу: [http://127.0.0.1:3000](http://127.0.0.1:3000).

Если нужна автоперезагрузка страницы после компиляции, то можно установить расширение [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) для Chrome или раскомментировать `Gruntfile.js` строку `livereload: true` в секции `connect`, тем самым внедряя в каждую страницу скрипт для автоперезагрузки, это полезно для мобильных устройств.

### Полезные ссылки

* [grunt](http://gruntjs.com/)
* [jade](http://jade-lang.com/)
* [stylus](http://learnboost.github.io/stylus/)
* [Grunt для тех, кто считает штуки вроде него странными и сложными](http://frontender.info/grunt-is-not-weird-and-hard/)
* [Сборка сайтов на независимых блоках из Jade и Stylus с использованием Grunt.js](http://oleggromov.com/slides/independent-blocks-assemble/)
* [Grunt: система сборки для фронтенд-разработчиков](http://sapegin.ru/pres/grunt/)