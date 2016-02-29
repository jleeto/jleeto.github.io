! function() {
    $("#feed").length && GitHubActivity.feed({
        username: "jleeto",
        selector: "#feed",
        limit: 5
    })
}();
