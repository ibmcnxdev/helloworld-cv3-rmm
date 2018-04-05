// ==UserScript==
//
// @name         global css customizer ...
// @version      0.1
// @description  *** PROTOTYPE CODE *** demonstrates simple hello world script to customize the Home Page
// @author       vodo22
//
// ==/UserScript==

if (typeof (dojo) != "undefined") {
    dojo.place(
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/Global-Layout Test/Color-modification.css?repoName=helloworld-cv3-rmm\"></link>",
        dojo.doc.head,
        "last"
);
}