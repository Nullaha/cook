<script setup>

</script>

<template>
    <div class="form px-3" id="login">

        <input type="hidden" name="ga_id" class="js-octo-ga-id-input">
        <div class="auth-form-header p-0">
            <h1>1111</h1>
        </div>
        <div class="form-body" m="t-3">
            <form data-turbo="false" action="/session" accept-charset="UTF-8" method="post">
                <label for="login_field">Username or email address</label>
                <input type="text" name="login" id="login_field" class="form-control input-block js-login-field"
                    autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus">

                <div class="position-relative">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password"
                        class="form-control form-control input-block js-password-field" autocomplete="current-password">

                    <input type="submit" name="commit" value="Sign in"
                        class="btn btn-primary btn-block js-sign-in-button" data-disable-with="Signing in…"
                        data-signin-label="Sign in" development="false">

                    <!-- <a class="label-link position-absolute top-0 right-0" tabindex="0" href="/password_reset">忘记密码</a> -->
                </div>
            </form>
        </div>

        <p class="login-callout" m="t-3">
            New to GitHub?
            <a data-ga-click="Sign in, switch to sign up"
                href="/signup?source=login">Create an account</a>.
        </p>

    </div>
</template>


<style scoped>
.form {
    width: 340px;
    margin: 0 auto;

}

.form-body {
    padding: 16px;
    font-size: 14px;
    background-color: #f6f8fa;
    border: 1px solid hsla(210, 18%, 87%, 1);
    border-radius: 6px;
}

.form label {
    display: block;
    margin-bottom: 8px;
    font-weight: 400;
    text-align: left;
}


.form-control:-webkit-autofill {
    box-shadow: inset 0 0 0 32px #ffffff !important;
    -webkit-text-fill-color: #24292f;
}

.form-body .input-block {
    margin-top: 4px;
    margin-bottom: 16px;
}

.input-block {
    display: block;
    width: 100%;
}

.form-control,
.form-select {
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #24292f;
    vertical-align: middle;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    outline: none;
    box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
}

.position-relative {
    position: relative !important;
}


.form .btn {
    margin-top: 16px;
}

.btn-block {
    display: block;
    width: 100%;
    text-align: center;
}

.btn-primary {
    color: #ffffff;
    background-color: #2da44e;
    border-color: rgba(27, 31, 36, 0.15);
    box-shadow: 0 1px 0 rgba(27, 31, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.03);
}

.btn {
    position: relative;
    display: inline-block;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid;
    border-radius: 6px;
    -webkit-appearance: none;
    appearance: none;
}

* {
    box-sizing: border-box;
}

.login-callout {
    padding: 16px 16px;
    text-align: center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
}

a {
    color: #0969da;
    text-decoration: none;
}
</style>