function unixTimeToDateHtml(unixTime) {
    var date = new Date(unixTime * 1000);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    return 'Date: ' + day + '.' + month + '.' + year + ' Time: ' + hours + ':' + minutes;
}