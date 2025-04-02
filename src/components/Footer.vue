<template>
  <div class="footer">
    <p class="footer-text">
      &copy; {{ new Date().getFullYear() }} Pamela Montanez
    </p>
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.footer {
  // background-color: $gray;
  color: $black;
  padding: 10px;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  flex-shrink: 0;
  border-top: $black solid 1px;
}
.footer-text {
  text-align: left;
  font-size: 12px; 
}
@media only screen and (max-width: 800px) {

}

@media only screen and (max-width: 450px) {
  
}

</style>
