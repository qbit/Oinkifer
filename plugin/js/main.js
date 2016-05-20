//Words to search and replace.
//TODO fix weird bug when trying to use i flag.
var wordList = {
	"Donald": "Oinkifer",
	"Trump": "Tiny Hands",
	"great": "oink",
	"again": "oinkoink",
	"vote": "squeeel",
	"Hillary": "Farmer",
	"Clinton": "Old Macdonald",
	"Rosie O'Donnell": "Spoon Lady",
	"million": "MUUUUNEY",
	"GOP": "slaughter house",
	"Dem": "free range rabbit",
	"tax": "kosher bacon",
	"fact": "hoggin'",
	"election": "pig show",
	"ISIS": "feed trough",
	"terror": "swine",
	"loser": "third party candidate",
	"the media": "anyone with a brain",
	"children": "piglets",
	"republican": "hamlet",
	"leader": "head hog"
			//manure
			//hogwash
};


//Check to see if Trump is mentioned.
var r = /trump/i;
var s = r.exec(document.body.textContent);

//Trump was mentioned.  Oinkify!
if (s) {
	console.log("Trump found. Oinkify!")



	//Put all the works into our regex.
	var regex = [];
	for (var prop in wordList) {
		regex.push(prop);
	}
	regex = new RegExp(regex.join('|'), "g");

	//Replace only text nodes
	textReplace(document.body);
}


//We only want to change text appearing on the page, not scripts or links.
function textReplace(node) {
	if (node.nodeType === 3) { // 3 is a text node
		node.nodeValue = node.nodeValue.replace(regex, function (match) {
			return wordList[match];
		});
		return;
	}

	if (node.nodeType === 1) { // 1 is an element
		$(node).contents().each(function () {
			textReplace(this);
		});
	}
}


