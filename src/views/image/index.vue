<template>
	<div>
		
		<el-container style="position: absolute;top: 55px;bottom: 0;left: 0;right: 0;">
		  <el-header class="d-flex align-items-center border-bottom">
			  <!-- 头部 -->
			  <div class="d-flex mr-auto">
				  <el-select class="mr-2" placeholder="请选择图片排序方式" 
				  size="mini" v-model="searchForm.order"
				  style="width: 150px;">
				  	<el-option label="区域一" value="shanghai"></el-option>
				  	<el-option label="区域二" value="beijing"></el-option>
				  </el-select>
				  <el-input class="mr-2" size="mini" 
				  placeholder="输入相册名称" v-model="searchForm.keyword"
				  style="width: 150px;"></el-input>
				  <el-button type="success" size="mini">搜索</el-button>
			  </div>
			  <el-button type="success" size="mini">创建相册</el-button>
			  <el-button type="warning" size="mini">上传图片</el-button>
		  </el-header>
		  <el-container>
			<el-aside width="200px" style="position: absolute;top: 60px;left: 0;bottom: 60px;" class="bg-white border-right">
				<!-- 侧边 | 相册列表-->
				<ul class="list-group list-group-flush">
					<li class="list-group-item list-group-item-action d-flex align-items-center" style="cursor: pointer;" 
					v-for="(item,index) in albums" :key="index"
					:class="{'active sum-active':albumIndex === index}"
					@click.stop="albumChange(index)">
						{{item.name}}  
						<el-dropdown class="ml-auto">
						  <span class="btn btn-light btn-sm border">
							{{item.num}}
							<i class="el-icon-arrow-down el-icon--right"></i>
						  </span>
						  <el-dropdown-menu slot="dropdown">
							<el-dropdown-item>修改</el-dropdown-item>
							<el-dropdown-item>删除</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>

					</li>
				</ul>
				
			</el-aside>
			<el-container>
			  <el-main style="position: absolute;top: 60px;left:200px;bottom: 60px;right: 0;">
				  <!-- 主内容 -->
			  </el-main>
			</el-container>
		  </el-container>
		  <el-footer>
			  <!-- 底部 -->
		  </el-footer>
		</el-container>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchForm:{
					order:"",
					keyword:""
				},
				albumIndex:0,
				albums:[]
			}
		},
		created() {
			this.__init()
		},
		methods: {
			__init() {
				for (var i = 0; i < 20; i++) {
					this.albums.push({
						name:"相册"+i,
						num:Math.floor(Math.random()*100),
						order:0
					})
				}
			},
			// 切换相册
			albumChange(index){
				this.albumIndex = index
			}
		},
	}
</script>

<style>
.sum-active{
	color: #67C23A!important;
    background-color: #f0f9eb!important;
    border-color: #c2e7b0!important;
}
</style>
