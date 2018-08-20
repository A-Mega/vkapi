function loadFriends() {

    $('.detail').hide();

    sendRequest('friends.search', { count: 300, fields: 'photo_100, online' }, function (data) {
        drawFriends(data.response.items);
    });
    
}

function drawFriends(friends) {

    var html = '';
    for (var i = 0; i < friends.length; i++) {
        var f = friends[i];
        var online = f.online ? 'Online' : 'Offline';

        html +=
            '<li>'
            + '<a href="#">'
            + '<img src="' + f.photo_100 + '" />'
            + '<div>'
            + '<h4>' + f.first_name + ' ' + f.last_name + '</h4>'
            + '<p>' + online + '</p>'
            + '<button data-id="' + f.id + '" class="open-detail">Open</button>'
            + '</div>'
            + '</a>'
            + '</li>';
    }

    $('ul').html(html);

}

function drawDetailFriend(data) {
    var user = data.response[0];
    var $detail = $('.detail');

    var sex = user.sex;
    switch (sex) {
        case 1: sex = 'женский'; break;
        case 2: sex = 'мужской'; break;
        case 0: sex = 'пол не указан'; break;
        default: sex = 'ошибка определения пола';
    }

    var ulHtml = '<il>' + user.country.title + '</il>'
        + ' <il>' + sex + '</il>'
        + ' <il>' + user.id + '</il>';

    $detail.find('img').attr('src', user.photo_big);
    $detail.find('h3').text(user.first_name + ' ' + user.last_name);
    $detail.find('ul').html(ulHtml);
    $detail.find('button').attr('data-id', user.id);
    $detail.show(400);
}

function sendMessage(event) {
    var id = +$(event.target).attr('data-id');
    var value = $('textarea').val();

    if (!value) {
        alert('Empty message!');
        return;
    }

    sendRequest('messages.send', { user_id: id, message: value }, function () {
        console.log('Sended');
    });
}