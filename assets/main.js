
////////////////// Register Manager View/////////////////////
var RegisterManager = new Marionette.Application();

RegisterManager.StaticView = Marionette.ItemView.extend({
	 template: "#tpl-static",
	 events: {
		"click a": "callStep1View"
	 },
	
	 callStep1View: function(){
		var step1View = new RegisterManager.Step1View();
		RegisterManager.regions.main.show(step1View);

	 }
	 });
////////////////// Register Step1 View/////////////////////	 
RegisterManager.Step1View = Marionette.ItemView.extend({
	 template: "#tpl-contacts-1",
	 events: {
		
		"click #type1": "callStep2Type1",
		"click #type2": "callStep2Type2"
	 },
	
	 callStep2Type1: function(){
		var step2ViewType1 = new RegisterManager.Step2ViewType1();
		RegisterManager.regions.main.show(step2ViewType1);
	 },
	  callStep2Type2: function(){
		var step2ViewType2 = new RegisterManager.Step2ViewType2();
		RegisterManager.regions.main.show(step2ViewType2);
	 }
	 });
////////////////// Register Step2 View Type1/////////////////////	 
RegisterManager.Step2ViewType1 = Marionette.ItemView.extend({
	 template: "#tpl-contacts-2-type1",
	 events: {
		"click button": "callStep3",
		"click #returnBtn" : "returnCall"
	 },
	
	 callStep3: function(){
		var step3View = new RegisterManager.Step3View();
		RegisterManager.regions.main.show(step3View);
	 }, 
	 returnCall: function(){
		var staticView = new RegisterManager.StaticView();
		RegisterManager.regions.main.show(staticView);
	 }
	 });
////////////////// Register Step2 View Type2/////////////////////	 
RegisterManager.Step2ViewType2 = Marionette.ItemView.extend({
	 template: "#tpl-contacts-2-type2",
	 events: {
		"click button": "callStep3",
		"click #returnBtn" : "returnCall"
	 },
	
	 callStep3: function(){
		var step3View = new RegisterManager.Step3View();
		RegisterManager.regions.main.show(step3View);
	 },
	  returnCall: function(){
		var staticView = new RegisterManager.StaticView();
		RegisterManager.regions.main.show(staticView);
	 }
	 });
////////////////// Register Step2 View/////////////////////	 
RegisterManager.Step3View = Marionette.ItemView.extend({
	 template: "#tpl-contacts-3",
	 events: {
		"click a": "end"
	 },
	
	 end: function(){
		var staticView = new RegisterManager.StaticView();
		RegisterManager.regions.main.show(staticView);
	 }
	 });	 
////////////////// Add modell /////////////////////	
 RegisterManager.Contact = Backbone.Model.extend({
	 defaults: {
		firstName: ""
	 }
 });
	 
////////////////// Add RegionContainer /////////////////////	 	 
RegisterManager.on("before:start", function(){
	 var RegionContainer = Marionette.LayoutView.extend({
	 el: "#container",
	 regions: {
		main: "#main-region"
	 }
	 });

 RegisterManager.regions = new RegionContainer();
 });
 
 ////////////////// Show StaticView /////////////////////
 RegisterManager.on("start", function(){
	var staticView = new RegisterManager.StaticView();
	RegisterManager.regions.main.show(staticView);

 });

 RegisterManager.start();

     
