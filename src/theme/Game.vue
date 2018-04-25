<template>
    <div class="card-game">
    <div class="container">
        <p class="title is-3">Title: {{game.title}}</p> 
        <p class="title is-3">Genre: {{game.genre}}</p>
        <p class="title is-3">Creator: {{game.creater}}</p> 
    </div>
        <a class="button is-danger"  v-on:click="deleteGame" >
            Delete
        </a>
    <div class="form">
        <div class="field">
            <h1 class="title">Change Data</h1>
            <hr>
            <label class="label">Title</label>
            <div class="control">
                <input class="input" type="text" value=""  v-model="title">
            </div>
            </div>

            <div class="field">
                <label class="label">Genre</label>
            <div class="control">
                <input class="input" type="text" value="" v-model="genre">
            </div>
            
            <div class="field">
                <label class="label">Creater</label>
            <div class="control">
                <input class="input" type="text" value="" v-model="creater">
            </div>
            </div>
            <button class="button is-warning" v-on:click="updateData">
                Update Data
            </button>	
        </div>
    </div>
</div>


</template>
<script>
import axios from 'axios'
export default {

data () {
    return {
      id: this.$route.params.id,
      game: []
    }
  },
  methods: {
    deleteGame: function(event) {
        this.delete()
      },
        updateData: function(event) {
            axios.put('/games/' + this.$route.params.id, {
                title: this.title,
                genre: this.genre,
                creater: this.creater
            })
            console.log('put is done')
            this.getId()
        },
      getId() {
          console.log('game id is  ' + this.$route.params.id)
        return new Promise((resolve) => {
            axios.get(`/games/` + this.$route.params.id)
                .then(response => {
                resolve(response.data)
                console.log('ik doe nu een get')
                console.log(response.data)
                console.log(response.status)
                console.log(response.headers)
                this.title = response.data.title
                this.genre = response.data.genre
                this.creater = response.data.creater

                this.game = response.data
                console.log('creater' + response.data.creater)
            })
        })
      },
      delete() {
            axios.delete('/games/' + this.$route.params.id)
        .catch(function (error) {
			console.log('error' + error)
		})
		.then(function (response) {
            console.log('dit is de response ' + response)
            window.location.href = '/'
		})
        console.log('delete')
    }
    // getData() {
    //     this.getId().then(data => {
    //             console.log('getting data')
    //             this.game = data
    //       })
    //   }

  },
  watch: {
    '$route' (to, from) {
        this.getId()
    }
  },
  created() {
      this.getId()
    }
}
</script>
<style lang="scss">
.card-game {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
}
.containter{
    text-align: center;
}
.form{
}

</style>
