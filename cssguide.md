body {
    background-color: #eee;
    padding-top: 20px;
    font-family: Courier New, Courier, monospace;
    color: white;
    text-shadow: 0 0 2px black, -1px -1px 2px black, 1px 0 2px black, 1px 1px 2px black;
    background: url('../images/bgimage.jpg') no-repeat;
    background-size: cover;
}
.container { 
    text-align: center;
    
}
h1,h2,h3,
h4,h5,h6 {
    padding: 5px;
    background-color: rgba(12,51,114,.6);
}
#title-image, #gameover-image, #youwin-image{ 
    display: block;
    margin: 0 auto;
}

#currentWord {
    letter-spacing: 10px;
}

#pressKeyTryAgain, 
#gameover-image, 
#youwin-image { display: none;}
.gameplay-column {
    padding-top: 20px;
    border: 3px dashed #fff;
    text-align: center;
    margin-top: 20px;
    min-height: 500px;
    background-color: rgba(255, 255, 255, .3);
}