"use strict";

var greet = module.exports = module = function(name){
	var named = name || "anonymous coward";
	return "hello " + named;
}