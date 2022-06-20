const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const body = document.body;

const currentTheme = localStorage.getItem('theme')
console.log(currentTheme)
if(currentTheme){
    console.log(currentTheme)
    body.classList.add(currentTheme);
    console.log(currentTheme)   
}
else{
    body.classList.add('dark')
}

darkBtn.onclick = () => {
body.classList.replace('light','dark');
localStorage.setItem('theme','dark');
const currentTheme = localStorage.getItem('theme')
console.log(currentTheme)
}   
lightBtn.onclick = () => {
    body.classList.replace('dark','light');
    localStorage.setItem('theme','light');
    const currentTheme = localStorage.getItem('theme')
    console.log(currentTheme)
}



function dark(){

    if(document.body.classList.contains('dark')){
        document.getElementById("icon").src="img/sun.png";
        body.classList.replace('dark','light');
        localStorage.setItem('theme','light');
        const currentTheme = localStorage.getItem('theme')
        console.log(currentTheme)

        

    }
    else if(document.body.classList.contains('light')){
        document.getElementById("icon").src="img/moon.png";
        body.classList.replace('light','dark');
        localStorage.setItem('theme','dark');
        const currentTheme = localStorage.getItem('theme')
        console.log(currentTheme)

    }
    else{
        alert('something worng');
    }
   
}
