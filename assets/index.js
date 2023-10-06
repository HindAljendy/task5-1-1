const EntryNumber =document.querySelector("#Entry_number");
const Clear =document.querySelector(".clear");
const Delete =document.querySelector(".delete");
const Calculate =document.querySelector(".calculate");

function display(num){
    EntryNumber.value += num;
}

Clear.addEventListener("click",()=>{
    EntryNumber.value=" ";
})

Delete.addEventListener("click",()=>{
    EntryNumber.value =EntryNumber.value.slice(0,-1) ;
})

Calculate.addEventListener("click",()=>{
    try{
        
        EntryNumber.value = eval(EntryNumber.value);

    }
    catch(err){
        EntryNumber.value="Error";
    }





})