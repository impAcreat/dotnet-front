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
    <router-link to="/GetUser"><div class="NavItems">Search</div></router-link>
    <router-link to="/AddUser"><div class="NavItems">Learn&nbsp;More</div></router-link>
      </div>
    <!--页面主体-->
    <div class="main">
        <div class="Head">
	<div class="HeadPrompt">Adduser</div>
</div>
<div style="height: 50px;px;width:100% "></div>
<div class="InputBox">
    <br>
	<div class="InputBoxTitle">AddUser</div>
    <br>
    <div class="InnerBox">
    <div class="InnerBox2">
    <div class="HintBox">
	<div>Username:</div>
	</div>
	<input class="inputText" type="text" id="UserName">
    <br>
	<div class="HintBox">
	<div>StudentId:</div>
	</div>
	<input class="inputText" type="text" id="StudentID">
    <br>
	<div class="HintBox">
	<div>Mobile:</div>
	</div>
	<input class="inputText" type="text" id="Mobile" >
    <br>
    </div>
    <div class="InnerBox2">
        
	<div class="HintBox">
	<div>Password:</div>
	</div>
	<input class="inputText" type="password" id="Password">
    <br>
	<div class="HintBox">
	<div>Region:</div>
	</div>
	<input class="inputText" type="text"  id="Region">
    <br>
	<div class="HintBox">
	<div>E-mail:</div>
	</div>
	<input class="inputText" type="text" id="Email">
    <br>
    </div>

    </div>

    <input type="button"   class="button_Class" onclick="Submit()" value="ADD">





    </div>
    

    </div>
</template>

<script setup>
</script>

<style lang="less">
@import "@/assets/word-like.less";
@import "@/assets/paper.less";
@import "@/assets/CSS/Nav.css";
@import "@/assets/CSS/Adduser.css";

</style>