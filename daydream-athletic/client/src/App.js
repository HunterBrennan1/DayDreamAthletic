@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&family=Poppins:wght@100;200;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600&display=swap');


*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top:75px ;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  line-height: normal;
}

body {
  font-family:'Poppins', sans-serif;
  overflow: hidden;
}

a {
  text-decoration: none;
  color:#fefefe;
  cursor: pointer;
}

.top-banner{
  display: flex;
  flex-direction: row;
  background-color:#121212;
  color:#fff;
  text-decoration: none;
  justify-content: center;
  height:40px;
  width:100%;
  align-items: center;
  vertical-align: middle;
  margin-right: auto;
  margin-left: auto;
  gap:20px;
}

.discount-title {
  font-size: 15px;
}

.discount-top-banner {
  font-size: 12px;
}

.NavBar {
  display:flex;
  justify-content: space-between;
  flex-direction: row;
}

.logo {
  padding:10px;
  border-radius: 7px;
  font-weight: 400;
}

.nav-filter-link {
  display: flex;
  z-index: 2;
  flex-direction: row;
  vertical-align: center;
  gap:30px;
  margin-right:310px;
  font-size: 15px;
  height:30px;
  padding-top: 15px;
}

.gender-bold {
  color:#121212;
  font-weight: 600;
}

.form-social-container {
  display: flex;
  justify-content: space-between;
  width:100%;
}

.search-form {
  padding:5px;
  width:300px;
  border-radius: 30px;
  padding-left: 15px;
  background-color: #ebebeb;
  color:#121212;
}

.search-form-container {
  display: flex;
  justify-content:center;
  object-position: center;
  height:40px;
  margin-top:5px;
}

.search-icon {
  position: absolute;
  height:28px;
  right:205px;
  top:25px;
}

.nav-login-out {
  display:flex;
  flex-direction: row;
  padding:15px;
  gap:10px;
}

.nav-btn-icons {
  background-color:transparent;

}

.search-btn {
  color:#fefefe !important;
  border-color: #121212;
  background-color: #121212;
  font-weight: 600;
  border-radius: 7px;
}

.search-btn:hover{
  background-color: #ebebeb !important;
  border-color: #121212;
  color:#121212 !important; 
  transition: 0.3s;
}

.banner-container {
  height:auto;
  width:80%;

}

.banner-img {
  height:700px;
  width:100%;
}

.carousel-container {
  height:800px;
}

.carousel-item {
  height:700px;
  width: 100%;
  background-color: black;
}

.carousel-img {
  height: 700px;
  opacity: 0.9;
}

@media screen and (max-width:748px){
  .carousel-img {
    height:auto;
  }

  .carousel-item {
    height:auto;
  }
}
