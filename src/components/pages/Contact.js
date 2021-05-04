import React from 'react'

export default function Contacts() {
    return (


        <div className='contacts'>

            <div className='contacts--container'>
                <div className='contacts--container__title' >
                    GET IN TOUCH WITH ME
                </div>

                <div className='contacts--container__input_field'>

                    <form className='contacts--container__input_field--form' >

                        <div className='contacts--container__input_field--form__text' >Your email</div>

                        <input
                            className='contacts--container__input_field--form__input'
                            type='email'

                        />

                        <div className='contacts--container__input_field--form__text' >Subjects</div>

                        <input
                            className='contacts--container__input_field--form__input'
                            type='text'
                        />

                        <div className='contacts--container__input_field--form__text' >Your message (optional)</div>


                        <div className="contacts--container__input_field--form__text_area">

                            <textarea
                                className="contacts--container__input_field--form__text_area--paragraph"
                                placeholder='Tell me about your opinions..'
                                rows="5" cols="50"
                            />
                        </div>


                        <button
                            className='contacts--container__input_field--form__submit'
                            type='submit'
                        >
                            Submit
                        </button>

                        <div className='contacts--container__side_text' >
                            The function currently unavailable.
                            The module has not been deployed.
                        </div>

                    </form>
                </div>
            </div>


        </div>

    )
}
