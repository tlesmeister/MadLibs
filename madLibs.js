//JavaScript Code
function displayMadLibs() {
    let foreignCountry = document.getElementById('tbForeignCountry').value;
    let adjective = document.getElementById('tbAdjective').value;
    let animal = document.getElementById('tbAnimal').value;
    let verb = document.getElementById('tbVerb').value;
    let place = document.getElementById('tbPlace').value;
    let typeOfLiquid = document.getElementById('tbTypeOfLiquid').value;

    let output = document.getElementById('madLibSelections');



    let madLib = `If you are traveling in ${foreignCountry} and find yourself having to cross a piranha-filled river, here’s how to do it safely.Piranhas are more ${adjective} during the day, so cross the river at night.Avoid areas with netted ${animal} traps –piranhas may be waiting there looking to${verb} them!  Piranhas are attracted to fresh ${typeOfLiquid} and will migrate to it as often as possible.Whatever you do, if you have an open wound, try to find another way to get back to the ${place}.`;

    output.textContent = madLib;
}
