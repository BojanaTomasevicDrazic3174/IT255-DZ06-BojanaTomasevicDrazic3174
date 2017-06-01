$(function () {

	var presidents = document.getElementById('presidents');

    $.ajax({
        type: "GET",
        url: 'https://mysafeinfo.com/api/data?list=presidents&format=json',
        dataType: "json",
        success: function (data) {
            for (i = 0; i < data.length; i++) {
            presidents.innerHTML += '<tr><td>' + data[i].id + '</td><td>' + data[i].nm + '</td><td>' + data[i].pp + '</td><td>' + data[i].tm + '</td></tr>'
        }
        }
    });

  });