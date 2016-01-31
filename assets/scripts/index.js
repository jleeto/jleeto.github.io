function httpGet("https://github.com/jleeto")
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://github.com/jleeto", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
