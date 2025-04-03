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
                <!-- <h2 class="photo-title">Send me a note.</h2> -->
                <div class="contact-form">
                    <iframe id="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSf3AninhYbF6wZB9TpFu2XHqzmMt77feIH8K11owGYxjuB7Og/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
iframe {
    width: 100%;
    min-height: 700px;
}

@media only screen and (max-width: 450px) {
    iframe {
    min-height: 690px;
    }
}
</style>