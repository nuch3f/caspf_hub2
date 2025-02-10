(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"portfolio_app_atlas_", frames: [[0,0,1944,2588],[0,2590,1919,2265],[0,4857,1919,2058],[2871,0,385,4536],[1921,2590,948,1851],[1921,4538,1080,648]]}
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



(lib.FireShotCapture18atelierplantsplanethttp___atelierplantsplanetcom_app_information_ = function() {
	this.spriteSheet = ss["portfolio_app_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FireShotCapture21informationI_http___atelierplantsplanetcom_app_information_information_ = function() {
	this.spriteSheet = ss["portfolio_app_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.FireShotCapture22TWELVEIatelierpl_http___atelierplantsplanetcom_app_information_twelve_ = function() {
	this.spriteSheet = ss["portfolio_app_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FireShotCapture23atelierplantsplanethttp___atelierplantsplanetcom_app_information_ = function() {
	this.spriteSheet = ss["portfolio_app_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.iPhone6Spacegray = function() {
	this.spriteSheet = ss["portfolio_app_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.MiniLapTop = function() {
	this.spriteSheet = ss["portfolio_app_atlas_"];
	this.gotoAndStop(5);
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


(lib.シンボル6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.FireShotCapture23atelierplantsplanethttp___atelierplantsplanetcom_app_information_();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.283,0.283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル6, new cjs.Rectangle(0,0,108.9,1282.6), null);


(lib.シンボル5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.FireShotCapture21informationI_http___atelierplantsplanetcom_app_information_information_();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル5, new cjs.Rectangle(0,0,508.6,600.3), null);


(lib.シンボル4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.FireShotCapture22TWELVEIatelierpl_http___atelierplantsplanetcom_app_information_twelve_();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル4, new cjs.Rectangle(0,0,487.1,522.4), null);


(lib.シンボル3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.FireShotCapture18atelierplantsplanethttp___atelierplantsplanetcom_app_information_();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル3, new cjs.Rectangle(0,0,453.2,602.8), null);


// stage content:
(lib.portfolio_app = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoWOLIAA8WIQtAAIAAcWg");
	mask.setTransform(444.5,248.2);

	// レイヤー 6
	this.instance = new lib.シンボル6();
	this.instance.parent = this;
	this.instance.setTransform(443.4,798.2,1,1,0,0,0,54.4,641.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:641.3,y:791.8},0).wait(1).to({y:785.4},0).wait(1).to({y:779},0).wait(1).to({y:772.7},0).wait(1).to({y:766.4},0).wait(1).to({y:760.1},0).wait(1).to({y:754},0).wait(1).to({y:747.8},0).wait(1).to({y:741.7},0).wait(1).to({y:735.7},0).wait(1).to({y:729.7},0).wait(1).to({y:723.7},0).wait(1).to({y:717.8},0).wait(1).to({y:712},0).wait(1).to({y:706.2},0).wait(1).to({y:700.5},0).wait(1).to({y:694.7},0).wait(1).to({y:689.1},0).wait(1).to({y:683.5},0).wait(1).to({y:677.9},0).wait(1).to({y:672.4},0).wait(1).to({y:667},0).wait(1).to({y:661.6},0).wait(1).to({y:656.2},0).wait(1).to({y:650.9},0).wait(1).to({y:645.6},0).wait(1).to({y:640.5},0).wait(1).to({y:635.3},0).wait(1).to({y:630.2},0).wait(1).to({x:443.5,y:625.1},0).wait(1).to({y:620.1},0).wait(1).to({y:615.1},0).wait(1).to({y:610.2},0).wait(1).to({y:605.3},0).wait(1).to({y:600.5},0).wait(1).to({y:595.7},0).wait(1).to({y:591},0).wait(1).to({y:586.3},0).wait(1).to({y:581.7},0).wait(1).to({y:577.1},0).wait(1).to({y:572.6},0).wait(1).to({y:568.1},0).wait(1).to({y:563.7},0).wait(1).to({y:559.3},0).wait(1).to({y:554.9},0).wait(1).to({y:550.7},0).wait(1).to({y:546.4},0).wait(1).to({y:542.2},0).wait(1).to({y:538.1},0).wait(1).to({y:534},0).wait(1).to({y:529.9},0).wait(1).to({y:525.9},0).wait(1).to({y:522},0).wait(1).to({y:518.1},0).wait(1).to({y:514.2},0).wait(1).to({y:510.4},0).wait(1).to({y:506.7},0).wait(1).to({y:503},0).wait(1).to({y:499.3},0).wait(1).to({y:495.7},0).wait(1).to({y:492.2},0).wait(1).to({y:488.7},0).wait(1).to({y:485.2},0).wait(1).to({y:481.8},0).wait(1).to({y:478.4},0).wait(1).to({y:475.1},0).wait(1).to({y:471.9},0).wait(1).to({y:468.6},0).wait(1).to({y:465.5},0).wait(1).to({y:462.4},0).wait(1).to({y:459.3},0).wait(1).to({y:456.3},0).wait(1).to({y:453.3},0).wait(1).to({y:450.4},0).wait(1).to({y:447.5},0).wait(1).to({y:444.7},0).wait(1).to({y:441.9},0).wait(1).to({y:439.2},0).wait(1).to({y:436.5},0).wait(1).to({y:433.8},0).wait(1).to({y:431.3},0).wait(1).to({y:428.7},0).wait(1).to({y:426.2},0).wait(1).to({y:423.8},0).wait(1).to({y:421.4},0).wait(1).to({y:419.1},0).wait(1).to({y:416.8},0).wait(1).to({y:414.5},0).wait(1).to({x:443.6,y:412.3},0).wait(1));

	// レイヤー 5
	this.instance_1 = new lib.iPhone6Spacegray();
	this.instance_1.parent = this;
	this.instance_1.setTransform(372,120,0.141,0.141);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// レイヤー 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A8CRlMAAAgjJMA4FAAAMAAAAjJg");
	mask_1.setTransform(271,198);

	// レイヤー 1
	this.instance_2 = new lib.シンボル3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(268.6,386.4,1,1,0,0,0,226.6,301.4);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({y:386.3},0).wait(2).to({y:386.2},0).wait(1).to({y:386.1},0).wait(2).to({y:379.6},0).wait(1).to({y:366.3},0).wait(1).to({y:353.1},0).wait(1).to({x:268.5,y:340.1},0).wait(1).to({y:327.3},0).wait(1).to({x:268.4,y:314.7},0).wait(1).to({y:302.2},0).wait(1).to({x:268.3,y:290},0).wait(1).to({y:277.9},0).wait(1).to({x:268.2,y:266},0).wait(1).to({x:268.1,y:254.3},0).wait(1).to({y:242.8},0).wait(1).to({x:268,y:231.5},0).wait(1).to({y:220.3},0).wait(1).to({x:267.9,y:209.3},0).wait(1).to({y:198.5},0).wait(1).to({x:267.8,y:187.9},0).wait(1).to({y:177.5},0).wait(1).to({x:267.7,y:167.2},0).wait(1).to({x:267.6,y:157.1},0).wait(1).to({y:147.3},0).wait(1).to({x:267.5,y:137.6},0).wait(1).to({y:128},0).wait(1).to({x:267.4,y:118.7},0).wait(1).to({y:109.6},0).wait(1).to({x:267.3,y:100.6},0).wait(1).to({x:267.2,y:95.1},0).wait(2).to({x:267.1},0).wait(2).to({x:267},0).wait(2).to({x:266.9},0).wait(1).to({x:240.2},0).wait(1).to({x:213.5},0).wait(1).to({x:186.8},0).wait(1).to({x:160.1},0).wait(1).to({x:133.4},0).wait(1).to({x:106.6},0).wait(1).to({x:79.9},0).wait(1).to({x:53.2},0).wait(1).to({x:26.5},0).wait(1).to({x:-0.3},0).wait(1).to({x:-27},0).wait(1).to({x:-53.7},0).wait(1).to({x:-80.4},0).wait(1).to({x:-107.1},0).wait(1).to({x:-133.9},0).to({_off:true},1).wait(35));

	// レイヤー 2
	this.instance_3 = new lib.シンボル4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(262,346.2,1,1,0,0,0,243.6,261.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1).to({regX:243.5},0).wait(1).to({x:262.1},0).wait(2).to({x:262.2},0).wait(1).to({x:262.3},0).wait(1).to({x:262.4},0).wait(1).to({x:262.5},0).wait(1).to({x:262.6},0).wait(2).to({x:262.7},0).wait(1).to({x:262.8},0).wait(1).to({x:262.9},0).wait(1).to({x:263},0).wait(1).to({x:263.1},0).wait(2).to({x:263.2},0).wait(1).to({x:263.3},0).wait(1).to({x:263.4},0).wait(1).to({x:263.5},0).wait(1).to({x:263.6},0).wait(2).to({x:263.7},0).wait(1).to({x:263.8},0).wait(1).to({x:263.9},0).wait(1).to({x:264},0).wait(1).to({x:264.1},0).wait(2).to({x:264.2},0).wait(1).to({x:264.3},0).wait(1).to({x:264.4},0).wait(1).to({x:264.5},0).wait(1).to({x:264.6},0).wait(2).to({x:264.7},0).wait(1).to({x:264.8},0).wait(1).to({x:264.9},0).wait(1).to({y:340.1},0).wait(1).to({y:334.1},0).wait(1).to({y:328},0).wait(1).to({y:321.9},0).wait(1).to({y:315.8},0).wait(1).to({y:309.8},0).wait(1).to({y:303.7},0).wait(1).to({y:297.6},0).wait(1).to({y:291.6},0).wait(1).to({y:285.5},0).wait(1).to({y:279.4},0).wait(1).to({y:273.3},0).wait(1).to({y:267.3},0).wait(1).to({y:261.2},0).wait(1).to({x:223.2},0).wait(1).to({x:181.5},0).wait(1).to({x:139.9},0).wait(1).to({x:98.2},0).wait(1).to({x:56.5},0).wait(1).to({x:14.8},0).wait(1).to({x:-26.9},0).wait(1).to({x:-68.6},0).wait(1).to({x:-110.3},0).wait(1).to({x:-152},0).wait(11));

	// レイヤー 4
	this.instance_4 = new lib.シンボル5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(272.2,386.1,1,1,0,0,0,254.2,300.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69).to({_off:false},0).wait(1).to({regX:254.3,x:272.3},0).wait(10).to({y:380.1},0).wait(1).to({y:374.1},0).wait(1).to({y:368.1},0).wait(1).to({y:362.1},0).wait(1).to({y:356.1},0).wait(1).to({y:350.1},0).wait(1).to({y:344.1},0).wait(1).to({y:338.1},0).wait(1).to({y:332.1},0).wait(1).to({y:326.1},0).wait(1));

	// frame
	this.instance_5 = new lib.MiniLapTop();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-17,37,0.532,0.532);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258,237,574.1,344.6);
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
		{src:"images/portfolio_app_atlas_.png", id:"portfolio_app_atlas_"}
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