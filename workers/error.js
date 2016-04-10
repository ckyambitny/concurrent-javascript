self.addEventListener('message', function (e) {
    setTimeout(function () {
        // y = undefined;
        var x = e.data / y;
        self.postMessage(x);
    }, 3000);
});

