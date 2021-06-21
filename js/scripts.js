function dev(i, p) {

    $(document).ready(function() {
        i.click(function() {
            i.toggle();
            p.toggle();
        });
        p.click(function() {
            i.toggle();
            p.toggle();
        });
    });
}
dev($("#mobile"), $("#par1"));
dev($("#mobile2"), $("#par2"));
dev($("#mobile3"), $("#par3"));

// $(document).ready(function() {
//     $("#work1").mouseover(function() {
//         $("#overlay1").show();
//     }).mouseout(function() {
//         $("#overlay1").hide();
//     });
// // });
// $("#work1").hover(function() {
//     $("this").children("overlay1").slideToggle(1000, "linear")
// })


$(document).ready(function() {
    $("#123").submit(function(event) {
        // event.preventDefault();
        var name = $("input#MERGE1").val();
        var email = $("input#MERGE0").val();
        var message = $("textarea#comment").val();
        if ($("input#MERGE1").val() && $("input#MERGE0").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email!");
        }
    });
});