<template>
    <div>
        <div class="Profil-card">
            <div class="ui cards">
                <div class="card" :class="{'bg-male': gender =='male', 'bg-female': gender=='female'}">
                    <div class="content">
                        <div class="header">
                            {{firstname}} {{lastname}}
                        </div>
                        <div class="meta">
                            {{login}}
                        </div>
                        <div class="description">
                            <div>{{email}}</div>
                            <div>{{phone}}</div>
                            <div>{{city}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  v-if="!isEditing" @click="toogleIsEditing" class="ui vertical animated button" tabindex="0">
            <div class="hidden content">Edit</div>
            <div class="visible content">
                <i class="edit icon"></i>
            </div>
        </div>
        <div v-if="isEditing" class="Profil-form">
            <form class="ui form">
                <div class="field">
                    <label>Gender</label>
                    <select v-model="tempGender" class="ui fluid dropdown">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="field">
                    <label>Firstname</label>
                    <input autocomplete="off" v-model="tempFirstname" type="text" name="firstname" placeholder="Firstname">
                </div>
                <div class="field">
                    <label>Lastname</label>
                    <input v-model="tempLastname" name="lastname" placeholder="Lastname">
                </div>
                <div class="field">
                    <label>Email</label>
                    <input v-model="tempEmail" name="email" placeholder="Email">
                </div>
                <div class="field">
                    <label>City</label>
                    <input v-model="tempCity" name="city" placeholder="City">
                </div>
                <div class="field">
                    <label>Phone</label>
                    <input v-model="tempPhone" name="phone" placeholder="Phone" maxlength="10">
                </div>
                <button @click.prevent="submitForm" class="ui button" type="submit">Valider</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import store from '../store/AppStore'

export default {
  store: store,
  data () {
    return {
      tempGender: '',
      tempFirstname: '',
      tempLastname: '',
      tempEmail: '',
      tempCity: '',
      tempPhone: '',
      isEditing: false
    }
  },
  computed: {
    ...mapGetters(['login', 'gender', 'firstname', 'lastname', 'email', 'city', 'phone'])
  },
  methods: {
    ...mapActions(['addGender', 'addFirstname', 'addLastname', 'addEmail', 'addCity', 'addPhone']),
    toogleIsEditing () {
      this.isEditing = true
    },
    submitForm () {
      this.addGender(this.tempGender)
      this.addFirstname(this.tempFirstname)
      this.addLastname(this.tempLastname)
      this.addEmail(this.tempEmail)
      this.addCity(this.tempCity)
      this.addPhone(this.tempPhone)
      this.isEditing = false
    }
  }
}
</script>

<style lang="scss" scoped>
.Profil-form {
    display: inline-block;
    width: 40%;
}

.Profil-card {
    display: inline-block;

    .bg-female {
        background-color: #ffa78b;
    }
    .bg-male {
        background-color: #83aeff
    }
}
</style>
