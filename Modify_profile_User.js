if (typeof (dojo) != "undefined") {
require(["dojo/domReady!"], function () {
try {
dojo.place(
'<link rel="stylesheet" type="text/css" href="/files/customizer/profile_modified_rmm.css\"></link>',
dojo.doc.head,
'last'
);
} catch (e) {
alert('exception occurred : ' + e);
}
});
}