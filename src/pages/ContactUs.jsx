import React from 'react';
function ContactUs() {
    return (
        <>
            <div className="sectionheader">
                <h1>CONTACT</h1>
            </div>

            <p>
                Remplissez le formulaire de contact ci-dessous pour nous contacter dans le cadre de notre application de gestion
                de fleurs.
            </p>

            <label htmlFor="checkcontact" className="contactbutton">
                <div className="mail"></div>
            </label>

            <input id="checkcontact" type="checkbox" />

            <form action="" method="post" className="contactform">
                <p className="input_wrapper">
                    <input type="text" name="contact_nom" id="contact_nom" />
                    <label htmlFor="contact_nom">Nom</label>
                </p>

                <p className="input_wrapper">
                    <input type="text" name="contact_email" id="contact_email" />
                    <label htmlFor="contact_email">Email</label>
                </p>

                <p className="input_wrapper">
                    <input type="text" name="contact_sujet" id="contact_sujet" />
                    <label htmlFor="contact_sujet">Sujet</label>
                </p>

                <p className="textarea_wrapper">
                    <textarea name="contact_message" id="contact_message" placeholder="Message..."></textarea>
                </p>

                <div className="submit_wrapper">
                    <input type="submit" value="ENVOYER" />
                </div>
            </form>
        </>
    );
}

export default ContactUs;