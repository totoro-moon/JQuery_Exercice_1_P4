$(document).ready(function () {
    // programmer le choix de l'ordi
    let ComputerPossibilities = ["stone", "leaf", "scissors"];
    let numberGame = 0;
    let numberWin = 0;
    let percenWin = 0;
    let computerChoice = ComputerPossibilities[Math.floor(Math.random() * ComputerPossibilities.length)];
    console.log("choix Computer " + computerChoice);


    $("img").click(function () {
        numberGame++;
        let my_value = $(this).attr("id");
        console.log("choix User " + my_value);

        if (my_value == computerChoice) {
            alert("Egalité");
        } else if (computerChoice == "leaf" && my_value == "stone") {
            alert("c'est mort perdu!!");
        } else if (computerChoice == "scissors" && my_value == "leaf") {
            alert("c'est mort perdu!!");
        } else if (computerChoice == "stone" && my_value == "scissors") {
            alert("c'est mort perdu!!");
        } else {
            numberWin++;
            alert("Bravo Gagné!");
        }
        percenWin = numberWin * 100 / numberGame;
        alert(percenWin + '%' + 'de victoire!');
    });
});
// correction
// $(function () {
//     let numberGame = 0;
//     let numberWin = 0;
//     let percenWin = 0;

//     $('#button').click(function () {
//         numberGame++;
//         let computerChoice = Math.floor(Math.random() * 3) + 1;
//         console.log(computerChoice);
//         let userChoice = $("#select").val();
//         console.log(userChoice);
//         if (userChoice == computerChoice) {
//             alert("Egalité!");
//         } else if ((userChoice == 1 && computerChoice == 2) || (userChoice == 2 && computerChoice == 3) || (userChoice == 3 && computerChoice == 1)) {
//             alert("perdu!");
//         } else {
//             numberWin++;
//             alert("gagné!!")
//         }
//         percenWin = numberWin * 100 / numberGame;
//         alert (percenWin + '%' + 'de victoire!');
//     });
// });
