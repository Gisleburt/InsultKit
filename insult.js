/**
 * ShakespeareInsultKit class
 * @param config
 * @constructor
 */
var ShakespeareInsultKit = function(config) {
    this.insultLibrary = [
        ['artless','bawdy','beslubbering','bootless','churlish','cockered','clouted','craven','currish','dankish','dissembling','droning','errant','fawning','fobbing','froward','frothy','gleeking','goatish','gorbellied','impertinent','infectious','jarring','loggerheaded','lumpish','mammering','mangled','mewling','paunchy','pribbling','puking','puny','qualling','rank','reeky','roguish','ruttish','saucy','spleeny','spongy','surly','tottering','unmuzzled','vain','venomed','villainous','warped','wayward','weedy','yeasty'],
        ['base-court','bat-fowling','beef-witted','beetle-headed','boil-brained','clapper-clawed','clay-brained','common-kissing','crook-pated','dismal-dreaming','dizzy-eyed','doghearted','dread-bolted','earth-vexing','elf-skinned','fat-kidneyed','fen-sucked','flap-mouthed','fly-bitten','folly-fallen','fool-born','full-gorged','guts-griping','half-faced','hasty-witted','hedge-born','hell-hated','idle-headed','ill-breeding','ill-nurtured','knotty-pated','milk-livered','motley-minded','onion-eyed','plume-plucked','pottle-deep','pox-marked','reeling-ripe','rough-hewn','rude-growing','rump-fed','shard-borne','sheep-biting','spur-galled','swag-bellied','tardy-gaited','tickle-brained','toad-spotted','unchin-snouted','weather-bitten'],
        ['apple-john','baggage','barnacle','bladder','boar-pig','bugbear','bum-bailey','canker-blossom','clack-dish','clotpole','coxcomb','codpiece','death-token','dewberry','flap-dragon','flax-wench','flirt-gill','foot-licker','fustilarian','giglet','gudgeon','haggard','harpy','hedge-pig','horn-beast','hugger-mugger','joithead','lewdster','lout','maggot-pie','malt-worm','mammet','measle','minnow','miscreant','moldwarp','mumble-news','nut-hook','pigeon-egg','pignut','puttock','pumpion','ratsbane','scut','skainsmate','strumpet','varlot','vassal','whey-face','yeasty','weather-bitten','wagtail']
    ];

    this.target = '';
    this.delay = 1000;
    this.elementType = 'span';

    this.setConfig(config);

};

ShakespeareInsultKit.prototype.setConfig = function(config) {
    if(typeof config == "object") {
        if(config.target)
            this.target = config.target;
        if(config.delay)
            this.delay = config.delay;
        if(config.elementType)
            this.elementType = config.elementType;
    }
};

/**
 * Pulls a random word from on of the lists of words
 * @param i
 * @return string
 */
ShakespeareInsultKit.prototype.getInsultFromColumn = function(i) {
    return this.insultLibrary[i][ Math.floor( Math.random() * this.insultLibrary[i].length ) ];
};

/**
 * Gets an array of insults, one for each column
 */
ShakespeareInsultKit.prototype.getInsults = function() {
    this.insults = [];
    for(var i in this.insultLibrary) {
        this.insults[i] = this.getInsultFromColumn(i);
    }
};

/**
 * Displays each insult one after the other with a given delay between each
 */
ShakespeareInsultKit.prototype.display = function() {
    var target = document.getElementById(this.target);
    if(target) {
        target.innerHTML = '';
        var insultKit = this;
        window.setTimeout(function() {addInsult(insultKit, 0)}, this.delay);
    }

    /**
     * Displays a single element
     * @param insults array Array of insults
     * @param delay integer How long to wait before displaying
     * @param i integer Index in array (will keep going until the array is complete)
     */
    var addInsult = function(insultKit, i) {
        console.log(insultKit);
        if(i < insultKit.insults.length) {
            var node = document.createTextNode(insultKit.insults[i]);
            var element = document.createElement(insultKit.elementType);
            element.appendChild(node);
            element.className = 'insult';
            element.id = 'insult'+(i+1);
            target.appendChild(element);
            window.setTimeout(function() {addInsult(insultKit, 1+i)}, insultKit.delay);
        }
    }

};

ShakespeareInsultKit.prototype.insultMe = function() {
    this.getInsults();
    this.display();
};
