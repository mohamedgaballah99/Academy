<template>
    <div class="contact">
        <div class="contaner">
            <div class="contact-h">
                <img src="../assets/h1_img/Mask Group 6.png">
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-6">
                    <div class="left" >
                        <form>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="enter your full name" required>
                                <span><img src="../assets/icons/user.svg"></span>
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="enter your phone" required>
                                <span><img src="../assets/icons/phone.svg"></span>
                            </div>
                            <div class="form-group">
                                <textarea placeholder="message text" required></textarea>
                                <span><img src="../assets/icons/message.svg"></span>
                            </div>
                            <input class="submit" type="submit" value="Send">
                        </form>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6">
                    <div class="right" >
                        <img src="../assets/contanct-img.png" alt="">
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
.contact{
    margin: 100px 0px 0px 0px;
    .contaner{
        width: 90%;
        margin: auto;
        .contact-h{
            width: 30%;
            margin-bottom: 50px;
            img{
                width: 100%;
            }
        }
        .left{
            margin-bottom: 50px;
            form{
                .form-group{
                    position: relative;
                    width: 100%;
                    .form-control{
                        padding-left: 40px;
                    }
                    span{
                        position: absolute;
                        top: 8px;
                        left: 10px;
                    }

                    textarea{
                        width: 100%;
                        padding-top: 8px;
                        padding-left: 40px;
                        height: 145px;
                        border-radius: 10px;
                        resize: none;
                        border: 1px solid #ced4da;
                        outline: none;
                        
                    }
                    textarea:focus{
                        box-shadow: 0px 0px 5px $btn-color;
                    }
                    
                }
                .submit{
                    background-color: #0178C6;
                    padding: 17px 100px;
                    color: white;
                    margin-top: 20px;
                    border: none;
                    cursor: pointer;
                    border-radius: 10px;
                }
            }
        }
        .right{
            height: 100%;
            img{
                float: right;
                height: 100%;
                margin-top: -173px;
                transform: scale(.9);
            }
        }
    }
}
/*start of contact media*/

@media (max-width:767px){
    .contact{
        .contaner{
            .contact-h{
                width: 80%;
            }
            .right{
               img{
                margin-top: -70px;
               }
            }
        }
    }
}
</style>