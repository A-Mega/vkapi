$('#load').on('click', loadFriends);
$('#send-message').on('click', sendMessage);
$('#get-dialogs').on('click', getDialogs);
$('#newsfeed').on('click', getNewsfeed);

$(document).on('click', '.open-history', function (event) {
    var id = +$(event.target).data('id');
    getHistory(id)
});

$(document).on('click', '.open-detail', function (event) {
    event.preventDefault();
    var id = +$(event.target).data('id');
    sendRequest('users.get',
        { user_ids: id, fields: 'sex,bdate,country,timezone,photo_big' },
        drawDetailFriend
    );
});
