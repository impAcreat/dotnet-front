<template>
    <!--导航栏部分-->
<div class="sidenav">
    <div style="height:50px"></div>
    <div class="AvatarBox">
        <img src="../assets/resource/avatar.png">
        </div>
        <div class="NameBox">
        <div>Administrator</div>
        </div>
    <div style="height:50px"></div>
    <router-link to="/AddUser"><div class="NavItems">Adduser</div></router-link>
    <router-link to="/Management"><div class="NavItems">Management</div></router-link>
    <router-link to="/GetUser"><div class="NavItems">GetUser</div></router-link>
    <router-link to="/AddUser"><div class="NavItems">Learn&nbsp;More</div></router-link>
      </div>
    <!--页面主体-->
    <div class="main">
        <div class="Head">
	<div class="HeadPrompt">Management</div>
</div>
<div style="height: 50px;px;width:100% "></div>
<div class="SearchBox">
    <div class="SearchBar">
        <input placeholder="搜索用户">
    </div>
<div class="SearchButton"><img src="../assets/resource/search.png"></div>
</div>
<br>
<div class="ListBox">
<div class="LR_List" style="margin-left: 10%;">
<div class="ListItems">
<div class="ListItems_Dot">·</div>
<div class="ListItems_conf"><img src="../assets/resource/user.png"></div>
<div class="ListItems_SimpleMessage">
<div class="ListItems_SimpleMassage_Message" style="margin-top: 15%;" >UserName:&nbsp;Jason&nbsp;J</div>
<div class="ListItems_SimpleMassage_Message" style="margin-top: 2%;">E-mail:&nbsp;849546461@qq.com</div>
</div>
<div class="ListItems_ButtonBox" style="margin-left: 2%;"><div class="ListItems_ButtonBox_Button"></div></div>
<div class="ListItems_ButtonBox"><div class="ListItems_ButtonBox_Button"></div></div>


</div>
<div class="ListItems"></div>
<div class="ListItems"></div>
</div>
<div class="LR_List" style="margin-left: 3%;">
<div class="ListItems"></div>
<div class="ListItems"></div>
<div class="ListItems"></div>
</div>





</div>

    </div>
</template>

<script setup>
</script>

<style lang="less">
@import "@/assets/word-like.less";
@import "@/assets/paper.less";
@import "@/assets/CSS/Nav.css";
@import "@/assets/CSS/Management.css";

</style>