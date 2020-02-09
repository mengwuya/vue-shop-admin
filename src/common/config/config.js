export default {
	logo: '仿小米商城管理系统',
	navBar: {
		active: '0',
		list: [{
				name: "首页",
				subActive: '0',
				submenu: [{
						icon: "el-icon-s-home",
						name: "后台首页",
						pathname:"index"
					},
					{
						icon: "el-icon-s-claim",
						name: "商品列表",
						pathname:"shop_goods_list"
					},
					{
						icon: "el-icon-picture",
						name: "相册管理",
						pathname:"image"
					}
				]
			},
			{
				name: "商品",
				subActive: '0',
				submenu: [{
					icon: "el-icon-s-claim",
					name: "商品列表",
					pathname:"shop_goods_list"
				}]
			},
			{
				name: "订单"
			},
			{
				name: "会员"
			},
			{
				name: "设置"
			},
		]
	}
}
