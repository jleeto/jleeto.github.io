do ->
  $ ->
    $.getJSON('https://api.github.com/users/jleeto/repos?sort=pushed').success (repos) ->
      $('.project-repo').each (i) ->
        project = repos[i]
        console.log project
        $(this).append '<div class="title">' + '<span class="mega-octicon octicon-repo"></span>' + '<span class="name">' + project.name + '</span>' + '<span class="desc">' + project.description + '</span>' + '</div>'
        return
      return
    return
  return
