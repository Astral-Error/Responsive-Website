document.write(`<div id="welcome-msg">Welcome</div>`);
var videoList = ['1.webm','2.webm','3.webm']
var titleList = ['The Shining Moon','The Worlds end','The Destroyer'];
counter = 0;

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

function getInput(){
    event.preventDefault();
    const fileName = document.getElementById('file-name').value;
    const title = document.getElementById('Title').value;
    if(!fileName.endsWith('.webm')){
        window.alert("Error in File Extension");
        form.reset();
        return;
    }
    else{
        let userConfirm = confirm("Are you sure you want to add "+title+" into the videolist?");
        let temp = prompt("Enter a tag for this video: ");
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
            form.reset();
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

const button = document.getElementById('next');
button.addEventListener('click',callFunctions);

const formSubmitButton = document.getElementById('submission-button');
formSubmitButton.addEventListener('click',getInput);

const fileNameTextBox = document.getElementById('file-name');
fileNameTextBox.addEventListener('mouseover',changeBorderOnHover);
fileNameTextBox.addEventListener('mouseout',changeBorderOnOut);

const titleTextBox = document.getElementById('Title');
titleTextBox.addEventListener('mouseover',changeBorderOnHover);
titleTextBox.addEventListener('mouseout',changeBorderOnOut);