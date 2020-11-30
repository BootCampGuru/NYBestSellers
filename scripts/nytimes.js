$(document).ready(function(){

    $("#submit").click(function () {
        
        //alert($("#search").val());
        event.preventDefault();
        $("#table tbody").empty();
        //Fetch data from the url
        //Use key provided by NY Times
        var author = $("#search").val();
        $("#search").val('');
        var key = "1wJlvnRkd3FeRSZ5vskhMqJnluD9lOc6";
        var url_link = "https://api.nytimes.com/svc/books/v3/reviews.json?author=" + author + "&api-key=" + key;
        
        $.get(url_link, function(data) {
            console.log(data);
            //show it in the table
            for (var i = 0; i < data.results.length; i++) {

                $('#table tbody').append('<tr><td>' + data.results[i].book_title + '</td><td>' + data.results[i].book_author + '</td><td><img height="90px" src="../NYBestSellers/images/davinci.jpg" /></td></tr>');
            }

          });
        

    });


    $("#all_submit").click(function () {
        
        //alert($("#search").val());
        event.preventDefault();
        $("#all_table tbody").empty();
        //Fetch all data from the url
        //Use key provided by NY Times
        var key = "1wJlvnRkd3FeRSZ5vskhMqJnluD9lOc6";
        var url_link = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" + key;
        
        $.get(url_link, function(data) {
            console.log(data);
            //show it in the table
            for (var i = 0; i < data.results.books.length; i++) {

                $('#all_table tbody').append('<tr><td>' + data.results.books[i].title + '</td><td>' + data.results.books[i].author + '</td><td><img height="200px" src="' + data.results.books[i].book_image + '"/></td></tr>');
            }

          });
        

    });

});
