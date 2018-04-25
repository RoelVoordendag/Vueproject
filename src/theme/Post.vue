<template>
  <div class="card">
    <div class="card-content">
        <slot name="title"></slot>
        <slot name="content"></slot>  
    </div>
        <footer class="card-footer">
            <a class="card-footer-item button" :href="'/game/' + post._id">Click for More </a>
        </footer>
  </div>
</template>
<script>
export default {
  props: ['post']
}
</script>
<style scope>
    .card{
        padding-bottom: 40px;
        height: 100%;
    }
    footer{
        position: absolute;
        bottom:0;
        width: 100%;
        left: 0;
    }
</style>


