<<<<<<< HEAD
const apiPort=3000;
const apiBaseUrl = 'http://localhost:'+apiPort; // http://localhost:3000
export function handleSubmit2(event) {
=======
export function handleSubmit(event) {
>>>>>>> d68c4f3d5393dfe830a4fa3bd2d88b80f0a1ae62
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
<<<<<<< HEAD
    Client.checkForName(formText) //All written js must reference client library- m

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
    

    

    
    return false;
}

// Adds click event for #generate button
// document.getElementById('generate').addEventListener('click', performAction);

// Create a new date instance dynamically with JS 
function getDate() {
    const d = new Date();
    const newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
  
    return newDate;
  }

  
 function updateUI () {
      // Gets data from the server -m 
      fetch(apiBaseUrl+'/all')
        .then(res => res.json())
        .then((projectData) => {
            console.log('P DATA', projectData)
            document.getElementById('results').innerHTML = projectData.date;
            document.getElementById('temp').innerHTML = projectData.temperature+"&deg"+"F";
        })
        .catch((error) => {
          console.log("error", error);
        })
    }

  
  
  // Async POST
  function postData ( url, data) {
      const formattedData = JSON.stringify(data);
      console.log('FORMATTED DATA', formattedData);
    return fetch(apiBaseUrl+url, {
      method: 'post',
      body: JSON.stringify(data) // body data type must match "Content-Type" header        
    })
    .then(res => res.json());
  }
  
  export function handleSubmit(event){
      event.preventDefault();
      const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
      const apiKey = '&appid=ded2480664e28367b432793866b6b8c5';
      
      // Gets zipcode and feelings from user input
      const zipCode =  document.getElementById('name').value;
  
      // Gets zipcode from Open Weather Map
      getZipCode(baseURL, zipCode, apiKey) 
        .then(function(data){
           
            // Add data to POST request -m 
            // data.date = (new Date()).toDateString(); 
        
            const serverData = {
                date: getDate(),
                temp: "data.main.temp",
                humidity: "data.main.humidity"
            }
            // Sends data to the server -m 
            return postData('/', serverData)
        })
        .then(updateUI)
        .catch((error) => {
            alert('Error occured');
            console.log(error);
        } )

          


        return false;
  }
  
  function getZipCode (baseURL, zipCode, apiKey) {
    return fetch(baseURL+zipCode+apiKey+'&units=imperial')
        .then(res => res.json())
  }
=======
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}
>>>>>>> d68c4f3d5393dfe830a4fa3bd2d88b80f0a1ae62
