function loadFriends() {
    console.log(getUserNameById()); //выводит undefined !!!!!!!!!!!!!!!!!!!!!!

    $('.detail').hide(); //приходится каждый раз прятать

    sendRequest('friends.search', { count: 300, fields: 'photo_100, online' }, function (data) {
        //console.log(data.response);
        drawFriends(data.response.items);
    });
    
}

function drawFriends(friends) {

    var html = '';
    for (var i = 0; i < friends.length; i++) {
        var f = friends[i];
        var online = f.online ? 'Online' : 'Offline';

        //if(!f.id) console.log('user_id undefined: ' + f.id);
        html +=
            '<li>'
            //+ '<a target="_blank" href="https://vk.com/id' + f.id + '">'
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