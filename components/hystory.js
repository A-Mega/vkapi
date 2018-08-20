function getIdCurrentUser() {
    sendRequest('users.get', { filters: 'efd7bef46fbc3292ab67aa65203ee56f32fc1183f6631fceeb86a0d8483a4325fffe984241d7a2c63b993' }, function (data) {
        getHistory(data.response[0].id);
    });
}

function getHistory(id) {
    sendRequest('messages.getHistory', { count: 10, user_id: id, offset: 5 }, function (data) {
        drawHistory(data.response.items);
    });
}

function drawHistory(history) {

    var html = '';
    for (var i = 0; i < history.length; i++) {
        var d = history[i];
        var date = d.date;

        html +=
            '<li>'
            + '<div>' + '<h4>' + 'Sender: ' + d.user_id + ' ' + unixTimeToDateHtml(date) + '</h4>' + '</div>'
            + '<div>' + '<h4>' + d.body + '</h4>' + '</div>'
            + '</a>'
            + '</li>';
    }

    $('ul').html(html);

}