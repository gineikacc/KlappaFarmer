// ==UserScript==
// @name         Clappa Farmer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.destiny.gg/bigscreen
// @icon         https://www.google.com/s2/favicons?sz=64&domain=destiny.gg
// @grant        none
// ==/UserScript==

function main() {
  let chatLines = document.querySelector(`.chat-lines`);
  let active = true;
  while (active) {
    let lastChatLine = chatLines.children[chatLines.children.length - 1];
  }
}

let emoteWidths = [
  ["Abathur ", 82],
  ["AbaW ", 32],
  ["AMAZIN ", 72],
  ["AngelThump ", 95],
  ["ApeHands ", 30],
  ["Askers ", 56],
  ["ASLAN ", 41],
  ["ATAB ", 40],
  ["Aware ", 36],
  ["AYAYA ", 28],
  ["AYYYLMAO ", 100],
  ["BasedGod ", 29],
  ["BASEDWATM8 ", 38],
  ["BERN ", 60],
  ["BibleThump ", 29],
  ["BINGQILIN ", 39],
  ["BLADE ", 30],
  ["Blesstiny ", 32],
  ["Blubstiny ", 32],
  ["BOGGED ", 28],
  ["BOOMER ", 31],
  ["BoomerSippy ", 22],
  ["catJAM ", 38],
  ["Chatting ", 32],
  ["CheekerZ ", 44],
  ["ChibiDesti ", 40],
  ["Clap ", 22],
  ["Clueless ", 36],
  ["COGGERS ", 64],
  ["ComfyAYA ", 32],
  ["ComfyCat ", 32],
  ["ComfyDan ", 46],
  ["ComfyDog ", 32],
  ["comfYEE ", 32],
  ["ComfyFerret ", 34],
  ["ComfyMel ", 32],
  ["coMMMMfy ", 33],
  ["COOMER ", 28],
  ["COOMfy ", 32],
  ["Copium ", 28],
  ["CROPSTINY ", 57],
  ["CuckCrab ", 32],
  ["Cutestiny ", 28],
  ["CUX ", 76],
  ["DaFeels ", 30],
  ["DAFUK ", 30],
  ["DANKMEMES ", 72],
  ["DappaKappa ", 26],
  ["DatGeoff ", 21],
  ["DCOLON ", 32],
  ["DEATH ", 30],
  ["Depresstiny ", 28],
  ["Derpstiny ", 24],
  ["DestiSenpaii ", 32],
  ["dggL ", 32],
  ["Disgustiny ", 28],
  ["Dravewin ", 30],
  ["DuckerZ ", 56],
  ["DURRSTINY ", 21],
  ["ECH ", 30],
  ["FeedNathan ", 37],
  ["FeelsAmazingMan ", 30],
  ["FeelsBadMan ", 30],
  ["FeelsBirthdayMan ", 19],
  ["FeelsDankMan ", 28],
  ["FeelsGimiMan ", 32],
  ["FeelsGoodMan ", 30],
  ["FeelsOkayMan ", 33],
  ["FeelsPeekMan ", 32],
  ["FeelsStrongMan ", 28],
  ["FeelsWeirdMan ", 32],
  ["FerretLOL ", 33],
  ["FiveHead ", 30],
  ["ForYou ", 38],
  ["FourHead ", 32],
  ["FrankerZ ", 42],
  ["gachiGASM ", 30],
  ["GameOfThrows ", 79],
  ["GIGACHAD ", 29],
  ["GODSTINY ", 27],
  ["GRUG ", 43],
  ["GRUGingOverIt ", 43],
  ["HACKERMAN ", 34],
  ["haHAA ", 30],
  ["Heimerdonger ", 37],
  ["Hhhehhehe ", 35],
  ["HmmStiny ", 33],
  ["HUH ", 32],
  ["INFESTINY ", 35],
  ["ITSRAWWW ", 25],
  ["JAMSTINY ", 28],
  ["Kappa ", 22],
  ["KappaRoss ", 44],
  ["KING ", 28],
  ["Klappa ", 38],
  ["LeRuse ", 33],
  ["LIES ", 45],
  ["LOVE ", 51],
  ["LUL ", 36],
  ["LULW ", 28],
  ["MALARKEY ", 51],
  ["MASTERB8 ", 36],
  ["melW ", 28],
  ["Memegasm ", 24],
  ["Milkerino ", 33],
  ["miyanobird ", 36],
  ["MiyanoHype ", 32],
  ["MLADY ", 30],
  ["MMMM ", 28],
  ["monkaS ", 28],
  ["monkaSMEGA ", 32],
  ["monkaVirus ", 35],
  ["MotherFuckinGame ", 30],
  ["NAHH ", 19],
  ["NAILS ", 32],
  ["Nappa ", 22],
  ["nathanAYAYA ", 28],
  ["nathanBlub ", 28],
  ["nathanBogged ", 28],
  ["nathanBoomer ", 28],
  ["nathanD ", 28],
  ["nathanDank ", 28],
  ["nathanDerp ", 28],
  ["nathanEZ ", 28],
  ["nathanF ", 28],
  ["nathanFeels ", 28],
  ["nathanGG ", 30],
  ["nathanGod1 ", 28],
  ["nathanGod2 ", 28],
  ["nathanGod3 ", 28],
  ["nathanGod4 ", 28],
  ["nathanGodstiny ", 28],
  ["nathanNotears ", 28],
  ["nathanObject ", 28],
  ["nathanOOO ", 32],
  ["nathanPepe ", 28],
  ["nathanPrime ", 28],
  ["nathanRuse ", 28],
  ["nathanRustle ", 28],
  ["nathanSenpai ", 28],
  ["nathanShroom ", 28],
  ["nathanThinking ", 28],
  ["nathanTiny1 ", 28],
  ["nathanTiny2 ", 80],
  ["nathanTiny2_OG ", 28],
  ["nathanTowel ", 28],
  ["nathanW ", 28],
  ["nathanWat ", 28],
  ["nathanWeeb ", 28],
  ["nathanYee ", 28],
  ["nathanYikes ", 28],
  ["nathanZoomer ", 28],
  ["NiceMeMe ", 27],
  ["NOBULLY ", 43],
  ["NODDERS ", 28],
  ["NOOOO ", 41],
  ["NOPERS ", 28],
  ["NoTears ", 31],
  ["NOTMYTEMPO ", 47],
  ["OBJECTION ", 86],
  ["OhKrappa ", 23],
  ["OhMyDog ", 30],
  ["OMEGALUL ", 31],
  ["OneGuy ", 99],
  ["OOOO ", 28],
  ["OverRustle ", 33],
  ["Painstiny ", 28],
  ["PARDNER ", 32],
  ["peepoRiot ", 35],
  ["PEPE ", 30],
  ["PepeHands ", 30],
  ["pepeJAM ", 33],
  ["PepeLaugh ", 32],
  ["PepeMods ", 30],
  ["pepeSteer ", 33],
  ["pepeW ", 28],
  ["PepoComfy ", 32],
  ["PepoG ", 39],
  ["PepOk ", 30],
  ["PepoThink ", 32],
  ["PepoTurkey ", 34],
  ["PepoWant ", 38],
  ["PICNIC ", 50],
  ["Pog ", 28],
  ["POGGERS ", 30],
  ["POOTUBE ", 24],
  ["POTATO ", 32],
  ["RapThis ", 28],
  ["RaveDoge ", 50],
  ["REE ", 28],
  ["Shroomstiny ", 32],
  ["Shrugstiny ", 32],
  ["SICKO ", 28],
  ["Sippy ", 22],
  ["SLEEPSTINY ", 50],
  ["Slugstiny ", 30],
  ["Slumlord ", 32],
  ["SMASHit ", 42],
  ["SNAP ", 35],
  ["SoDoge ", 52],
  ["SOTRIGGERED ", 43],
  ["SOY ", 37],
  ["SpookerZ ", 34],
  ["SURPRISE ", 33],
  ["SWEATSTINY ", 34],
  ["TeddYEE ", 30],
  ["TeddyPepe ", 33],
  ["TF ", 37],
  ["tonyW ", 28],
  ["triHarder ", 30],
  ["TRUMPED ", 53],
  ["UNLUCKY ", 56],
  ["UWOTM8 ", 28],
  ["WEOW ", 28],
  ["WhoahDude ", 25],
  ["WICKED ", 38],
  ["widepeepoHappy ", 80],
  ["WOOF ", 60],
  ["WooYeah ", 32],
  ["WORTH ", 21],
  ["Wowee ", 30],
  ["YAM ", 30],
  ["YEE ", 30],
  ["YEEHAW ", 30],
  ["YeeLaugh ", 32],
  ["YeeMods ", 32],
  ["Yoda1 ", 28],
  ["ZOOMER ", 32],
];
function getTextWidth(text) {
  let span = document.createElement("span");
  document.body.appendChild(span);

  span.style.font = "Roboto";
  span.style.fontSize = 14 + "px";
  span.style.height = "auto";
  span.style.width = "auto";
  span.style.position = "absolute";
  span.style.whiteSpace = "no-wrap";
  span.innerHTML = text;

  let result = span.clientWidth;
  document.body.removeChild(span);
  console.log(result);
  return result;
}

function f(text) {}
function removeEmotes(text) {
  let textAggregator = "";
  let words = [...text.matchAll(/\w+\W/g)].map((x) => x["0"]);
  let whitespace = [...text.matchAll(/\W+/g)].map((x) => x["0"].slice(1));
  let result = [[], []];
  for (word of words) {
    if (emoteWidths.includes(word)) {
      result[0].push(textAggregator);
      textAggregator = "";
      result[1].push(word);
    }
  }

  //returns [[text1, text2, text3], [emote1, emote2]]
}
function getEmoteLocations(chatLine) {
  //Ignores time
  // flairs x20.8  ||  || ctrl 16.67 C ||

  let username = chatLine.querySelector(`a.user`); // 4.2 + textLength
  let userFlairs = [...chatLine.getElementsByTagName(`i`)];
  let flairLength =
    20.8 *
    userFlairs.filter((x) => getComputedStyle(x).display !== `none`).length;
  let userLength = 4.2 + getTextWidth(username.textContent);
  let ctrlPad = 16.67;
  let prefixLength = flairLength + userLength + ctrlPad;

  let text = chatLine.querySelector(`text`).textContent;
  console.log(text);
  let textSplit = text.innerHTML.split(/<(div|span).+<\/\1>/g);
  console.log(textSplit);
}

/**
.msg-chat
	time?									31.23px C 
	.features.childrenCount					x20.8
	.ctrl									16.67px
	a.user									TBD
	ctrl.	(: )							6.86
	.text
    */
