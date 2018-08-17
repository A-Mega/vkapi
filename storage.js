//https://vk.com/dev/storage

function storageSet() {
    sendRequest('storage.set', { key: 1, value: 'value1', global: 1
    });
}

function storageGet() {
    sendRequest('storage.get', { key: 1, global: 1 }, function (data) {
        console.log('storage.get ');
        console.log(data);
    });
}

function storageGetKeys() {
    sendRequest('storage.getKeys', { global: 1}, function (data) {
        console.log(data);
    });
}