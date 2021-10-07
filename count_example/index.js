
// document.GetElementById('clickMe').AddEventListener('click', function(){
//     console.log("buttone clicked");
// })
function xyz (){
    let count = 0;
    document.getElementById("clickMe").addEventListener('click', function(){
        console.log("buttone clicked",++count);
    })
}
xyz();