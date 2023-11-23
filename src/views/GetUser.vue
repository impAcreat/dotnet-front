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
	<div class="HeadPrompt">GetUser</div>
</div>
<div style="height: 50px;px;width:100% "></div>

<div class="SearchBox">
        <select name="ways" id="lang">
            <option value="select" class="options">Selections</option>
            <option value="Name" class="options">Name</option>
            <option value="ID" class="options">ID</option>
            <option value="Code" class="options">Code</option>
            <option value="E-mail" class="options">E-mail</option>
            <option value="Mobile" class="options">Mobile</option>
          </select>
    <input class="inputText"  id="Search_Input" style="margin-left: 100px;">
    <input type="button" class="button_Class" value="search" onclick="Search()">
    </div>
</div>
<div id="overlay">
    <div class="popup">
      <p class="popup_title">Search&nbsp;Result</p>
      <div class="InnerBox">
		<div class="InnerBox2">
		<div class="HintBox">
		<div>Username:</div>
		</div>
		<div class="HintBox2"><div id="username"></div></div>
		<br>
		<div class="HintBox">
		<div>Region:</div>
		</div>
		<div class="HintBox2"><div id="region"></div></div>
		<br>
		<div class="HintBox">
		<div>Mobile:</div>
		</div>
		<div class="HintBox2"><div id="mobile"> </div></div>
		<br>
		</div>
		<div class="InnerBox2">
		<div class="HintBox">
		<div>Password:</div>
		</div>
		<div class="HintBox2" ><div id="password"></div></div>
		<br>
		<div class="HintBox">
		<div>Code:</div>
		</div>
		<div class="HintBox2" ><div id="studentid"> </div></div>
		<br>
		<div class="HintBox">
		<div>E-mail:</div>
		</div>
		<div class="HintBox2" ><div id="email"> </div></div>
		<br>
		</div>
		</div>
      <div class="popup_btn">
        <button style="background-color: rgba(233, 153, 153, 0.747);" onclick="Delete()">删除用户</button>
        <button style="background-color: rgba(150, 203, 203, 0.877)" onclick="hidePopup()">返回</button>
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
@import "@/assets/CSS/Getuser.css";

</style>