<template>
    <div id="contact-me" class="container-box container ">
        <!-- Contenuto della sezione Contact Me -->
        <div class="row h-100">
            <div class="col-12 d-flex flex-column justify-content-center align-items-start">
                <h3 class="display-6 pb-4 align-self-start">Contact me</h3>
                <div class="row">
                    <form @submit.prevent="sendForm()" class="col-12 text-start">
                        <div class="pb-3">
                            <input class="form-control border-pink rounded-5" :class="{ 'is-invalid': errors.email }"
                                type="email" name="email" id="email" placeholder="name@example.com" v-model="email">
                            <p v-for="(error, index) in errors.email" :key="`message-error-${index}`"
                                class="invalid-feedback">
                                {{ error }}
                            </p>
                        </div>
                        <div class="pb-3">
                            <textarea class="form-control border-pink rounded-3" :class="{ 'is-invalid': errors.message }"
                                name="message" id="message" cols="30" rows="10" placeholder="Message"
                                v-model="message"></textarea>
                            <p v-for="(error, index) in errors.message" :key="`message-error-${index}`"
                                class="invalid-feedback">
                                {{ error }}
                            </p>
                        </div>
                        <button class="btn btn-lg btn-send text-white" type="submit" :disabled="loading">
                            {{ loading ? 'Sending...' : 'Send' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ContactComp',
    data() {
        return {
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            this.errors = {};

            if (!this.email) {
                this.errors.email = ['Email is required.'];
            }

            if (!this.message) {
                this.errors.message = ['Message is required.'];
            }

            if (Object.keys(this.errors).length === 0) {
                const data = {
                    email: this.email,
                    message: this.message
                };

                axios
                    .post(`${store.apiURL}/apartment/${this.$route.params.slug}/messages`, data)
                    .then(response => {
                        this.success = response.data.success;
                        if (this.success) {
                            this.errors = response.data.errors;
                        } else {
                            this.email = '';
                            this.message = '';
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        this.errors.generic = 'An error occurred. Please try again later.';
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.loading = false;
            }
        },
    }

}
</script>

<style lang="scss" scoped></style>