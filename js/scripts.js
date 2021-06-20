$(document).ready(function() {
    $("#development-icon").click(function() {
        $("#development-icon").slideDown('1500').hide('1000')
        $("#development").show('1500')
    });
    $("#development").click(function() {
        $("#development").slideUp('1500');
        $("#development-icon").slideDown('1500');
    });
});

$(document).ready(function() {
    $("#product-icon").click(function() {
        $("#product-icon").slideDown('1500').hide('1000');
        $("#product").show('1500');
    });
    $("#product").click(function() {
        $("#product").slideUp('1500');
        $("#product-icon").slideDown('1500');
    });
});

$(document).ready(function() {
    $("#design-icon").click(function() {
        $("#design-icon").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#product").click(function() {
        $("#product").slideUp('1500');
        $("product-icon").slideDown('1500');
    })
});

$(document).ready(function() {
    $("#work1").mouseover(function() {
        $("#overlay").show();
    }).mouseout(function() {
        $("#overlay").hide();
    });
});

$(document).ready(function() {
    $("#work2").mouseover(function() {
        $("#overlay2").show();
    }).mouseout(function() {
        $("#overlay2").hide();
    });
});
$(document).ready(function() {
    $("#work3").mouseover(function() {
        $("#overlay3").show();
    }).mouseout(function() {
        $("#overlay3").hide();
    });
});
$(document).ready(function() {
    $("#work4").mouseover(function() {
        $("#overlay4").show();
    }).mouseout(function() {
        $("#overlay4").hide();
    });
});