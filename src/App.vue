<template>
  <div id="app">
    
	<el-radio-group v-model="radio">
		<el-radio label="线上品牌商赞助"></el-radio>
		<el-radio label="线下场地免费"></el-radio>
	</el-radio-group>
	
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  data() {
  	return {
  		radio:""
  	}
  },
  methods: {

  },
}
</script>

<style>

</style>
