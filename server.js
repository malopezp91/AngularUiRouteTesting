var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/views'));

app.use(express.static(__dirname + '/node_modules'));

var port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log("App is running on port " + port);
});

app.get('/getDevices', function (req, res) {
    var deviceOne = {
        deviceId: '111aaa',
        name: 'Miguel'
    };
    var deviceTwo = {
        deviceId: '222bbb',
        name: 'Nancy'
    };
    var deviceThree = {
        deviceId: '333ccc',
        name: 'Oqueli'
    };

    var devices = [deviceOne, deviceTwo, deviceThree];
    res.json(devices);
});

app.get('/getEvents/:id', function (req, res) {
    var id = req.params.id;
    var eventOne = {
        status: 'Ok',
        temp: 11
    };
    var eventTwo = {
        status: 'BAD',
        temp: 22
    };
    var eventThree = {
        status: 'UNKWOWN',
        temp: 33
    };


    if (id == '111aaa') {
        res.json([eventOne]);
    } else if (id == '222bbb') {
        res.json([eventTwo]);
    }
    else {
        res.json([eventThree]);
    }
})