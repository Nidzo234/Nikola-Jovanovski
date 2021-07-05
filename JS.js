var my_window = $(window);
var position = my_window.scrollTop();

my_window.scroll(function () {

    if (my_window.scrollTop()>30)
    {
        $('.nav').addClass('nav-up');
    }
    else
    {
        $('.nav').removeClass('nav-up');
    }
    position= my_window.scrollTop();
});

window.addEventListener('scroll', function()
    {
        var scroll = document.querySelector('.top');
        scroll.classList.toggle("active", window.scrollY >  300)
    }
)
