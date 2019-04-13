function handleClick(){
    console.log("handleSubmission function ran")
    
    $(".submission").click(function (event){ //click event
        event.preventDefault();
        console.log("submission button clicked")
        let n = $(".nDogs").val();
        getDogs(n);
    });
}


function getDogs(n){
    console.log("getDogs function ran");
    console.log(`number of random dog images to be returned: ${n}`);  
    
    fetch(`https://dog.ceo/api/breeds/image/random/${n}`)
        .then(response => response.json())
        .then(responseJson => displayImage(responseJson))
        
        .catch(error => alert("Oh no... something isn't right. Try again later"));
}


function displayImage(responseJson){

    console.log("display image function ran")
    console.log(responseJson);
    console.log(responseJson.message);
    console.log(responseJson.message[0]);

    let length = responseJson.message.length;
    console.log("length of array is: " + length); 
    let display = ` `

    for(i=0; i<length; i++){
        console.log(i + " pass through array")
        let currentJDog = responseJson.message[i]
        let currentImage = `<img src = "${currentJDog}"><br>`  
        display = display + currentImage;
        $(".container").html(display);
    }
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    handleClick();
  });


    
 