<template>
    <div>
        <div id="welcome-content" class="welcome-content">
            <h1 class="main-heading">Get in touch</h1>
            <h2>I agree, it's time for us to connect.</h2>
        </div>
        <div id="welcome-about-me" class="welcome-about-me">
            <div class="color-block-contact">
                <img src="@/assets/airplane.gif" />
            </div>
            <div class="text-block-contact">
                <h2 class="photo-title">Send me a note.</h2>
                <h2>Contact Form</h2>
                <div class="contact-form">
                    <form>
                        <label for="name">Name: </label>
                        <input type="text" id="name" name="firstname">

                        <label for="email">Email: </label>
                        <input type="text" id="email" name="email">

                        <label for="message">Message: </label>
                        <textarea id="message" name="message"></textarea>
                        <div class="g-recaptcha" data-sitekey="6LfFwMUUAAAAAEEFtG77rx4g5Ur2wLabqthEYTaj"></div>
                        <button type="button" @click="location.href='mailto:pamrmont@gmail.com';">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>