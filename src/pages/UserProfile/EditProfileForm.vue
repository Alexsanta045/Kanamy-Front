<template>
  <card>
    <h4 slot="header" class="card-title">Editar Perfil</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <base-input type="text"
                    label="Empresa"
                    :disabled="true"
                    placeholder="Light dashboard"
                    v-model="user.company">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Nombre de usuario"
                    placeholder="Nombre de usuario"
                    v-model="user.username">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="user.email">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="Nombre"
                    placeholder="Nombre"
                    v-model="user.firstName">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Apellido"
                    placeholder="Apellido"
                    v-model="user.lastName">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input type="text"
                    label="Dirección"
                    placeholder="Dirección"
                    v-model="user.address">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Ciudad"
                    placeholder="Ciudad"
                    v-model="user.city">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Pais"
                    placeholder="Pais"
                    v-model="user.country">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="number"
                    label="Código postal"
                    placeholder="Código postal"
                    v-model="user.postalCode">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Descripción</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Here can be your description"
                      v-model="user.aboutMe">
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Actualizar información
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          company: 'Kanamy',
          username: 'Lucumi',
          email: 'LucumiOcoro@gmail.com',
          firstName: 'Lucumi',
          lastName: 'Ocoro',
          address: 'Chocó, Colombia',
          city: 'Quibdó',
          country: 'Colombia',
          postalCode: '274057',
          aboutMe: `Soy un barbero`
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
