//add secure.checkToken!!!!!!!!!!!!!!!!!!!!!!
//location.href.match(/access_token=([^&]*)/)[1]

function getToken() {
    var xhr = new XMLHttpRequest();
    var url = 'https://oauth.vk.com/authorize?client_id=6449061&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends,messages,users,wall&response_type=token&v=5.52';
    xhr.open('GET', url, true);
    xhr.send(); // (1)
    xhr.onreadystatechange = function() { // (3)
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
    params['access_token'] = '06ff2efe5bb2220ec4f05a95b335364644b6ccf74222cc45fca6e79b0a43c9e02b3024218710b87927a5d';
    return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.52';
}

function sendRequest(method, params, func/* , sync */) {
    $.ajax({
        url: getUrl(method, params),
        method: 'GET',
        dataType: 'JSONP',
        statusCode: {
            404: function () { alert("Page not found"); },
            500: function () { alert("internal server error"); }
            //500: function () { $("#messege").text("internal server error"); }
        },
        success: func //, //200
        /* async: true */
    });
}

function sendRequestXHR(method, params) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', getUrl(method, params), true);
    xhr.send(); // (1)
    xhr.onreadystatechange = function() { // (3)
        if (xhr.readyState != 4) return;
            console.log('Готово!');
        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            console.log(xhr.responseText);
        }
    }
}

/* function sendRequestFetch(method, params) {
    if (!method) throw new Error('Вы не указали метод!');
    params = params || {};
    params['access_token'] = '316756c1f35e0cdd08bf6fba6185c2a58f58a285aa04477e5c3596780c8d2db6d8e5996249f682fd4ea5a';
    var url = 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.52';

    var header = new Headers({
        'Access-Control-Allow-Origin':'*'
    });

    fetch(url, { mode: 'cors', headers: header, method: 'GET', credentials: 'same-origin' })
    //fetch(url, { mode: 'no-cors', cache: 'no-cache'})
    .then(function(response) {
      //alert('response.headers: ' + response.headers); // application/json; charset=utf-8
      //alert('response.status: ' + response.status); // 200
  
      //return response.json();
      //return console.log('response: ' + response);
      return console.log(response);
     })
     .catch(function(error) {  
        console.log('Request failed', error)  
      })
} */
//console.log(sendRequestFetch('users.get', { user_id: 394504562, fields: 'first_name, last_name'}));