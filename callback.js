function callback(data, callbackfunc) {
    callbackfunc(data)
}

var data = [1, 2, 3, 4, 5]

callback(data, (data) => console.log(data.map(e => e * 11 + 1)))

callback(data, (data) => console.log(data.filter(e => e < 10)))

callback(data, (data) => console.log(data.some(e => e > 1)))

callback(data, (data) => console.log(data.all(e => e > 1)))