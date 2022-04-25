<script setup>

</script>

<template>
    <div class="auth-form px-3" id="login">


        <input type="hidden" name="ga_id" class="js-octo-ga-id-input">
        <div class="auth-form-header p-0">
            <h1>登录</h1>
        </div>
        <div class="auth-form-body mt-3">
            <form data-turbo="false" action="/session" accept-charset="UTF-8" method="post"><input type="hidden"
                    name="authenticity_token"
                    value="hErq6PN-A6G7-witkYpUfz0wh1OcEnWrY4Y0X1GIYc96nelbgwETxa0HRRGlVmOcwgoAPahPzyPVoVPuaZZt2A">
                <label for="login_field">
                    Username or email address
                </label>
                <input type="text" name="login" id="login_field" class="form-control input-block js-login-field"
                    autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus">

                <div class="position-relative">
                    <label for="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password"
                        class="form-control form-control input-block js-password-field" autocomplete="current-password">
                    <input type="hidden" name="trusted_device" id="trusted_device" autocomplete="off"
                        class="form-control">

                    <input type="hidden" class="js-webauthn-support" name="webauthn-support" value="supported">
                    <input type="hidden" class="js-webauthn-iuvpaa-support" name="webauthn-iuvpaa-support"
                        value="supported">
                    <input type="hidden" name="return_to" id="return_to" value="https://github.com/login"
                        autocomplete="off" class="form-control">
                    <input type="hidden" name="allow_signup" id="allow_signup" autocomplete="off" class="form-control">
                    <input type="hidden" name="client_id" id="client_id" autocomplete="off" class="form-control">
                    <input type="hidden" name="integration" id="integration" autocomplete="off" class="form-control">
                    <input type="text" name="required_field_06ca" hidden="hidden" class="form-control"><input
                        type="hidden" name="timestamp" value="1650904203137" autocomplete="off"
                        class="form-control"><input type="hidden" name="timestamp_secret"
                        value="953cfd31ad72460cda1efc4ed006a0dfc4b34e375c37ce374bb7c6778ad203d8" autocomplete="off"
                        class="form-control">

                    <input type="submit" name="commit" value="Sign in"
                        class="btn btn-primary btn-block js-sign-in-button" data-disable-with="Signing in…"
                        data-signin-label="Sign in" data-sso-label="Sign in with your identity provider"
                        development="false">

                    <!-- <a class="label-link position-absolute top-0 right-0" tabindex="0" href="/password_reset">Forgot
                        password?</a> -->
                </div>
            </form>
        </div>



        <p class="login-callout mt-3">
            New to GitHub?
            <a data-ga-click="Sign in, switch to sign up"
                data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;sign in switch to sign up&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/login&quot;,&quot;user_id&quot;:null}}"
                data-hydro-click-hmac="72d062e79bb6ab076a3b88b32943286ea51894183bd812a5038d00013946f239"
                href="/signup?source=login">Create an account</a>.
        </p>

    </div>
</template>


<style scoped>
    .auth-form{
        width: 340px;
        margin: 0 auto;

    }
</style>