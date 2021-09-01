var firebaseConfig = {
    apiKey: "AIzaSyB_fvTM1IZKWAGEXVmkoS671qS4-qNB01Q",
    authDomain: "contact-form-ffa28.firebaseapp.com",
    projectId: "contact-form-ffa28",
    storageBucket: "contact-form-ffa28.appspot.com",
    messagingSenderId: "229278835810",
    appId: "1:229278835810:web:ae8bb8de5cfcf2e598dd3b"
  };

//   Initialize.firebase(firebaseConfig);
firebase.initializeApp(firebaseConfig);
//   reference contact infos
let contactform=firebase.database().ref('infos');
// listen
document.querySelector('#contactform').addEventListener('submit',submitform);
function submitform(e){
e.preventDefault();
// alert('i am click.') 
let name=document.querySelector("#fname").value; 
let email=document.querySelector("#fmail").value;  
let message=document.querySelector("#mes").value;
console.log(name,email,message);
savecontactinfo(name,email,message);
function savecontactinfo(name,email,message){
newreference=contactform.push();
newreference.set({
name:name,
email:email,
message:message,    
})    
}
};