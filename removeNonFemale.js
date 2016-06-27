$(function() {
    var authors = $('a.author-link').map(function(x) { return $(this).attr('href'); });
    authors.each(function(i, author) {
        $.get(author).done(function(data) {
            if (!$(data).find('.icon-profile-female').length) {
                console.log('Hiding ' + author);
                $('a[href="' + author + '"]').parent().parent().parent().hide();
            }
        });
    });
});
