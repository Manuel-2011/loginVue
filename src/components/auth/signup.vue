<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
            <form
            class="text-center border border-primary p-5"
            style="margin-top:70px;height:auto;padding-top:100px !important;"
            @submit.prevent="signUp"
            >
                <h1 class="h3 mb-3 font-weight-normal" style="textalign:
                center"> Registrar usuario</h1>
                <input
                type="text"
                id="name"
                class="form-control mb-5"
                placeholder="name"
                v-model="user.name" />
                
                <input
                type="text"
                id="email"
                class="form-control mb-5"
                placeholder="Email"
                v-model="user.email"
                />
                <!-- Password -->
                <input
                type="password"
                id="password"
                class="form-control mb-5"
                placeholder="Contraseña"
                v-model="user.password"
                />

                <input
                type="password"
                id="password2"
                class="form-control mb-5"
                placeholder="Repite la contraseña"
                v-model="password2"
                />
                <!-- inicio sesion button -->
                <center>
                    <button class="btn btn-primary btn-block w-75 my-
                    4" type="submit">
                        Inicio de sesion
                    </button>
                </center>
            </form>
        </div>
    </div>
</div>
</template>
<script>
    import swal from "sweetalert";

    export default {
        data() {
            return {
                user: {
                    name: "",
                    email: "",
                    password: ""
                },
                password2: ""
            };
        },
        methods: {
            async signUp() {
    
                    if (this.user.password === this.password2) {
                        const response = await this.$http.post("/api/auth/register", this.user)
                        console.log('result of axios',response)
                        if (response.data.resultado) {
                            swal("Bravo!", "El registro ha sido exitoso", "success")
                            return this.$router.push('/')
                        } else {
                            return swal("Error", "Algo salió mal", "error")
                        }
                        
                    } else {
                        return swal("Error", "Las contraseñas no coinciden", "error")
                    }
               
            }
        }
    };
</script>