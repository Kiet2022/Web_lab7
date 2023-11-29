const problem_1 = (id) =>{
    document.getElementById(id).href = 'https://www.w3schools.com/js/default.asp';
}

const problem_2 = () =>{
    document.querySelector("p").style = "    font-size: 24px;    color: blue;    background: yellow; padding: 5px; ";
    document.querySelector("a").style= "   border-style: solid; border-width: 2;   border-color: red;";
}

const problem_3 = () =>{
   

    const nodes = document.querySelectorAll(".Paragraph");
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].style = "font-size: 24px; color: blue; background: yellow; padding: 5px; border-style: solid; border-width: 2;   border-color: green;";
    }

    const nodes2 = document.querySelectorAll(".Link");
    for (let i = 0; i < nodes2.length; i++) {
        nodes2[i].style = "border-style: solid; border-width: 2;   border-color: red; ";
    }

    const nodes3 =  document.querySelectorAll(".Title");
    for (let i = 0; i < nodes3.length; i++) {
        nodes3[i].style = 'color: orange';
    }

}
const problem_4 = (img) =>{
    var i, x;
    x = document.getElementsByClassName("picture");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(img).style.display = "block";
}

const problem_6 = () => {
    let name = document.forms['myform']['Name'];
    let pass = document.forms['myform']['Password'];
    let phone = document.forms['myform']['Phone'];
    let email = document.forms['myform']['Email'];
    let confirm = document.forms['myform']['ConfirmPassword'];
    let add = document.forms['myform']['Address'];
    let city = document.forms['myform']['City'];
    let state = document.forms['myform']['State'];
    let zip = document.forms['myform']['Zip'];
    let country = document.forms['myform']['Country'];
    let birth = document.forms['myform']['Birthday'];
    let gender = document.forms['myform']['Gender'];
    let datestart = document.forms['myform']['date[]'];
}