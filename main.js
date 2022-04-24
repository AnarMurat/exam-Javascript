// Задание 14
for (var i = 0; i <= 1000; i++) {
    if(i % 3 === 0) {
        console.log(i)
    } else {
        console.log(i + ' = no')
    }
}

// Задание 15
var isWord = true;
    if(isWord){
        console.log("Helo World!")
    }


// Задание 16,17

var information = [{name: "Anar", surname: "Murat", study: "Korkyt Ata university"}]
document.getElementById('inform').innerHTML = information[0].name + " " + information[0].surname + 
" , " + information[0].study;



