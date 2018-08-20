function getToken() {
    var xhr = new XMLHttpRequest();
    var url = 'https://oauth.vk.com/authorize?client_id=6449061&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends,messages,users,wall&response_type=token&v=5.52';
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
            console.log('Готово!');
        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            console.log(xhr.responseText);
        }
    }
}

function getUrl(method, params) {
    if (!method) throw new Error('Вы не указали метод!');
    params = params || {};
    params['access_token'] = 'efd7bef46fbc3292ab67aa65203ee56f32fc1183f6631fceeb86a0d8483a4325fffe984241d7a2c63b993';
    return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.52';
}

function sendRequest(method, params, func) {
    $.ajax({
        url: getUrl(method, params),
        method: 'GET',
        dataType: 'JSONP',
        statusCode: {
            404: function () { alert("Page not found"); },
            500: function () { alert("internal server error"); }
        },
        success: func
    });
}