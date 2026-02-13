function loadingFunction(){
    const loader = document.getElementById("loader");
    setTimeout(()=>loader.classList.add("hide"), 500);
}

window.addEventListener("load", loadingFunction);
document.write(`<div id="welcome-msg">Welcome</div>`);
let videoList = ['1.webm','2.webm','3.webm']
let titleList = ['The Shining Moon','The Worlds end','The Destroyer'];
let reserveVideos = ['4.webm','5.webm'];
let reserveTitles = ['Butterfly Garden','Cyberpunk'];
let counter = 0;
let jsObject = {name:"JOTF", creator:"Sarvansh Mishra", version: 1.0};

document.getElementById('credentials').textContent = "Creator: "+jsObject.creator;

function showCurrentlyAddedVideos(){
    let allData="";
    for(let i=0;i<titleList.length;i++){
        allData+='<li>';
        allData+=titleList[i];
        allData+='</li>';
    }
    document.getElementById('current-files').innerHTML=allData;
}
showCurrentlyAddedVideos();

function changeVideo(){
    const videoElement = document.querySelector('.main-video');
    counter=(counter+1)%videoList.length;
    videoElement.src=videoList[counter];
    videoElement.load();
    videoElement.play();
}

function changeVideoTitle(){
    const videoNameElement = document.getElementById('video-name');
    videoNameElement.textContent= titleList[counter];
}

function callFunctions(){
    changeVideo();
    changeVideoTitle();
}

function printVideoList(){
    for(let i=0;i<videoList.length;i++){
        console.log(titleList[i]);
    }
}

function getInput(event){
    event.preventDefault();
    const fileName = document.getElementById('file-name').value;
    const title = document.getElementById('Title').value;
    if(!fileName.endsWith('.webm')){
        window.alert("Error in File Extension");
        document.getElementById('form').reset();
        fileNameTextBox.focus();
        return;
    }
    else{
        let userConfirm = confirm("Are you sure you want to add "+title+" into the videolist?");
        if(userConfirm){
            videoList.push(fileName);
            titleList.push(title);
            document.getElementById('file-name').value='';
            document.getElementById('Title').value='';
            alert("Added: " + title);
            console.log("Added "+title+" to video list");
            printVideoList();
            showCurrentlyAddedVideos();
            return;
        }
        else{
            alert("The entry has beeen cancelled");
            document.getElementById('form').reset();
            showCurrentlyAddedVideos();
            return;
        }
    }
}

function changeBorderOnHover(){
    this.style.border = '2px solid rgb(0, 128, 255)';
    this.style.boxShadow = '0 0 30px rgb(0, 128, 255)';
}

function changeBorderOnOut(){
    this.style.border = '2px solid grey';
    this.style.boxShadow = '0 0';
}

function handleScrollAnimation(){

    const rect = imageBox.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const progress = 1 - rect.top / windowHeight;
    const clamped = Math.max(0, Math.min(progress, 1));
    const startWidth = 360;
    const startHeight = 510;
    const endWidth = document.documentElement.clientWidth;
    const endHeight = window.innerHeight * 1.0;
    const newWidth  = startWidth  + (endWidth  - startWidth)  * clamped;
    const newHeight = startHeight + (endHeight - startHeight) * clamped;
    imageBox.style.width  = newWidth  + "px";
    imageBox.style.height = newHeight + "px";
}

function makeMenuVisible(event){
    event.stopPropagation();
    menuBar.classList.toggle('open');
}

function closeMenu(event){
    var clickedInsideMenu = menuBar.contains(event.target);
    var clickedOnButton = hamBtn.contains(event.target);
    if (!clickedInsideMenu && !clickedOnButton) {
        menuBar.classList.remove('open');
    }
}

function addRest(){
    videoList.push(...reserveVideos.slice());
    titleList.push(...reserveTitles.slice());
    showCurrentlyAddedVideos();
}

const button = document.getElementById('next');
button.addEventListener('click',callFunctions);

const formSubmitButton = document.getElementById('submission-button');
formSubmitButton.addEventListener('click',getInput);

const fileNameTextBox = document.getElementById('file-name');
fileNameTextBox.addEventListener('mouseover',changeBorderOnHover);
fileNameTextBox.addEventListener('mouseout',changeBorderOnOut);
fileNameTextBox.addEventListener('change',()=>console.log("value changed in filename text box"));

const titleTextBox = document.getElementById('Title');
titleTextBox.addEventListener('mouseover',changeBorderOnHover);
titleTextBox.addEventListener('mouseout',changeBorderOnOut);

const imageBox = document.querySelector('.image-box');

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

const hamBtn = document.getElementById('ham');
const menuBar = document.getElementById('ham-nav-menu');

hamBtn.addEventListener('click',makeMenuVisible);
document.addEventListener('click',closeMenu);

const addNewVideo = document.getElementById('add-new-vid');
addNewVideo.addEventListener('click',addRest);