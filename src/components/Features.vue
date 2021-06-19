<template>
         <div class="academy">
        <div class="contaner">
            <div class="acadimy-img">
                <img src="../assets/h1_img/Mask Group 1.png">
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="box" >
                        <div class="img">
                            <img src="../assets/featurse/computer-3d-icon-small.png">
                        </div>
                        <div class="text">
                            <h3>best courses</h3>
                            <p>we provide best trainers to make best students able to 
                                working in best companies in futuer</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="img">
                            <img src="../assets/featurse/certificate.png">
                        </div>
                        <div class="text">
                            <h3>best courses</h3>
                            <p>we provide best trainers to make best students able to 
                                working in best companies in futuer</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="img">
                            <img src="../assets/featurse/discount-3d-icon-small.png">
                        </div>
                        <div class="text">
                            <h3>best courses</h3>
                            <p>we provide best trainers to make best students able to 
                                working in best companies in futuer</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Features'
}
</script>
<style lang="scss" scoped>
    .academy{
    margin: 100px 0px;
    .contaner{
        width: 90%;
        margin: auto;
        .acadimy-img{
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
                margin-right: 5px;
                width: 109px;
                height: 109px;
            }
            .text{
                h3{
                    color: #003172;
                    margin-top: 5px;
                }
                p{
                    font-size: 12px;
                }
            }
        }
        
    }
}

@media (max-width:767px) {
    .academy{
        .contaner{
            .acadimy-img{
                width: 100%;
            }
        }
    }
}
</style>