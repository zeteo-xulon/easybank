import { useState } from "react";

export default function Contact() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function submit(){
    if(title.length === 0 || title.length < 2) { return alert("The title need to be more than 2 caracteres") }
    if(text.length === 0 || text.length < 2) { return alert("The text need to be more than 2 caracteres") }
    setTitle('');
    setText('');
    return alert("Your message has been send.")
  }


  return (
    <section className="contact">

      <div className="contact__text-container">
        <h1 className="contact__title">Contact us</h1>
        <p className="contact__text">You can contact us by fulfilling this form.</p>
      </div>

      <form className="contact__form">

        <div className="contact__form__text-container">
          <label className="contact__form__title">Title of your message :</label>
          <input 
          type="text" 
          className="contact__form__input-title" 
          id="contactTitle"
          value={title}
          onChange={(e)=> { setTitle(e.target.value) }}/>
        </div>
        
        <div className="contact__form__text-container">
          <label className="contact__form__title">Text of your message :</label>
          <textarea 
          type="text" 
          className="contact__form__input-textarea" 
          id="contactText" 
          value={text}
          onChange={(e)=> { setText(e.target.value) }}
          />
        </div>
        
      </form>
      
      <button className="contact__btn" id="contactBtn" onClick={()=>{submit()}}>Envoyer</button>

    </section>
  );
}