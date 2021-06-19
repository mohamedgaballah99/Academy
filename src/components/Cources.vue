<template>
     <div class="popular">
        <div class="contaner">
            <div class="popular-img">
                <img src="../assets/h1_img/Mask Group 2.png">
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="img">
                            <img src="../assets/online-course.png">
                        </div>
                        <div class="text">
                            <span class="comp"><span><img src="../assets/icons/tv.svg"></span>photoshop</span>
                            <span class="money">510Eg</span>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore</p>
                            <span class="user"><span><img src="../assets/icons/user.svg"></span>21</span>
                            <span class="date">10-11-2021<span><img src="../assets/icons/cleander.svg"></span></span>
                         </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="img">
                            <img src="../assets/online-course.png">
                        </div>
                        <div class="text">
                            <span class="comp"><span><img src="../assets/icons/tv.svg"></span>photoshop</span>
                            <span class="money">510Eg</span>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore</p>
                            <span class="user"><span><img src="../assets/icons/user.svg"></span>21</span>
                            <span class="date">10-11-2021<span><img src="../assets/icons/cleander.svg"></span></span>
                         </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="box" >
                        <div class="img">
                            <img src="../assets/online-course.png">
                        </div>
                        <div class="text">
                            <span class="comp"><span><img src="../assets/icons/tv.svg"></span>photoshop</span>
                            <span class="money">510Eg</span>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore</p>
                            <span class="user"><span><img src="../assets/icons/user.svg"></span>21</span>
                            <span class="date">10-11-2021<span><img src="../assets/icons/cleander.svg"></span></span>
                         </div>
                    </div>
                </div>
            </div>
            <button class="btn" >all courses</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'Cources'
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
    .popular{
    margin: 50px 0px;
    .contaner{
        width: 90%;
        margin: auto;
        .popular-img{
            width: 30%;
            margin-bottom: 50px;
            img{
                width: 100%;
            }
        }
        .box{
            border: 1px solid #ddd;
            border-radius: 30px;
            margin-bottom: 50px;
            .img{
                margin-bottom: 10px;
                img{
                    width: 100%;
                }
            }
            .text{
                position: relative;
                padding:10px;
                .comp{
                    background-color: #FBB0AD;
                    padding:10px;
                    border-radius: 10px;
                    color: #9D1953;
                    font-weight: bold;
                    span{
                        margin-right: 5px;
                    }
                }
                .money{
                    position: absolute;
                    right: 10px;
                    color: $dark-blue-color;
                    font-weight: bold;
                }
                p{
                    margin-top: 20px;
                    color: gray;
                }
                .user{
                    font-size: 18px;
                    img{
                        margin-right: 5px;
                        margin-top: -5px;
                    }
                    font-weight: bold;
                }
                .date{
                    position: absolute;
                    right: 10px;
                    img{
                        margin-left: 10px;
                        margin-top: -3px;
                    }
                }
            }
        }
        button{
            background-color: $btn-color;
             padding: 17px 79px;
            color: white;
            margin-top: 10px;
        }
    }
}
@media (max-width:900px){
    .popular .contaner .popular-img {
        width: 80%;
    }
}
</style>