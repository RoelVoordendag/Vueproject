<template>
<div class="content">
	<h2>Post Data</h2>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Title</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input class="input" type="text" 
			  placeholder="Title"  v-model="title">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Genre</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input class="input" type="text" 
			  placeholder="Genre"  v-model="genre">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Creator</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input class="input" type="text" 
			  placeholder="Creator"  v-model="creater">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label">
		  <!-- Left empty for spacing -->
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <button class="button is-primary" v-on:click="postData">
				Post
			  </button>	
				<h2 id="error">{{msg}}</h2>
			</div>
		  </div>
		</div>
	</div>
</div>
</template>
<script>
import axios from 'axios'
export default {

data () {
	return {
		title: '',
		creater: '',
		genre: '',
		msg: ''
	}
},
  methods: {
		getFormValues (submitEvent) {
			this.title = submitEvent.target.elements.title.value
			this.genre = submitEvent.target.elements.genre.value
			this.creater = submitEvent.target.elements.creater.value
			this.error = submitEvent.target.elements.msg.value

			this.postData(this.msg)
},
  postData: function(event) {
      axios.post('/games', {
                title: this.title,
                genre: this.genre,
								creater: this.creater
			})
			.catch(function (error) {
				console.log(error)
				document.getElementById('error').innerHTML =
				'Er zijn velden leeg vul ze in'
			})
			.then(function (response) {
				console.log('dit is de response ' + response)
				if (response) {
					document.getElementById('error').innerHTML =
					''
				}
			})
			console.log('werkt dit')
			this.creater = ''
			this.title = ''
			this.genre = ''
}
  },
  watch: {
    '$route' (to, from) {
    }
  },
  created() {
    }
}
</script>
<style>
#error{
	text-align: left;
}
</style>
