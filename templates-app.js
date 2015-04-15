angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div>\n" +
    "\n" +
    "	<h1>The Games of Thrones Test</h1>	\n" +
    "	<hr />\n" +
    "	<div id='selectors'>\n" +
    "		<select ng-model='character'> \n" +
    "			<option ng-click='characterSelect(value.id);'  ng-repeat='value in characters' value=\"{{value.id}}\">{{value.label}}</option>\n" +
    "		</select>\n" +
    "		<span> is now at  </span>\n" +
    "		<select ng-model='castle'>\n" +
    "			<option ng-click='castleSelect(value.id);'  ng-repeat='value in castles' value=\"{{value.id}}\">{{value.label}}</option>\n" +
    "		</select>	\n" +
    "	</div>\n" +
    "	<div id='message' ng-model='message'  ng-show='showMessage' class='message fadein fadeout'>{{message}}</div>\n" +
    "	<br /><br style=\"clear:both\" />\n" +
    "	<hr />\n" +
    "	<h3>Character's situation</h3>\n" +
    "	\n" +
    "	<select disabled multiple ng-model='Winterfell'>\n" +
    "		<option ng-repeat='value in Winterfell' value=\"{{value.id}}\">{{value.label}}</option>\n" +
    "	</select>\n" +
    "	<select disabled multiple ng-model='Port_Real'>\n" +
    "		<option ng-repeat='value in Port_Real' value=\"{{value.id}}\">{{value.label}}</option>\n" +
    "	</select>\n" +
    "	<select disabled multiple ng-model='Meereen'>\n" +
    "		<option ng-repeat='value in Meereen' value=\"{{value.id}}\">{{value.label}}</option> \n" +
    "	</select>\n" +
    "	\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
