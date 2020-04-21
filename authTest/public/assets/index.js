const form=document.querySelector('#formM');
console.log("Form Load Done!!");

const signoutBtn=document.querySelector("#signOut");
console.log("Sign Out Load Done!!");

const testBtn=document.querySelector("#test");
console.log("Test Load Done!!");
//load features done
console.log(new Date());
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Form Submit");    
    const data = {
        email : form['name'].value,        
        password : form['mass'].value,
		loginDate:""+new Date()
    };
    console.log(data);
    
	firebase.auth().signInWithEmailAndPassword(data.email, data.password)
	.then((user)=>{
		console.log("user Details");
		console.log(user);	
		onloadTest();
	})
	.catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode , errorMessage);
	});
});

signoutBtn.addEventListener('click', (e)=>{
	firebase.auth().signOut().then(function() {		
		console.clear();
		console.log("sign-out successfull");
		alert("User Sign-out Successfull !!");
	}).catch(function(error) {
		console.log("ERROR : Sign-out unsuccessfull");
		alert("ERROR : User Sign-out Unsuccessfull !!");
	});
});

testBtn.addEventListener('click', (e)=>{
	console.log("Test Clicked");
	onloadTest();
});

function onloadTest(){
	var user = firebase.auth().currentUser;
	if(user!=null)
	{
		console.log("User Available Details As Follows :: ");
		console.log(user);
	}
	else
	{
		console.log("User is Currently Signed out");
	}
}

window.onload = function(){
	onloadTest();	
};