var fruit_type = prompt("Name the fruit u wanna eat: ");
{
switch(fruit_type){
    case "Apple":
        alert("Apple is rs100 per kg");
        break;
    case "Banana":
        alert("Banana is rs200 per kg");
        break;
    case "Orange":
        alert("Orange is rs50 per kg");
        break;
    case "Strawberry":
        alert("Strawberry is rs180 per kg");
        break;
    default:
        alert(`${fruit_type} is sold out.`);
        break;
}     
    alert("Anything else?");
}