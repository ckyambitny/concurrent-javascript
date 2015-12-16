var filter = function(imageData, iterations) {
    var data = imageData.data;
    for (var j = 0; j < iterations; j++) {
        for (var i = 0; i < data.length; i += 4) {
            var num = Math.round(0.21 * data[i] + 0.71 * data[i+1] + 0.07 * data[i+2]);
            data[i] = num;
            data[i+1] = num;
            data[i+2] = num;
            data[i+3] = 205 + Math.random() * 100;
        }
    }
}

self.addEventListener('message', function(e){
    filter(e.data.imagedata, e.data.iterations);
        
    self.postMessage({
        imagedata: e.data.imagedata,
        iterations: e.data.iterations
    });
});