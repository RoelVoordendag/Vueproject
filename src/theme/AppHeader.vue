<template>
   <nav class="nav has-shadow">
        <div class="container">
          <router-link to="/" exact>
            <img src="http://bit.ly/vue-img"
              alt="Vue SPA" />
          </router-link>
            <router-link to="/" class="nav-time is-tab" exact>
                Home
            </router-link>
            <router-link to="/post" class="nav-time is-tab" exact>
                Post
            </router-link>
        </div>
      </nav>
</template>
