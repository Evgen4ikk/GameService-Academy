Требуется реализовать web-приложение - “витрину” игр наподобие https://rawg.io/ или https://web.archive.org/web/20180831053229/https://gamegid.online/ на базе API (https://rawg.io/apidocs).

### Приложением можно воспользоваться по этой ссылке

## Preview site [Game Service](https://65e490b2d2776b99ccfb3aaa--bejewelled-sunshine-3e54a2.netlify.app/).

## Приложение будет состоять из двух страниц:
- главная, каталог игр:
    - Необходимый функционал
        - Пагинация (попытаться реализовать “бесконечный” скролл)
        - Сортировка по: рейтингу и дате релиза игры (в обе стороны)
        - Фильтрация по платформам
        - Поиск по названию
    - Содержимое каждой “плитки” игры:
        - Название
        - Постер
        - Рейтинг
        - Дата релиза

- /game/[slug] - страница деталей игры, на которую можно попасть, кликнув на плитку игры в каталоге, должна содержать более полную информацию об игре (помимо имевшейся на плитке):
    - Описание
    - Ссылка на сайт игры
    - Слайдер со скриншотами игры
- /genres - страница со списком жанров игр
    - /genres/[slug] - страница деталей жанра
- /developers - страница со списком компаний-разработчиков видеоигр
    - /developers/[slug] - страница деталей компании-разработчика видеоигр

 ## Требования:
- Реализация на React/Vue
- Код на ES6 (JavaScript/TypeScript)
- Адаптивная mobile-first вёрстка
- Верстка с нуля или с использованием UI-библиотек типа Material UI, Tailwind CSS и т.д
- Репозиторий на GitHub
- За основу дизайна взять идеи с приведенных примеров площадок, либо найти референсы, например в Figma, Pinterest и т.д
- Структура проекта не должна быть недостаточной/избыточной, код необходимо разделять по принципу здравого смысла
- Для работы с API написать базовый класс FetchHttpClient, где будут описаны методы fetch, get (использует fetch), который можно будет переиспользовать по всему проекту
- Расписать подробный README со списком фич приложения, а также его настройкой шаг за шагом

## Дополнительно:
- Добавить поддержку PWA
- Реализация мультиязычного web-приложения с помощью i18n
- Покрыть UI/функциональными тестами фичи (Jest)
- Настроить деплой приложения в GitHub Pages
- Указать в описании проекта ссылку на задеплоенную версию
