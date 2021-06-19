<template>
    <div class="statics">
        <div class="contaner">
            <div class="statics-h" >
                <img src="../assets/h1_img/Mask Group 5.png">
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="img">
                            <img src="../assets/staticecs/world.png">
                        </div>
                        <div class="text">
                            <h2>visitation</h2>
                            <p>we have in zag academy about <span>5000</span> visit</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="img">
                            <img src="../assets/staticecs/group.png">
                        </div>
                        <div class="text">
                            <h2>visitation</h2>
                            <p>we have in zag academy about <span>5000</span> visit</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="img">
                            <img src="../assets/staticecs/paper.png">
                        </div>
                        <div class="text">
                            <h2>visitation</h2>
                            <p>we have in zag academy about <span>5000</span> visit</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
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
   .statics{
    margin: 100px 0px;
    .contaner{
        width: 90%;
        margin: auto;
        .statics-h{
            width: 30%;
            margin-bottom: 50px;
            img{
                width: 100%;
            }
        }
        .box{
            display: flex;
            border: 1px solid #ddd;
            border-radius: 50px;
            margin-top: 30px;
            padding:2px;
            
            .img{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 0px;
                width: 109px;
                height: 109px;
                
            }
            .text{
                h2{
                    color: $dark-blue-color;
                    margin-top: 10px;
                }
                p{
                    font-size: 13px;
                    span{
                        color: $dark-blue-color;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
/*start of statics media*/
@media (max-width:767px){
    .statics{
        .contaner{
            .statics-h{
                width: 80%;
            }
        }
    }
}
</style>