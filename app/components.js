$(document).ready(function(){
    var components = [
        {
            'link': 'header.html',
            'element': '#header'
        },
        {
            'link': 'footer.html',
            'element': '#footer'
        },
        {
            'element': 'body',
            'link': 'modal.html'
        }
    ];
    for (var i = 0; i < components.length; i++) {
        (function(index) {
            $.get("components/"+components[i].link, function(i) {

            }).done(function(data) {
                $(components[index].element).append(data);
                if(components[index].element == '#header') {
                    $("#search-toggle").click(function() {
                        $(".action-search").toggleClass("show");
                        $(this).toggleClass("show");
                    });
                }
            });

        })(i);
    }
});