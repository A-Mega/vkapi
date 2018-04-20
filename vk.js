
           function getUrl(method, params) {
               if (!method) throw new Error('Вы не указали метод!');
               params = params || {};
               params['access_token'] = '41ac495a7142998fecbebb756c7e3e5b08dd184ac4b746f4d254da4dcd7b64556438040b9fa702763ceba';
               return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.52';
           }

           function sendRequest(method, params, func) {
            $.ajax({
               url: getUrl(method, params),
               method: 'GET',
               dataType: 'JSONP',
               statusCode: {
                    404: function () { $("#messege").text("Page not found"); },
                    500: function () { $("#messege").text("internal server error"); }
               },
               success: func
            });
           }