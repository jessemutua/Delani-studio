$(document).ready(function() {
    $("#dev-icon").click(function() {
        $("#dev-icon").slideDown('1500').hide('1000')
        $("#par").show('1500')
    });
    $("#par").click(function() {
        $("#par").slideUp('1500');
        $("#dev-icon").slideDown('1500');
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
$(document).ready(function() {
    $("#work5").mouseover(function() {
        $("#overlay5").show();
    }).mouseout(function() {
        $("#overlay5").hide();
    });
});
$(document).ready(function() {
    $("#work6").mouseover(function() {
        $("#overlay6").show();
    }).mouseout(function() {
        $("#overlay6").hide();
    });
});
$(document).ready(function() {
    $("#work7").mouseover(function() {
        $("#overlay7").show();
    }).mouseout(function() {
        $("#overlay7").hide();
    });
});
$(document).ready(function() {
    $("#work8").mouseover(function() {
        $("#overlay8").show();
    }).mouseout(function() {
        $("#overlay8").hide();
    });
});