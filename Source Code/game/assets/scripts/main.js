const Start = {
    Cash: 0,
    Electrons: 0,
    Atoms: 0,
    Deoxyriboses: 0,
    HelixStrands: 0,
    DNA: 0,
    Genes: 0,
    Chromosomes: 0,
    Cells: 0,
    Tissues: 0,
    Organs: 0,
    LivingThings: 0,
    UpgradeCashMultiplier: 1,
    UpgradeElectronMultiplier: 1,
    UpgradeUnlockEquations: 0,
    UpgradeAlphaExponent: 0,
    UpgradeAlphaMultiplication: 1,
    CapsuleWhiteSingleHelix: 0,
    CapsuleRedSingleHelix: 0,
    CapsuleBlueSingleHelix: 0,
    CapsuleYellowSingleHelix: 0,
    CapsuleGreenSingleHelix: 0,
    CapsuleExtraterrestrialQuadrupleHelix: 0,
    CapsulePrestigiousExtraterrestrialQuadrupleHelix: 0,
    CapsuleOmegaExtraterrestrialQuadrupleHelix: 0,
    CapsuleSuperExtraterrestrialQuadrupleHelix: 0,
    CapsuleUltraExtraterrestrialQuadrupleHelix: 0,
    CapsuleHyperExtraterrestrialQuadrupleHelix: 0
}
const DnaBoosts = {
    CapsuleWhiteSingleHelix: 0.001,
    CapsuleRedSingleHelix: 0.002,
    CapsuleBlueSingleHelix: 0.003,
    CapsuleYellowSingleHelix: 0.004,
    CapsuleGreenSingleHelix: 0.005,
    CapsuleExtraterrestrialQuadrupleHelix: 50,
    CapsulePrestigiousExtraterrestrialQuadrupleHelix: 60,
    CapsuleOmegaExtraterrestrialQuadrupleHelix: 80,
    CapsuleSuperExtraterrestrialQuadrupleHelix: 110,
    CapsuleUltraExtraterrestrialQuadrupleHelix: 150,
    CapsuleHyperExtraterrestrialQuadrupleHelix: 200
}
const Suffixes = [
    'K',
    'M',
    'B',
    'T',
    'Qd',
    'Qn',
    'Sx',
    'Sp',
    'O',
    'N',
    'De',
    'UDe',
    'DDe',
    'TDe',
    'QtDe',
    'QnDe',
    'SxDe',
    'SpDe',
    'ODe',
    'NDe',
    'Vgt',
    'UVg',
    'DVg',
    'TVg',
    'QtVg',
    'QnVg',
    'SxVg',
    'SpVg',
    'OVg',
    'NVg',
    'Tgt',
    'UTg',
    'DTg',
    'TsTg',
    'QtTg',
    'QnTg',
    'SsTg',
    'SpTg',
    'OTg',
    'NTg',
    'Qdgt',
    'UQdg',
    'DQdg',
    'TQdg',
    'QtQdg',
    'QnQdg',
    'SxQdg',
    'SpQdg',
    'OQdg',
    'NQdg',
    'Qqgt',
    'UQqg',
    'DQqg',
    'TQqg',
    'QtQqg',
    'QnQqg',
    'SxQqg',
    'SpQqg',
    'OQqg',
    'NQqg',
    'Sxgt',
    'USxg',
    'DSxg',
    'TsSxg',
    'QtSxg',
    'QnSxg',
    'SsSxg',
    'SpSxg',
    'OSxg',
    'NSxg'
]

console.log("DO NOT PASTE ANYTHING HERE UNLESS YOU UNDERSTAND THE CODE! IF SOMEONE ASKS YOU TO DO SO, YOU'RE ESSENTIALLY GIVING YOUR DATA, COOKIES, ETC. TO THEM!")

for (let item in Start) if (!localStorage[item]) localStorage[item] = Start[item]
const Game = localStorage

Math.smooth = num => {
    return Math.round(num * 1000) / 1000
}
Math.removeNotation = x => {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
}
Math.addSuffix = number => {
    if (isNaN(number) || number == Infinity || number == -Infinity) return alert("JavaScript error: Cannot add suffix if number is NaN or Infinity")

    let decPlaces = 3

    decPlaces = Math.pow(10,decPlaces)
    var abbrev = Suffixes
    for (var i=abbrev.length-1; i>=0; i--) {
        var size = Math.pow(10,(i+1)*3)
        if(size <= number) {
            number = Math.round(number*decPlaces/size)/decPlaces
            if((number == 1000) && (i < abbrev.length - 1)) {
                number = 1
                i++
            }
            number += abbrev[i]
            break
        }
    }

    return number
}

const CapsuleCosts = [
    1000000000000000000000,
    1000
]
let BaseCurrency = 0
const Vars = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]
const EquationSymbols = [
    "&alpha;",
    "&beta;",
    "&gamma;",
    "&delta;",
    "&epsilon;",
    "&zeta;",
    "&eta;",
    "&theta;",
    "&iota;",
    "&kappa;",
    "&lambda;"
]
let EquationsList = []
function UpdateEquation() {
    BaseCurrency = Number(Game.Electrons)
    Vars[0] = Math.smooth(Math.pow(BaseCurrency, 0.5 + Number(Game.UpgradeAlphaExponent) / 20) * Number(Game.UpgradeAlphaMultiplication) + 1)
    Vars[1] = Math.smooth(Math.pow(Vars[0], 0.1) / 100)
    Vars[2] = Math.smooth(Math.pow(Math.cbrt(Math.pow(Vars[1] * 100, 1) + Math.pow(Math.log10(Vars[0] + 10), 1.5)), 1))
    Vars[3] = Math.smooth(Vars[2] * 0.001)
    Vars[4] = Math.smooth(Math.pow(Vars[3], 1) * 1)
    Vars[5] = Math.smooth(Vars[4] * Math.pow(2, 0))
    Vars[6] = Math.smooth(Vars[5] * Math.pow(1.5, 0))
    Vars[7] = Math.smooth(Vars[6] * Math.pow(1.25, 0))
    Vars[8] = Math.smooth(Vars[7] * Math.pow(1.1, 0))
    Vars[9] = Math.smooth(Vars[8] * Math.pow(1, 0))
    Vars[10] = Math.smooth(Vars[9] * (2 - Math.pow(0.5, 0)))
    EquationsList = [
        `${EquationSymbols[0]} = ${Game.UpgradeAlphaMultiplication}E<sup>${0.5 + Number(Game.UpgradeAlphaExponent) / 20}</sup> + 1 = ${Math.addSuffix(Vars[0])}`,
        `${EquationSymbols[1]} = ${EquationSymbols[0]}<sup>0.1</sup>&frasl;100 = ${Math.addSuffix(Vars[1])}`,
        `${EquationSymbols[2]} = &#8731<overline>((100${EquationSymbols[1]})<sup>1</sup> + (log<sub>10</sub>(${EquationSymbols[0]} + 10))<sup>1.5</sup>)</overline><secondsup>1</secondsup> = ${Math.addSuffix(Vars[2])}`,
        `${EquationSymbols[3]} = 0.001${EquationSymbols[2]} = ${Math.addSuffix(Vars[3])}`,
        `${EquationSymbols[4]} = 1${EquationSymbols[3]}<sup>1</sup> = ${Math.addSuffix(Vars[4])}`,
        `${EquationSymbols[5]} = 2<sup>0</sup>${EquationSymbols[4]} = ${Math.addSuffix(Vars[5])}`,
        `${EquationSymbols[6]} = 1.5<sup>0</sup>${EquationSymbols[5]} = ${Math.addSuffix(Vars[6])}`,
        `${EquationSymbols[7]} = 1.25<sup>0</sup>${EquationSymbols[6]} = ${Math.addSuffix(Vars[7])}`,
        `${EquationSymbols[8]} = 1.1<sup>0</sup>${EquationSymbols[7]} = ${Math.addSuffix(Vars[8])}`,
        `${EquationSymbols[9]} = 1<sup>0</sup>${EquationSymbols[8]} = ${Math.addSuffix(Vars[9])}`,
        `${EquationSymbols[10]} = (2 - 0.5<sup>0</sup>)${EquationSymbols[9]} = ${Math.addSuffix(Vars[10])}`
    ]
}

UpdateEquation()

let ElectronBoost = 0
const EvolveBasePrice = 10
const RebirthBasePrice = 20
const PrestigeBasePrice = 25
let BuyableEvolves = Math.smooth(Number(Game.Electrons) / (EvolveBasePrice * (1 + Number(Game.Atoms))) * (1 + Number(Game.Deoxyriboses) * 0.8) * (1 + Number(Game.HelixStrands) * 0.5))
let BuyableRebirths = Math.smooth((Number(Game.Atoms) + BuyableEvolves) / (RebirthBasePrice * (1 + Number(Game.Deoxyriboses))) * (1 + Number(Game.HelixStrands) * 0.6))
let BuyablePrestiges = Math.smooth((Number(Game.Deoxyriboses) + BuyableRebirths) / (PrestigeBasePrice * (1 + Number(Game.HelixStrands))) * (1 + Number(Game.DNA) * 0.5))

function DisplayFixes() {
    if (Number(Game.Electrons) <= 0) Game.Electrons = 0
}

function CurrencyDisplay() {
    const MainHTML = [
        (Game.Cash != "0" ? "Cash: $" + Math.addSuffix(Number(Game.Cash)) : "????: $0"),
        (Game.Electrons != "0" ? "Electrons: " + Math.addSuffix(Number(Game.Electrons)) : "?????????: 0"),
        (Game.Atoms != "0" ? "Atoms: " + Math.addSuffix(Number(Game.Atoms)) : "?????: 0"),
        (Game.Deoxyriboses != "0" ? "Deoxyriboses: " + Math.addSuffix(Number(Game.Deoxyriboses)) : "????????????: 0"),
        (Game.HelixStrands != "0" ? "Helix Strands: " + Math.addSuffix(Number(Game.HelixStrands)) : "????? ???????: 0"),
        (Game.DNA != "0" ? "DNA: " + Math.addSuffix(Number(Game.DNA)) : "???: 0"),
        (Game.Genes != "0" ? "Genes: " + Math.addSuffix(Number(Game.Genes)) : "?????: 0"),
        (Game.Chromosomes != "0" ? "Chromosomes: " + Math.addSuffix(Math.addSuffix(Number(Game.Chromosomes))) : "???????????: 0"),
        (Game.Cells != "0" ? "Cells: " + Math.addSuffix(Number(Game.Cells)) : "?????: 0"),
        (Game.Tissues != "0" ? "Tissues: " + Math.addSuffix(Number(Game.Tissues)) : "???????: 0"),
        (Game.Organs != "0" ? "Organs: " + Math.addSuffix(Number(Game.Organs)) : "??????: 0"),
        (Game.LivingThings != "0" ? "Living Things: " + Math.addSuffix(Number(Game.LivingThings)) : "?????? ??????: 0")
    ].join("<br>")

    document.getElementById("CurrencyDisplay").innerHTML = `<u>${MainHTML}</u>` 
}

function ButtonsDisplay() {
    function ele(name) {
        return document.getElementById(name)
    }

    ele("ClickTitle").innerHTML = "Click (each click gives you 1 Electron, gives " + Math.smooth(Number(Game.UpgradeCashMultiplier) * 0.01) + " cash for each Electron incrementation)"
    ele("EvolveTitle").innerHTML = Game.Electrons != "0" ? "Evolve (each evolve gives you 1 Atom, each Atom gives you 1x Electron multiplier)" : "Locked"
    ele("RebirthTitle").innerHTML = Game.Atoms != "0" ? "Rebirth (each rebirth gives you 1 Deoxyribose, each Deoxyribose gives you 0.8x Atom multiplier and 0.5x Electron multiplier)" : "Locked"
    ele("PrestigeTitle").innerHTML = Game.Deoxyriboses != "0" ? "Prestige (each prestige gives you 1 Helix Strand, each Helix Strand gives you 0.6x Deoxyribose multiplier and 0.5x Atom multiplier)" : "Locked"

    ele("ClickButton").innerHTML = "Click to get " + Math.addSuffix(Math.smooth(1 * Number(Game.UpgradeElectronMultiplier) * (1 + ElectronBoost) * (1 + Number(Game.Atoms)) * (1 + Number(Game.Deoxyriboses) * 0.5))) + " Electrons"
    ele("EvolveButton").innerHTML = Game.Electrons != "0" ? "Evolve to get " + Math.addSuffix(BuyableEvolves) + " Atoms (costs " + Math.addSuffix(Math.smooth(EvolveBasePrice * (1 + Number(Game.Atoms)))) + " Electrons for each Atom incrementation)" : "Locked"
    ele("RebirthButton").innerHTML = Game.Atoms != "0" ? "Rebirth to get " + Math.addSuffix(BuyableRebirths) + " Deoxyriboses (costs " + Math.addSuffix(Math.smooth(RebirthBasePrice * (1 + Number(Game.Deoxyriboses)))) + " Atoms for each Deoxyribose incrementation)" : "Locked"
    ele("PrestigeButton").innerHTML = Game.Deoxyriboses != "0" ? "Prestige to get " + Math.addSuffix(BuyablePrestiges) + " Helix Strands (costs " + Math.addSuffix(Math.smooth(PrestigeBasePrice * (1 + Number(Game.HelixStrands)))) + " Deoxyriboses for each Helix Strand incrementation)" : "Locked"
}

function EquationsDisplay() {
    let DisplayEquations = [EquationsList[0]]
    for (let i = 1; i <= Number(Game.UpgradeUnlockEquations); i++) {
        DisplayEquations[i] = EquationsList[i]  
    }
    const HTML = Number(Game.UpgradeUnlockEquations) >= 3 ? "<u>Electrons Boost: " + EquationSymbols[Number(Game.UpgradeUnlockEquations)] + " = " + Math.addSuffix(Vars[Number(Game.UpgradeUnlockEquations)]) + "<br><br>E = Electrons = " + Math.addSuffix(Number(BaseCurrency)) + "<br>" + DisplayEquations.join("<br>") + "</u>" : "<u>E = Electrons = " + Math.addSuffix(Number(BaseCurrency)) + "<br>" + DisplayEquations.join("<br>") + "</u>"

    document.getElementById("EquationsDisplay").innerHTML = Game.Electrons == "0" ? "<u>E = Electrons = " + Math.addSuffix(Number(BaseCurrency)) + "</u>" : HTML
}

function UpgradesDisplay() {
    function ele(name) {
        return document.getElementById(name)
    }

    ele("UpgradesDisplay").innerHTML = "<u>" + [
        `Cash Multiplier: Level ${Game.UpgradeCashMultiplier}/500`,
        `Electron Multiplier: Level ${Game.UpgradeElectronMultiplier}/500`,
        `Unlock Equations: Level ${Game.UpgradeUnlockEquations}/10`,
        Game.Electrons != "0" ? `Upgrade Equation ${EquationSymbols[0]} Exponent: Level ${Game.UpgradeAlphaExponent}/10` : `Locked`,
        Game.Electrons != "0" ? `Upgrade Equation ${EquationSymbols[0]} Multiplication: Level ${Game.UpgradeAlphaMultiplication}/10` : `Locked`
    ].join("<br>") + "</u>"

    ele("UpgradeUnlockEquationsTitle").innerHTML = Game.Electrons != "0" ? "Unlock Equations" : "Locked"
    ele("UpgradeAlphaExponentTitle").innerHTML = Game.Electrons != "0" ? `Upgrade Equation ${EquationSymbols[0]} Exponent by 0.05` : "Locked"
    ele("UpgradeAlphaMultiplicationTitle").innerHTML = Game.Electrons != "0" ? `Upgrade Equation ${EquationSymbols[0]} Multiplication by 1` : "Locked"

    ele("UpgradeCashMultiplierButton").innerHTML = Number(Game.UpgradeCashMultiplier) < 500 ? ("Costs $" + Math.addSuffix(1000 * Math.pow(2, Number(Game.UpgradeCashMultiplier) - 1))) : "Maximum level reached"
    ele("UpgradeElectronMultiplierButton").innerHTML = Number(Game.UpgradeElectronMultiplier) < 500 ? ("Costs $" + Math.addSuffix(1000000 * Math.pow(2, Number(Game.UpgradeElectronMultiplier) - 1))) : "Maximum level reached"
    ele("UpgradeUnlockEquationsButton").innerHTML = Game.Electrons != "0" ? (Number(Game.UpgradeUnlockEquations) < 10 ? ("Costs $" + Math.addSuffix(1000000000000000 * Math.pow(1000000000000, Number(Game.UpgradeUnlockEquations)))) : "Maximum level reached") : "Locked"
    ele("UpgradeAlphaExponentButton").innerHTML = Game.Electrons != "0" ? (Number(Game.UpgradeAlphaExponent) < 10 ? ("Costs $" + Math.addSuffix(1000000000 * Math.pow(1000, Number(Game.UpgradeAlphaExponent)))) : "Maximum level reached") : "Locked"
    ele("UpgradeAlphaMultiplicationButton").innerHTML = Game.Electrons != "0" ? (Number(Game.UpgradeAlphaMultiplication) < 10 ? ("Costs $" + Math.addSuffix(1000000 * Math.pow(100, Number(Game.UpgradeAlphaMultiplication)))) : "Maximum level reached") : "Locked"
}

function CapsuleDisplay() {
    function ele(name) {
        return document.getElementById(name)
    }

    const Capsule1HTML = [
        (Game.CapsuleWhiteSingleHelix != "0" ? "White Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleWhiteSingleHelix"]) + "x): " + Game.CapsuleWhiteSingleHelix : "????? ?????? ????? (?x): 0"),
        (Game.CapsuleRedSingleHelix != "0" ? "Red Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleRedSingleHelix"]) + "x): " + Game.CapsuleRedSingleHelix : "??? ?????? ????? (?x): 0"),
        (Game.CapsuleBlueSingleHelix != "0" ? "Blue Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleBlueSingleHelix"]) + "x): " + Game.CapsuleBlueSingleHelix : "???? ?????? ????? (?x): 0"),
        (Game.CapsuleYellowSingleHelix != "0" ? "Yellow Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleYellowSingleHelix"]) + "x): " + Game.CapsuleYellowSingleHelix : "?????? ?????? ????? (?x): 0"),
        (Game.CapsuleGreenSingleHelix != "0" ? "Green Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleGreenSingleHelix"]) + "x): " + Game.CapsuleGreenSingleHelix : "????? ?????? ????? (?x): 0")
    ].join("<br>")
    const Capsule1Data = [
        (Game.CapsuleWhiteSingleHelix != "0" ? "White Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleWhiteSingleHelix"]) + "x): 50%" : "????? ????? ????? (?x): 50%"),
        (Game.CapsuleRedSingleHelix != "0" ? "Red Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleRedSingleHelix"]) + "x): 30%" : "??? ?????? ????? (?x): 30%"),
        (Game.CapsuleBlueSingleHelix != "0" ? "Blue Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleBlueSingleHelix"]) + "x): 14%" : "???? ?????? ????? (?x): 14%"),
        (Game.CapsuleYellowSingleHelix != "0" ? "Yellow Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleYellowSingleHelix"]) + "x): 5%" : "?????? ?????? ????? (?x): 5%"),
        (Game.CapsuleGreenSingleHelix != "0" ? "Green Single Helix (" + Math.addSuffix(DnaBoosts["CapsuleGreenSingleHelix"]) + "x): 1%" : "????? ?????? ????? (?x): 1%")
    ].join("<br>")

    const ReleaseEventCapsuleHTML = [
        (Game.CapsuleExtraterrestrialQuadrupleHelix != "0" ? "Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleExtraterrestrialQuadrupleHelix"]) + "x): " + Game.CapsuleExtraterrestrialQuadrupleHelix : "???????????????? ????????? ????? (?x): 0"),
        (Game.CapsulePrestigiousExtraterrestrialQuadrupleHelix != "0" ? "Prestigious Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsulePrestigiousExtraterrestrialQuadrupleHelix"]) + "x): " + Game.CapsulePrestigiousExtraterrestrialQuadrupleHelix : "?????????? ???????????????? ????????? ????? (?x): 0"),
        (Game.CapsuleOmegaExtraterrestrialQuadrupleHelix != "0" ? "Omega Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleOmegaExtraterrestrialQuadrupleHelix"]) + "x): " + Game.CapsuleOmegaExtraterrestrialQuadrupleHelix : "????? ???????????????? ????????? ????? (?x): 0"),
        (Game.CapsuleSuperExtraterrestrialQuadrupleHelix != "0" ? "Super Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleSuperExtraterrestrialQuadrupleHelix"]) + "x): " + Game.CapsuleSuperExtraterrestrialQuadrupleHelix : "????? ???????????????? ????????? ????? (?x): 0"),
        (Game.CapsuleUltraExtraterrestrialQuadrupleHelix != "0" ? "Ultra Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleUltraExtraterrestrialQuadrupleHelix"]) + "x): " + Game.CapsuleUltraExtraterrestrialQuadrupleHelix : "????? ???????????????? ????????? ????? (?x): 0"),
        (Game.CapsuleHyperExtraterrestrialQuadrupleHelix != "0" ? "Hyper Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleHyperExtraterrestrialQuadrupleHelix"]) + "x): " + Game.CapsuleHyperExtraterrestrialQuadrupleHelix : "????? ???????????????? ????????? ????? (?x): 0")
    ].join("<br>")
    const ReleaseEventCapsuleData = [
        (Game.CapsuleExtraterrestrialQuadrupleHelix != "0" ? "Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleExtraterrestrialQuadrupleHelix"]) + "x): 50%" : "???????????????? ????????? ????? (?x): 50%"),
        (Game.CapsulePrestigiousExtraterrestrialQuadrupleHelix != "0" ? "Prestigious Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsulePrestigiousExtraterrestrialQuadrupleHelix"]) + "x): 25%" : "?????????? ???????????????? ????????? ????? (?x): 25%"),
        (Game.CapsuleOmegaExtraterrestrialQuadrupleHelix != "0" ? "Omega Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleOmegaExtraterrestrialQuadrupleHelix"]) + "x): 15%" : "????? ???????????????? ????????? ????? (?x): 15%"),
        (Game.CapsuleSuperExtraterrestrialQuadrupleHelix != "0" ? "Super Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleSuperExtraterrestrialQuadrupleHelix"]) + "x): 9%" : "????? ???????????????? ????????? ????? (?x): 9%"),
        (Game.CapsuleUltraExtraterrestrialQuadrupleHelix != "0" ? "Ultra Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleUltraExtraterrestrialQuadrupleHelix"]) + "x): 0.9%" : "????? ???????????????? ????????? ????? (?x): 0.9%"),
        (Game.CapsuleHyperExtraterrestrialQuadrupleHelix != "0" ? "Hyper Extraterrestrial Quadruple Helix (" + Math.addSuffix(DnaBoosts["CapsuleHyperExtraterrestrialQuadrupleHelix"]) + "x): 0.1%" : "????? ???????????????? ????????? ????? (?x): 0.1%")
    ].join("<br>")

    ele("Capsule1Display").innerHTML = `<u>${Capsule1HTML}</u>`
    ele("Capsule1Data").innerHTML = `${Capsule1Data}`
    ele("Capsule1Button").innerHTML = `Costs $${Math.addSuffix(CapsuleCosts[1])}`

    ele("ReleaseEventCapsuleDisplay").innerHTML = `<u>${ReleaseEventCapsuleHTML}</u>`
    ele("ReleaseEventCapsuleData").innerHTML = `${ReleaseEventCapsuleData}`
    ele("ReleaseEventCapsuleButton").innerHTML = `Costs $${Math.addSuffix(CapsuleCosts[0])}`
}

function UpdateElectronBoost() {
    let CalculateBoost = 0
    for (let CapsuleData in Game) {
        if (!CapsuleData.startsWith("Capsule")) continue
        if (typeof Number(Game[CapsuleData]) != "number") continue
        CalculateBoost += Number(Game[CapsuleData]) * Number(DnaBoosts[CapsuleData])
    }
    if (Number(Game.UpgradeUnlockEquations) >= 3) {
        CalculateBoost *= Vars[Game.UpgradeUnlockEquations]
        CalculateBoost += Vars[Game.UpgradeUnlockEquations]
    }
    ElectronBoost = Math.smooth(CalculateBoost)
}

function UpdateBuyableAmount() {
    BuyableEvolves = Math.smooth(Number(Game.Electrons) / (EvolveBasePrice * (1 + Number(Game.Atoms))))
    BuyableRebirths = Math.smooth((Number(Game.Atoms) + BuyableEvolves) / (RebirthBasePrice * (1 + Number(Game.Deoxyriboses))) * (1 + Number(Game.HelixStrands) * 0.6))
    BuyablePrestiges = Math.smooth((Number(Game.Deoxyriboses) + BuyableRebirths) / (PrestigeBasePrice * (1 + Number(Game.HelixStrands))) * (1 + Number(Game.DNA) * 0.5))
}

function UpdateDisplay() {
    DisplayFixes()
    CurrencyDisplay()
    ButtonsDisplay()
    UpdateEquation()
    EquationsDisplay()
    UpgradesDisplay()
    CapsuleDisplay()
}

function Click() {
    UpdateEquation()
    UpdateElectronBoost()

    const increment = Math.smooth(1 * Number(Game.UpgradeElectronMultiplier) * (1 + ElectronBoost) * (1 + Number(Game.Atoms)) * (1 + Number(Game.Deoxyriboses) * 0.5))
    Game.Electrons = Math.smooth(Number(Game.Electrons) + increment)
    Game.Cash = Math.smooth(Number(Game.Cash) + (increment / 100 * Number(Game.UpgradeCashMultiplier)))
    
    UpdateBuyableAmount()
    UpdateDisplay()
}

function Evolve() {
    if (Game.Electrons == "0") return

    UpdateEquation()
    UpdateElectronBoost()

    const Confirmed = confirm("Are you sure you want to evolve and get " + Math.addSuffix(BuyableEvolves) + " Atoms? You will have " + Math.addSuffix(Math.smooth(Number(Game.Electrons) - (BuyableEvolves * EvolveBasePrice * (1 + Number(Game.Atoms))))) + " Electrons after evolving.")
    if (Confirmed == true) {
        Game.Electrons = Math.smooth(Number(Game.Electrons) - (BuyableEvolves * EvolveBasePrice * (1 + Number(Game.Atoms))))
        Game.Atoms = Math.smooth(Number(Game.Atoms) + BuyableEvolves)
    }

    UpdateBuyableAmount()
    UpdateDisplay()
}

function Rebirth() {
    if (Game.Atoms == "0") return

    UpdateEquation()
    UpdateElectronBoost()

    const Confirmed = confirm("Are you sure you want to rebirth and get " + Math.addSuffix(BuyableRebirths) + " Deoxyriboses? You will have 0 Electrons and 0 Atoms after rebirthing.")
    if (Confirmed == true) {
        Game.Electrons = 0
        Game.Atoms = 0
        Game.Deoxyriboses = Math.smooth(Number(Game.Deoxyriboses) + BuyableRebirths)
    }

    UpdateBuyableAmount()
    UpdateDisplay()
}

function Prestige() {
    if (Game.Deoxyriboses == "0") return

    UpdateEquation()
    UpdateElectronBoost()

    const Confirmed = confirm("Are you sure you want to prestige and get " + Math.addSuffix(BuyablePrestiges) + " Helix Strands? You will have 0 Electrons, 0 Atoms and 0 Deoxyriboses after prestiging.")
    if (Confirmed == true) {
        Game.Electrons = 0
        Game.Atoms = 0
        Game.Deoxyriboses = 0
        Game.HelixStrands = Math.smooth(Number(Game.HelixStrands) + BuyablePrestiges)
    }

    UpdateBuyableAmount()
    UpdateDisplay()
}

function UpgradeCashMultiplier() {
    if (Number(Game.UpgradeCashMultiplier) >= 500) {
        alert("This upgrade has reached the maximum level.")
    } else {
        const Cost = 1000 * Math.pow(2, Number(Game.UpgradeCashMultiplier) - 1)

        if (Number(Game.Cash) < Cost) {
            alert("You do not have enough Cash to purchase this upgrade, you need $" + Math.addSuffix(Cost - Number(Game.Cash)) + " more.")
        } else {
            Game.Cash = Math.smooth(Number(Game.Cash) - Cost)
            Game.UpgradeCashMultiplier = Math.smooth(Number(Game.UpgradeCashMultiplier) + 1)
        }

        UpdateElectronBoost()
        UpdateDisplay()
    }
}

function UpgradeElectronMultiplier() {
    if (Number(Game.UpgradeElectronMultiplier) >= 500) {
        alert("This upgrade has reached the maximum level.")
    } else {
        const Cost = 1000000 * Math.pow(2, Number(Game.UpgradeElectronMultiplier) - 1)

        if (Number(Game.Cash) < Cost) {
            alert("You do not have enough Cash to purchase this upgrade, you need $" + Math.addSuffix(Cost - Number(Game.Cash)) + " more.")
        } else {
            Game.Cash = Math.smooth(Number(Game.Cash) - Cost)
            Game.UpgradeElectronMultiplier = Math.smooth(Number(Game.UpgradeElectronMultiplier) + 1)
        }

        UpdateElectronBoost()
        UpdateDisplay()
    }
}

function UpgradeUnlockEquations() {
    if (Number(Game.UpgradeUnlockEquations) >= 10) {
        alert("This upgrade has reached the maximum level.")
    } else if (!(Game.Electrons == "0")) {
        const Cost = 1000000000000000 * Math.pow(1000000000000, Number(Game.UpgradeUnlockEquations))

        if (Number(Game.Cash) < Cost) {
            alert("You do not have enough Cash to purchase this upgrade, you need $" + Math.addSuffix(Cost - Number(Game.Cash)) + " more.")
        } else {
            Game.Cash = Math.smooth(Number(Game.Cash) - Cost)
            Game.UpgradeUnlockEquations = Math.smooth(Number(Game.UpgradeUnlockEquations) + 1)
        }

        UpdateElectronBoost()
        UpdateDisplay()
    }
}

function UpgradeAlphaExponent() {
    if (Number(Game.UpgradeAlphaExponent) >= 10) {
        alert("This upgrade has reached the maximum level.")
    } else if (!(Game.Electrons == "0")) {
        const Cost = 1000000000 * Math.pow(1000, Number(Game.UpgradeAlphaExponent))

        if (Number(Game.Cash) < Cost) {
            alert("You do not have enough Cash to purchase this upgrade, you need $" + Math.addSuffix(Cost - Number(Game.Cash)) + " more.")
        } else {
            Game.Cash = Math.smooth(Number(Game.Cash) - Cost)
            Game.UpgradeAlphaExponent = Math.smooth(Number(Game.UpgradeAlphaExponent) + 1)
        }

        UpdateElectronBoost()
        UpdateDisplay()
    }
}

function UpgradeAlphaMultiplication() {
    if (Number(Game.UpgradeAlphaMultiplication) >= 10) {
        alert("This upgrade has reached the maximum level.")
    } else if (!(Game.Electrons == "0")) {
        const Cost = 1000000 * Math.pow(100, Number(Game.UpgradeAlphaMultiplication) - 1)

        if (Number(Game.Cash) < Cost) {
            alert("You do not have enough Cash to purchase this upgrade, you need $" + Math.addSuffix(Cost - Number(Game.Cash)) + " more.")
        } else {
            Game.Cash = Math.smooth(Number(Game.Cash) - Cost)
            Game.UpgradeAlphaMultiplication = Math.smooth(Number(Game.UpgradeAlphaMultiplication) + 1)
        }

        UpdateElectronBoost()
        UpdateDisplay()
    }
}

function RandomChance(Maximum) {
    return Math.ceil(Math.random() * Maximum)
}

function CapsuleFollowUp(Dna, DnaDisplay) {
    Game.Cash = Math.smooth(Number(Game.Cash))
    Game[Dna] = Number(Game[Dna]) + 1
    document.getElementById("CapsuleOutput").innerHTML = "You got " + DnaDisplay + " from the capsule!"
}

function CapsuleOne() {
    const BasePrice = CapsuleCosts[1]

    if (Number(Game.Cash) < BasePrice) {
        alert("You do not have enough Cash to purchase this capsule, you need $" + Math.addSuffix(BasePrice - Number(Game.Cash)) + " more.")
    } else {
        Game.Cash = Number(Game.Cash) - BasePrice

        const Random = RandomChance(100)
        
        if (Random <= 50) {
            CapsuleFollowUp("CapsuleWhiteSingleHelix", "White Single Helix")
        } else if (Random <= 80) {
            CapsuleFollowUp("CapsuleRedSingleHelix", "Red Single Helix")
        } else if (Random <= 94) {
            CapsuleFollowUp("CapsuleBlueSingleHelix", "Blue Single Helix")
        } else if (Random <= 99) {
            CapsuleFollowUp("CapsuleYellowSingleHelix", "Yellow Single Helix")
        } else {
            CapsuleFollowUp("CapsuleGreenSingleHelix", "Green Single Helix")
        }

        UpdateElectronBoost()
        UpdateBuyableAmount()
        UpdateDisplay()
    }
}

function ReleaseEventCapsule() {
    const BasePrice = CapsuleCosts[0]

    if (Number(Game.Cash) < BasePrice) {
        alert("You do not have enough Cash to purchase this capsule, you need $" + Math.addSuffix(BasePrice - Number(Game.Cash)) + " more.")
    } else {
        Game.Cash = Number(Game.Cash) - BasePrice

        const Random = RandomChance(1000)
        
        if (Random <= 500) {
            CapsuleFollowUp("CapsuleExtraterrestrialQuadrupleHelix", "Extraterrestrial Quadruple Helix")
        } else if (Random <= 750) {
            CapsuleFollowUp("CapsulePrestigiousExtraterrestrialQuadrupleHelix", "Prestigious Extraterrestrial Quadruple Helix")
        } else if (Random <= 900) {
            CapsuleFollowUp("CapsuleOmegaExtraterrestrialQuadrupleHelix", "Omega Extraterrestrial Quadruple Helix")
        } else if (Random <= 990) {
            CapsuleFollowUp("CapsuleSuperExtraterrestrialQuadrupleHelix", "Super Extraterrestrial Quadruple Helix")
        } else if (Random <= 999) {
            CapsuleFollowUp("CapsuleUltraExtraterrestrialQuadrupleHelix", "Ultra Extraterrestrial Quadruple Helix")
        } else {
            CapsuleFollowUp("CapsuleHyperExtraterrestrialQuadrupleHelix", "Hyper Extraterrestrial Quadruple Helix")
        }

        UpdateElectronBoost()
        UpdateBuyableAmount()
        UpdateDisplay()
    }
}

function Base64Encode(string) {
    let result = btoa(encodeURIComponent(string))
    for (let i = 1; i <= 10; i++) result = btoa(encodeURIComponent(result))
    return result
}
function Base64Decode(string) {
    let result = decodeURIComponent(atob(string))
    for (let i = 1; i <= 10; i++) result = decodeURIComponent(atob(result))
    return result
}

function DataImport(token) {
    try {
        if (token == "") throw new Error()
        const data = Base64Decode(token)
        const dataArray = data.split("|")
        for (let i = 0; i <= dataArray.length - 1; i++) dataArray[i] = dataArray[i].split(":")
        const confirmation = confirm("Are you sure you want to override the current data with your data token?")
        if (confirmation == true) {
            for (let i = 0; i <= dataArray.length - 1; i++) {
                if (!Game[dataArray[i][0]]) throw new Error()
                Game[dataArray[i][0]] = dataArray[i][1]
            }
            document.getElementById("DataImport").value = ""

            UpdateElectronBoost()
            UpdateBuyableAmount()
            UpdateDisplay()

            alert("Successfully overrided the data.")
        }
    } catch (exception) {
        alert("The token you've entered was not valid.")
        return
    }
}

function DataExport() {
    let JSONData = []
    for (let item in Game) {
        if (typeof Game[item] != "string") continue
        JSONData.push(`${item}:${Game[item]}`)
    }
    navigator.clipboard.writeText(Base64Encode(JSONData.join("|")))
    alert("Copied data token to clipboard.")
}

window.addEventListener('keydown', e => {
    if (e.key == 'F12') e.preventDefault()
    if (e.ctrlKey && e.shiftKey && (e.key == 'i' || e.key == 'I')) e.preventDefault()
    if (e.altKey) e.preventDefault()
})
window.addEventListener('contextmenu', e => e.preventDefault())

UpdateElectronBoost()
UpdateBuyableAmount()
UpdateDisplay()