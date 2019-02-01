<template>
    <div>
        <div v-if="login !== ''">
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
                <div  v-if="!isEditing" @click="toogleIsEditing" class="Profil-Edit-button ui vertical animated button" tabindex="0">
                    <div class="hidden content">Edit</div>
                    <div class="visible content">
                        <i class="edit icon"></i>
                    </div>
                </div>
            </div>
            <div v-if="isEditing" class="Profil-form">
                <form class="ui form">
                    <div class="field">
                        <label>Gender</label>
                        <select :value="gender" @input="updateGender" class="ui fluid dropdown">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Firstname</label>
                        <input autocomplete="off" :value="firstname" @input="updateFirstname" type="text" name="firstname" placeholder="Firstname">
                    </div>
                    <div class="field">
                        <label>Lastname</label>
                        <input :value="lastname" @input="updateLastname" name="lastname" placeholder="Lastname">
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <input :value="email" @input="updateEmail" name="email" placeholder="Email">
                    </div>
                    <div class="field">
                        <label>City</label>
                        <input :value="city" @input="updateCity" name="city" placeholder="City">
                    </div>
                    <div class="field">
                        <label>Phone</label>
                        <input :value="phone" @input="updatePhone" name="phone" placeholder="Phone" maxlength="10">
                    </div>
                    <button @click.prevent="submitForm" class="ui button" type="submit">Valider</button>
                </form>
            </div>
        </div>
        <div v-if="login == ''" class="Profil-notConnected">Veuillez vous connecter pour remplir votre profil</div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import store from '../store/AppStore'

export default {
  store: store,
  data () {
    return {
      isEditing: false
    }
  },
  computed: mapState(['login', 'gender', 'firstname', 'lastname', 'email', 'city', 'phone']),
  methods: {
    ...mapActions(['addGender', 'addFirstname', 'addLastname', 'addEmail', 'addCity', 'addPhone']),
    toogleIsEditing () {
      this.isEditing = true
    },
    updateGender (e) {
      this.addGender(e.target.value)
    },
    updateFirstname (e) {
      this.addFirstname(e.target.value)
    },
    updateLastname (e) {
      this.addLastname(e.target.value)
    },
    updateEmail (e) {
      this.addEmail(e.target.value)
    },
    updateCity (e) {
      this.addCity(e.target.value)
    },
    updatePhone (e) {
      this.addPhone(e.target.value)
    },
    submitForm () {
      this.isEditing = false
    }
  }
}
</script>

<style lang="scss" scoped>
.Profil-form {
    display: inline-block;
    width: 40%;
    vertical-align: top;
    margin: 25px;
}

.Profil-notConnected {
    margin: 20px auto;
    font-size: 29px;
    width: 50%;
    line-height: 37px;
}

.Profil-card {
    display: inline-block;
    vertical-align: top;
    margin: 25px;
    position: relative;

    .bg-female {
        background-color: #ffa78b;
    }
    .bg-male {
        background-color: #83aeff
    }
}

.Profil-Edit-button {
    position: absolute !important;
    bottom: 0;
    margin: 4px;
    right: 0;
}
</style>
