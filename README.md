1. HTML
A HTML form for multiple file uploads and an extra field.

<!DOCTYPE html>
<html>
<body>

<h1>jQuery Ajax submit Multipart form</h1>

<form method="POST" enctype="multipart/form-data" id="fileUploadForm">
    <input type="text" name="extraField"/><br/><br/>
    <input type="file" name="files"/><br/><br/>
    <input type="file" name="files"/><br/><br/>
    <input type="submit" value="Submit" id="btnSubmit"/>
</form>

<h1>Ajax Post Result</h1>
<span id="result"></span>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

</body>
</html>
Copy

Ad by Valueimpression
2. jQuery.ajax
2.1 Create a Javascript FormData object from a form.

    var form = $('#fileUploadForm')[0];

    var data = new FormData(form);
Copy
2.1 processData: false, it prevent jQuery form transforming the data into a query string

	$.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
Copy
2.3 Full example.

$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        // Get form
        var form = $('#fileUploadForm')[0];

		// Create an FormData object 
        var data = new FormData(form);

		// If you want to add an extra field for the FormData
        data.append("CustomField", "This is some extra data, testing");

		// disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/api/upload/multi",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {

                $("#result").text(data);
                console.log("SUCCESS : ", data);
                $("#btnSubmit").prop("disabled", false);

            },
            error: function (e) {

                $("#result").text(e.responseText);
                console.log("ERROR : ", e);
                $("#btnSubmit").prop("disabled", false);

            }
        });

    });

});
Copy
Re
