<template>
    <header>
        <nav>
            <span class="menu" style="padding-top:10px;"> <a href="#"><i class="fas fa-bars"></i></a> </span>
            <div class="container">
                <div class="logo">
                    <img src="../assets/logo.png">
                </div>
                <ul class="list">
                    <router-link to="/" tag="li"> Home</router-link>
                    <router-link to="/services" tag="li">Services  </router-link>
                    <router-link to="/about" tag="li"> About  </router-link>
                    <router-link to="/courses" tag="li">Courses  </router-link>
                   <router-link to="/certificate" tag="li"> Certificate </router-link>
                    <router-link to="/contact" tag="li"> Contact us </router-link>
                </ul>
                <ul class="social">
                    <li> <a href="#"> <img src="../assets/icons/facebook.svg"></a> </li>
                    <li><a href="#">  <img src="../assets/icons/twitter.svg"> </a></li>
                    <li><a href="#">  <img src="../assets/icons/linkedin.svg"> </a></li>
                </ul>
            </div>
        </nav>
        <div class="landing">
            <div class="path">
                <img src="../assets/header_img/left1.png">
            </div>
            <div class="path">
                <img src="../assets/header_img/left2.png">
            </div>
            <div class="path">
                <img src="../assets/header_img/right1.png">
            </div>
            <div class="path">
                <img src="../assets/header_img/right2.png">
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="left"  data-aos="zoom-in">
                            <h1>Zag Academy</h1>
                            <h1>make learning easy</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.  </p>
                                <button class="btn">Get Started</button>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="right" data-aos="zoom-in">
                            <img src="../assets/header_img/sapiens.png">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name:"Navbar",
}
</script>
<style lang="scss">
$dark-blue-color : #062C5F;
$btn-color : #0178C6;
$font-sizes: (
    "mini-small": 14px,
    "small": 16px,
    "medium": 18px,
    "semi-big": 22px,
    "big": 28px
);
    header{
    background-color: $dark-blue-color;
    border-bottom-left-radius:30px ;
    border-bottom-right-radius:30px ;
    overflow: hidden;
    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Skita Banner', Georgia, serif;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    nav{
        
        background-color: #062c5f30;
        
        position: relative;
        z-index: 11111111111111;
        border-bottom: 3px solid #0178C6;
        .menu{
            display: none;
            float: right;
            top: 13;
            right: 5%;
            position: absolute;
            font-weight: bold;
            a{
                font-size: 35px;
                color: white;
                text-decoration: none;
            }
        }
        .container{
            display: flex;
            width: 90%;
            margin: auto;
            padding: 0px;
            justify-content: space-between;
            .logo{
                width: 7%;
                padding: 10px 0px;
                img{
                    width: 100%;
                    cursor: pointer;
                }
            }
            ul{
                display: flex;
                justify-content: space-between;
                margin: 0px;
                
                li{
                    width: fit-content;
                    padding-top: 5%;
                    position: relative;
                    cursor: pointer;
                    a{
                        text-decoration: none;
                        color: white;
                        font-size: 18px;
                        font-weight: 400;
                    }
                }
            
                li:hover:before{
                    position: absolute;
                    content: "";
                    top: 86px;
                    background-color: #96E3F9;
                    width: 100%;
                    height: 3px;
                    
                }
            }
            ul.list{
                width: 50%;
                font-size: 18px;
                font-weight: bold;
            }
            ul.social{
                width: fit-content;
                li{
                    padding-top: 20%;
                    a{
                        padding: 0px 7px;
                        font-size: 25px;
                        
                    }
                }
            }
        }
    }
    @media screen and (max-width:992px) {
        nav{
            .menu{
                display: block;
            }
            .container{
                display: block;
                .logo{
                    width: 13%;
                }
                ul{
                    display: none;
                }
                ul.list{
                    width: 100%;
                    margin: 15px 0px;
                    li{
                        margin: 0px 0px;
                        display: block;
                        padding: 1%;
                        a{
                            padding: 0px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width:100px) and (max-width:772px) {
        nav{
            .container{
                .logo{
                    width: 16%;
                }
            }
            li:hover:before{
                position: absolute;
                content: "";
                top: 28px !important;
                background-color: #96E3F9;
                width: 100%;
                height: 3px;
                
            }
            ul.social{
                width: fit-content;
                li{
                    padding-top: 20%;
                    a{
                        padding: 0px 7px;
                        font-size: 25px;
                    }
                }
                li:hover:before{
                    position: absolute;
                    content: "";
                    top: 63px !important;
                    background-color: #96E3F9;
                    width: 100%;
                    height: 3px;
                    
                }
            }
        }
    }
    .landing{
        width: 100%;
        position: relative;
        padding:30px 0px;
        .path{
            width: 500px;
            height: 500px;
            position: absolute;
            top: 0;
            left: 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .path:nth-of-type(1){
            left: -110px;
        }
        .path:nth-of-type(2){
            top: -110px;
            left: -99px;
        }
        .path:nth-of-type(3){
            top: -150px;
            left: 700px;
            
        }
        .path:nth-of-type(4){
            top: -150px;
            left: 800px;
        }
        }
        .container{
            width: 90%;
            margin: auto;
            padding-top: 35px;
            color: white;
            .left{
                margin: 50px 0px;
                button{
                    background-color: $btn-color;
                    padding: 17px 79px;
                    color: white;
                    margin-top: 20px;
                }
            }
            .right{
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 100%;
                    height: auto;
                }
            }
        }
    }

@media(max-width:767px){
    header{
        .landing{
            .contaner{
                padding-top: 0;
            }
        }
    }
}
</style>