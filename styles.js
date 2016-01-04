/*----smooth scroll ------*/

<script type="text/javascript">
  var $root = $('html, body');
    $('.nav ul li a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });
</script>
