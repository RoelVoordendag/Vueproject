<template>
 <div class="container content">
            <div class="columns">
                <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
                    <app-post :post="post">
                        <h3 slot="title">{{ post.title }}</h3>
                    </app-post>
                </div>
            </div>
        </div> 
  
</template>
<script>
import Post from './Post.vue'
import appService from '../app.service.js'
export default {
  components: {
    'app-post': Post
  },
  data () {
    return {
      id: this.$route.params.id,
      posts: []
    }
  },
  methods: {
        loadGames () {
          console.log('hallo')
          appService.getPosts().then(data => {
              this.posts = data.items
          })
      }
  },
  watch: {
    '$route' (to, from) {
        this.id = to.params.id
        this.loadGames()
    }
  },
  created() {
      this.loadGames()
      console.log('lmap')
  }
}
</script>

