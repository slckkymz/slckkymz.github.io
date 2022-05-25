$(".category_filter_list_item_label").click(function (e) { 
    e.preventDefault();
    if($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
        $(this).parent().children(".category_filter_list_item_sub").removeClass("active");
    }
    else {
        $(this).parent().addClass("active");
        $(this).parent().children(".category_filter_list_item_sub").addClass("active");
    }
});

$(".category_filter_item h3").click(function (e) { 
    e.preventDefault();
    if($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
    }
    else {
        $(".category_filter_item").removeClass("active");
        $(this).parent().addClass("active");
    }
});


$(".grid_cols").click(function (e) { 
    e.preventDefault();
    $(".product-card-top").removeClass("list");
    $(".category_product_cards").removeClass("list");
});

$(".list_cols").click(function (e) { 
    e.preventDefault();
    $(".product-card-top").addClass("list");
    $(".category_product_cards").addClass("list");
});

$(".category_filter_list_item_input").change(function (e) { 
    e.preventDefault();
    $(this).parent().children(".category_filter_list_item_sub").children("li").children(".category_filter_sub_input").attr("checked",this.checked)
});