(function() {
  $(function() {
    $.getJSON('https://api.github.com/users/jleeto/repos?sort=pushed')
    .success(function(repos) {
      $('.project-repo').each(function(i) {
        var project = repos[i];
        console.log(project);
        $(this).append(
          '<div class="title">' +
            '<span class="name">' + project.name + '</span>' +
            '<span class="desc">' + project.description + '</span>' +
          '</div>'
        );
      });
    });
  });
})();
