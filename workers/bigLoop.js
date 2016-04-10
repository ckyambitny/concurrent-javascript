self.addEventListener('message', function (e) {
    for (var i = 0; i <= 1000000000; i++) {
        var j = i;
    }

    setTimeout(function () {
        var x = e.data + j;
        self.postMessage(x);
    }, 3000);
});

