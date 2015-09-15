// ==UserScript==
// @id             TVNetIL_Favez0ne_Links_Fix
// @name           TVNetIL Favez0ne Links Fix
// @version        1.0.0
// @namespace      shlomisha
// @author         shlomisha
// @description    Creates direct links to the favez0ne downloading pages from TVnetIL site
// @include        http://www.tvnetil.net/review/*
// @grant          none
// @run-at         document-end
// @updateURL      https://raw.githubusercontent.com/shlomisha/TVNetIL-Favez0ne-Links-Fix/master/TVNetIL_Favez0ne_Links_Fix.meta.js
// @downloadURL    https://raw.githubusercontent.com/shlomisha/TVNetIL-Favez0ne-Links-Fix/master/TVNetIL_Favez0ne_Links_Fix.user.js
// ==/UserScript==

// Remove HTML tags and trim the string
var key = document.getElementsByTagName("h1")[0].innerHTML.replace(/<(?:.|\n)*?>/gm, "").replace(/^\s+|\s+$/g, "");
var div = document.getElementsByClassName("blokl1")[0];

var form = "<form name=\"frm\" method=\"post\" target=\"blank\" action=\"http://www.favez0ne.net/search.php\">\
				<input type=\"hidden\" name=\"srch\" value=\"" + key + "\" />\
				<input type=\"submit\" value=\"הורדה מהירה\" style=\"background-color: #0085bd; border: 2px solid black; color: white; font-family: arial; font-size: 17pt; font-weight: bold; padding: 5px;\" />\
			</form>";

div.innerHTML += form;
