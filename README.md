# VK standalone-client

Клиент для ВК (тест-версия)

# Description

Моё первое приложение с использованием стороннего API.
Для получения ключа доступа по OAuth 2.0 используется Implicit flow. Клиент работает через приложение вк. Для доступа необходим access_token. В планах сделать автоматическое получение токена.

# Launching

Прописать токен в fixtures/vk.js, открыть src\index.html.

Пример запроса токена:
```
https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=token&v=5.80&state=123456
```
[Подробнее](https://vk.com/dev/implicit_flow_user) 