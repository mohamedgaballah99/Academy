<template>
    <div class="students">
        <div class="contaner">
            <div class="student-h">
                <img src="../assets/h1_img/Mask Group 3.png">
            </div>
            <div class="row">
                <div class="col-xs-11 col-md-6">
                    <div class="left" >
                        <img src="../assets/img group.png" alt="">
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 mx-auto">
                    <div class="right">
                        <h1>best place to learn</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing  elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna
                           .Lorem ipsum dolor sit  amet, consetetur sadipscing elitr,
                           sed diam nonumy eirmod tempor invidunut 
                           labore et dolore magna.</p>

                        <h1>good community</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing  elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna
                           .Lorem ipsum dolor sit  amet, consetetur sadipscing elitr,
                           sed diam nonumy eirmod tempor invidunut 
                           labore et dolore magna.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Whatsay',
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
.students{
    margin: 100px 0px;
    .contaner{
        width: 90%;
        margin: auto;
        .row {
            justify-content: flex-start;
            align-items: center;
        }
        .student-h{
            width: 40%;
            margin-bottom: 80px;
            img{
                width: 100%;
            }
        }
        .left{
            position: relative;
            img{
                width: 100%;
            }
        }
        .right{
            margin-left: 50px;
            margin-top: 50px;
            h1{
                color: $dark-blue-color;
            }
            p{
                width: 80%;
            }

        }
    }
}
/*start of students media*/

@media (max-width:900px){
    .students{
        .contaner{
            .student-h{
                width: 100%;
                margin-bottom: 50px;
            }
            .left{
                width: 80%;
                margin: auto;
                
                img{
                    width: 70%;
                    display: block;
                    margin: auto;
                }
            }
            .right{
                margin-left: 0;
                p{
                    width: 100%;
                }
            }
        }
    }
    
}
</style>