export default function Invite() {

  function sendInvite(){
    const inputValue = document.getElementById('inviteInput').value;
    // eslint-disable-next-line
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(inputValue)){ return alert("The email adress is not valid")}
    const emailInStorage = localStorage.getItem('email');
    console.log(emailInStorage);
    if(emailInStorage){
      if(emailInStorage === inputValue) return alert("This email adress have already been submitted.");
      localStorage.setItem("email", inputValue)
      return alert("Request has been send.")
    }
    if(!emailInStorage){
      localStorage.setItem("email", inputValue)
      return alert("Request has been send.") 
    }
  }


  return (
    <section className='invite'>

      <span className="invite__text-container">
        <h2 className="invite__title">Invitation to beta</h2>
        <p className="invite__text">You can apply for the beta here. Please fill the field with you're email adress.</p>
      </span>
      
      <input type="email" name="" className="invite__email" id="inviteInput" placeholder="enter you're email address"/>
      <button className="request-invite invite__btn" onClick={()=>sendInvite()}>Send the request</button>

    </section>
  );
}