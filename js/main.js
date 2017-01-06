$('#main-navigation a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

// Sauce https://blueimp.github.io/Gallery/
blueimp.Gallery(
    document.getElementById('links').getElementsByTagName('a'),
    {
        container: '#blueimp-gallery-carousel',
        carousel: true,
        stretchImages: true,
    }
);