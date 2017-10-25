/**
 * @description 主页数据
 */

export default {
	Attributes:[
		{
			parameter:'title',
			explain:'标题',
			type:'String',
			chioceVal:'-',
			defaultVal:'提示'
		},
		{
			parameter:'content',
			explain:'提示内容',
			type:'String',
			chioceVal:'-',
			defaultVal:'-'
		},
		{
			parameter:'has-close-btn',
			explain:'是否有关闭按钮',
			type:'Boolean',
			chioceVal:'true/false',
			defaultVal:'true'
		},
		{
			parameter:'type',
			explain:'提示类型',
			type:'String',
			chioceVal:'success/error/warning/info',
			defaultVal:'-'
		},
		{
			parameter:'position',
			explain:'提示框方位',
			type:'String',
			chioceVal:'left-top/right-top/left-bottom/right-bottom',
			defaultVal:'right-top'
		},
		{
			parameter:'hidden-time',
			explain:'自动隐藏时间,此值为0时不自动隐藏,单位ms',
			type:'number',
			chioceVal:'-',
			defaultVal:'1000'
		},
//		{
//			parameter:'',
//			explain:'',
//			type:'',
//			chioceVal:'',
//			defaultVal:''
//		},
	]
}