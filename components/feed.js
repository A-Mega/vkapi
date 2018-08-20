function getNewsfeed() {
    sendRequest('newsfeed.get', { filters: 'photo' }, function (data) {
        drawNewsfeed(data.response.items);
    });
}

function drawNewsfeed(feeds) {
    
    $('.detail').hide();

    var html = '';
    for (var i = 0; i < feeds.length; i++) {
        var f = feeds[i].photos.items;
        
        html +='<p>';
            html += '<p>Подборка фото №' + (i+1) + '</p>'
            f.forEach(element => {
                html += '<img src="' + element.photo_130 + '" />'
            });
        html += '</p>';
    }
    $('ul').html(html);
}