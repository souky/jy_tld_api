/**
 * @description 主页数据
 */

export default {
	Attributes:[
		{
			parameter:'id',
			explain:'原有属性',
			type:'String',
			chioceVal:'-',
			defaultVal:'-'
		},
		{
			parameter:'class',
			explain:'原有属性',
			type:'String',
			chioceVal:'-',
			defaultVal:'-'
		},
		{
			parameter:'name',
			explain:'原有属性',
			type:'String',
			chioceVal:'-',
			defaultVal:'-'
		},
		{
			parameter:'page-options',
			explain:'分页所需要的数据',
			type:'Object',
			chioceVal:'-',
			defaultVal:'-'
		},
		{
			parameter:'next-page',
			explain:'下一页方法',
			type:'function',
			chioceVal:'-',
			defaultVal:'-'
		},
		{
			parameter:'prev-page',
			explain:'上一页方法',
			type:'function',
			chioceVal:'-',
			defaultVal:'-'
		},
		{
			parameter:'jump-page',
			explain:'跳转页面方法',
			type:'function',
			chioceVal:'',
			defaultVal:''
		},
		{
			parameter:'show-total',
			explain:'是否显示总条数',
			type:'Boolean',
			chioceVal:'true/false',
			defaultVal:'false'
		},
		{
			parameter:'show-pages',
			explain:'是否显示总页数',
			type:'Boolean',
			chioceVal:'true/false',
			defaultVal:'false'
		},
		{
			parameter:'size-options',
			explain:'每页数据条数',
			type:'Array',
			chioceVal:'-',
			defaultVal:'[10,20,30]'
		},
		{
			parameter:'page-count',
			explain:'最大显示页码个数',
			type:'number',
			chioceVal:'-',
			defaultVal:'5'
		},
//		{
//			parameter:'',
//			explain:'',
//			type:'',
//			chioceVal:'',
//			defaultVal:''
//		},
	],
	
	OptionAttributes:[
		{
			parameter:'page-num',
			explain:'当前页',
			type:'number',
			chioceVal:'-',
			defaultVal:'1'
		},
		{
			parameter:'page-size',
			explain:'每页条数',
			type:'number',
			chioceVal:'-',
			defaultVal:'10'
		},
		{
			parameter:'total-size',
			explain:'总条数',
			type:'number',
			chioceVal:'-',
			defaultVal:'0'
		},
	]
}