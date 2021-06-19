<template>
     <footer >
        <div class="contaner">
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-3">
                    <div class="box">
                        <img src="../assets/logo.png">
                        <h1>Zag Academic</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-3">
                    <div class="box">
                        <h3>Quick Links</h3>
                        <a href="#">Home</a>
                        <a href="#">Courses</a>
                        <a href="#">Policy</a>
                        <a href="#">About</a>
                        <a href="#">User Privacy</a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-3">
                    <div class="box">
                        <h3>Courses</h3>
                        <a href="#">Photoshop</a>
                        <a href="#">Icdl</a>
                        <a href="#">English</a>
                        <a href="#">Web Design</a>
                        <a href="#">French</a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-3">
                    <div class="box">
                        <h3>Contact Us</h3>
                        <li><span><img src="../assets/icons/message2.svg"></span>info@zag.com</li>
                        <li><span><img src="../assets/icons/telephone.svg"></span>+966315123123</li>
                        <li><span><img src="../assets/icons/phone (2).svg"></span>+966341961061</li>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="rights">
            <p>Copy Right To Zag</p>
        </div>
    </footer>
</template>
<script>
export default {
    name:'footer'
}
</script>
<style lang="scss" scoped>
$dark-blue-color : #062C5F;
$btn-color : #0178C6;
$font-sizes: (
    "mini-small": 14px,
    "small": 16px,
    "medium": 18px,
    "semi-big": 22px,
    "big": 28px
);
    footer{
    position: relative;
    background-color: $dark-blue-color;
    padding: 80px 0px;
    color: white;
    .contaner{
        width: 90%;
        margin: auto;
        .box{
            margin-bottom: 50px;
            margin-left: 30px;
            a{
                display: block;
                color: white;
                text-decoration: none;
                margin-bottom: 8px;
                transition: .3s;

            }
            a:hover{
                margin-left: 5px;
            }
            li{
                cursor: pointer;
                margin-bottom: 8px;
                list-style: none;
                span{
                    img{
                        margin-right: 10px;
                    }
                }
            }
        }
        
    }
    .rights{
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: $btn-color;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        padding: 15px 0px;
        p{
            margin: 0;
        }
        
    }
}
</style>