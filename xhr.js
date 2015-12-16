function makeRequest (method, url){
    return new Promise(function (resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function (){
            if (this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };

        xhr.onerror = function (){
            var err = {
                status: this.status,
                statusText: xhr.statusText
            };

            reject(err);
            throw new Error(err);
        };

        xhr.send();
    });
}
