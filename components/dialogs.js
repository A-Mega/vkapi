function getDialogs() {
    $('.detail').hide();

    sendRequest('messages.getDialogs', { count: 10 }, function (data) {
        drawDialogs(data.response.items);
    });
}

function drawDialogs(dialogs) {
    var html = '';

    for (var i = 0; i < dialogs.length; i++) {
        var d = dialogs[i];
        if (!d.message.body) d.message.body = 'Attention! Message can not be displayed!';
        var date = d.message.date;

        html +=
            '<li>'
            + '<div>' + '<h4>' + 'Sender: ' + d.message.user_id + ' ' + unixTimeToDateHtml(date) + '</h4>' + '</div>'
            + '<div>' + '<h4>' + d.message.body + '</h4>' + '</div>'
            + '<button data-id="' + d.message.user_id + '" class="open-history">Open history</button>'
            + '</a>'
            + '</li>';
    }

    $('ul').html(html);

}