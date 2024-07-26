function Contact() {
    <article className="contact" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.96777877604!2d2.2646347903190502!3d48.858825492280886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sbd!4v1721556034705!5m2!1sen!2sbd"
          width="400" height="300" loading="lazy"></iframe>
      
        <section className="contact-form">
          <h3 className="h3 form-title">Formulaire de contact</h3> 
          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Nom complet" required data-form-input>
              <input type="email" name="email" className="form-input" placeholder="Email" required data-form-input>
            </div>
            <textarea name="message" className="form-input" placeholder="Votre message" required data-form-input></textarea>
            <button className="form-btn" type="submit" disabled data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Envoyer un mail</span>
            </button>
          </form>

        </section>
      </article>
}
export default Contact;