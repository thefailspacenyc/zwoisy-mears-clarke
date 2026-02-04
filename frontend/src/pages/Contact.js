/* === React Elements === */
import React from "react";
import { useState, useRef } from "react";

const Contact = () => {

    const form = useRef();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
       setTimeout(() => {
           setSubmitted(true);
       }, 100);
    };

    if(submitted) {
        return (

            <div className="page-container full-height flex column space-between">
            <div className="flex center">
                <div className="contact-form">
                    <p>Thank you for your inquiry. You can expect a response within 3-5 business days.</p>
                </div>
            </div>
            <div>
                <div className="hr-line"></div>
                <h1 className="page-title bubblegum">Contact</h1>
                <div className="hr-line"></div>
            </div>
        </div>
        );
    };

    return (
        <div className="page-container full-height flex column space-between">
            <div className="flex center">
                <div className="contact-form">
                    <form
                        className="flex column r-gap-20"
                        ref={form}
                        // action={FORM_ENDPOINT}
                        // onsubmit={handleSubmit}
                        // method="POST"
                        // target="_blank"
                    >
                        <div className="flex space-between flex-wrap r-gap-20">
                            <input 
                                type="text"
                                placeholder="first name"
                                name="name"
                                className="contact-input"
                                required
                            />
                            <input 
                                type="text"
                                placeholder="last name"
                                name="name"
                                className="contact-input"
                                required
                            />
                            <input 
                                type="text"
                                placeholder="pronouns"
                                name="name"
                                className="contact-input"
                                required
                            />
                            <input 
                                type="text"
                                placeholder="email"
                                name="email"
                                className="contact-input"
                                required
                            />
                        </div>
                        <div>
                            <textarea 
                                type="text"
                                placeholder="comment"
                                name="message"
                                className="textarea-input"
                                required
                            />
                        </div>
                        <div className="button-wrapper">
                            <button
                                className="form-button"
                                type="submit"
                                value="Send"
                                onClick={handleSubmit}
                            >
                                send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div className="hr-line"></div>
                <h1 className="page-title">Contact</h1>
                <div className="hr-line"></div>
            </div>
        </div>
    )
}

export default Contact;