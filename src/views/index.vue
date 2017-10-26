<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #2e296a;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 800px;
        margin: 15px;
        overflow: hidden;
        background: #3d3780;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #ffffff;
    }
    .layout-menu-left{
        background: #3d3780;
    }
    .layout-header{
        color: #ffffff;
        height: 60px;
        background: #3d3780;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 50px;
        border-radius: 3px;
        margin: 15px auto;
        background-image: linear-gradient(90deg,#00d9bf,#00d977);
        box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
        text-shadow: 0 1px 3px rgba(0,0,0,.3);
        border: none;
        line-height: 50px;
        text-align: center;
        color: white;
        font-weight: 600;
        font-size: 18px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
        <!--<div class="layout-ceiling">-->
            <!--<div class="layout-ceiling-main">-->
                <!--<a href="#">注册登录</a> |-->
                <!--<a href="#">帮助中心</a> |-->
                <!--<a href="#">安全中心</a> |-->
                <!--<a href="#">服务大厅</a>-->
            <!--</div>-->
        <!--</div>-->
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left" order="1">
            <Menu active-name="1" theme="dark" width="auto">
                <MenuItem name="1">
                    <Icon type="ios-navigate" :size="iconSize"></Icon>
                    <span class="layout-text">选项 1</span>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad" :size="iconSize"></Icon>
                    <span class="layout-text">选项 2</span>
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics" :size="iconSize"></Icon>
                    <span class="layout-text">选项 3</span>
                </MenuItem>
            </Menu>
            </Col>
            <Col :span="spanRight" order="2">
            <div class="layout-header">
                    <div style="float:left;margin-top:15px;margin-left: 30px;cursor: pointer" type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </div>
                    <div style="float: left;width: 200px;margin-left: 40px" class="layout-logo-left">
                        <Icon type="ios-pulse-strong" size="32"></Icon>   HKR监控
                    </div>
            </div>
            <!--<div class="layout-breadcrumb">-->
                <!--<Breadcrumb>-->
                    <!--<BreadcrumbItem href="#">首页</BreadcrumbItem>-->
                    <!--<BreadcrumbItem href="#">应用中心</BreadcrumbItem>-->
                    <!--<BreadcrumbItem>某应用</BreadcrumbItem>-->
                <!--</Breadcrumb>-->
            <!--</div>-->
            <div style="margin-top: 20px" class="layout-content">
                <div class="layout-content-main">内容区域</div>
            </div>
            <div class="layout-copy">
                2017-2022 &copy; 东软睿驰分时租赁
            </div>
            </Col>
        </Row>
        <BackTop :height="100" :bottom="200">
            <div class="top">返回顶端</div>
        </BackTop>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 3,
                spanRight: 21
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 3 ? 18 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 3) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                } else {
                    this.spanLeft = 3;
                    this.spanRight = 21;
                }
            }
        }
    }
</script>
