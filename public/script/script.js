$(document).ready(function () {


    $("#submit").on("click", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#newBurger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(newBurger);
                location.reload();
            }
        );
    });

    $(".change-devour").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("devoured");

        let newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function (){
                console.log("changed devoured to ", newDevour)
                location.reload();
            }
        );
    });



})