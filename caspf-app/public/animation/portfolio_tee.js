(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"portfolio_tee_atlas_", frames: [[0,0,1919,2208],[1921,905,1919,859],[1921,0,1919,903],[1921,1766,1080,648]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.FireShotCapture16sampleshopIcasportfolio_file____Applications_MAMP_htdocs_w = function() {
	this.spriteSheet = ss["portfolio_tee_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FireShotCapture17sampleshopIcasportfolio_file____Applications_MAMP_htdocs_w = function() {
	this.spriteSheet = ss["portfolio_tee_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.FireShotCapture20thankssampleshopIcasportfolio_file____Applications_MAMP_htdocs_w = function() {
	this.spriteSheet = ss["portfolio_tee_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.MiniLapTop = function() {
	this.spriteSheet = ss["portfolio_tee_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.トゥイーン1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.FireShotCapture16sampleshopIcasportfolio_file____Applications_MAMP_htdocs_w();
	this.instance.parent = this;
	this.instance.setTransform(-268.7,-309.2,0.28,0.28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.7,-309.2,537.6,618.5);


(lib.シンボル2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.FireShotCapture17sampleshopIcasportfolio_file____Applications_MAMP_htdocs_w();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.283,0.283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル2, new cjs.Rectangle(0,0,542.8,243), null);


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.トゥイーン1();
	this.instance.parent = this;
	this.instance.setTransform(268.8,309.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(0,0,537.6,618.5), null);


// stage content:
(lib.portfolio_tee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8CRlMAAAgjJMA4FAAAMAAAAjJg");
	mask.setTransform(271,198);

	// レイヤー 2
	this.instance = new lib.シンボル1();
	this.instance.parent = this;
	this.instance.setTransform(267.1,338,0.892,0.826,0,0,0,268.9,309.3);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:268.8,x:267,y:337.3},0).wait(1).to({y:336.7},0).wait(1).to({y:336},0).wait(1).to({y:335.4},0).wait(1).to({y:334.8},0).wait(1).to({y:328.4},0).wait(1).to({y:315.9},0).wait(1).to({y:303.5},0).wait(1).to({y:291.3},0).wait(1).to({y:279.2},0).wait(1).to({x:266.9,y:267.4},0).wait(1).to({y:255.7},0).wait(1).to({y:244.2},0).wait(1).to({y:232.8},0).wait(1).to({y:221.6},0).wait(1).to({y:210.6},0).wait(1).to({x:266.8,y:199.8},0).wait(1).to({y:189.1},0).wait(1).to({y:178.6},0).wait(1).to({y:168.3},0).wait(1).to({y:158.2},0).wait(1).to({x:266.7,y:148.2},0).wait(1).to({y:138.4},0).wait(1).to({y:128.7},0).wait(1).to({y:119.3},0).wait(1).to({y:110},0).wait(1).to({y:100.9},0).wait(1).to({x:266.6,y:91.9},0).wait(1).to({y:83.2},0).wait(1).to({y:74.6},0).wait(1).to({y:66.1},0).wait(1).to({y:61},0).wait(2).to({x:266.5},0).wait(5).to({x:219.2},0).wait(1).to({x:172},0).wait(1).to({x:124.7},0).wait(1).to({x:77.4},0).wait(1).to({x:30.1},0).wait(1).to({x:-17.2},0).wait(1).to({x:-64.4},0).wait(1).to({x:-111.7},0).wait(1).to({x:-159},0).wait(1).to({x:-206.3},0).wait(1).to({x:-253.5},0).wait(1).to({x:-300.8},0).wait(1).to({x:-348.1},0).wait(1).to({x:-395.4},0).wait(1).to({x:-442.7},0).to({_off:true},1).wait(35));

	// レイヤー 6
	this.instance_1 = new lib.シンボル2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(271.1,201.5,1,1,0,0,0,271.4,121.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(42).to({x:238.5},0).wait(1).to({x:205.8},0).wait(1).to({x:173.2},0).wait(1).to({x:140.6},0).wait(1).to({x:107.9},0).wait(1).to({x:75.3},0).wait(1).to({x:42.7},0).wait(1).to({x:10},0).wait(1).to({x:-22.6},0).to({_off:true},1).wait(20));

	// レイヤー 5
	this.instance_2 = new lib.FireShotCapture20thankssampleshopIcasportfolio_file____Applications_MAMP_htdocs_w();
	this.instance_2.parent = this;
	this.instance_2.setTransform(22,86,0.261,0.261);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(51));

	// frame
	this.instance_3 = new lib.MiniLapTop();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-17,37,0.532,0.532);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258,237,574.1,344.5);
// library properties:
lib.properties = {
	id: 'A272221D924B4D2EB61C3BEEDEE66461',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/portfolio_tee_atlas_.png", id:"portfolio_tee_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A272221D924B4D2EB61C3BEEDEE66461'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;