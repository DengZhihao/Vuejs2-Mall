/**
 * Created by DengZhihao on 2017/4/28.
 */
module.exports = {
    user:{
        mobilephone:{type:Number,required:true},
        password:{type:String,required:true},
        name:{type:String,required:true},
        sex:{type:String,required:true},
        address0:{type:String,required:false},
        address1:{type:String,required:false},
        address2:{type:String,required:false},
        address3:{type:String,required:false},
        address4:{type:String,required:false},
        address5:{type:String,required:false},
        address6:{type:String,required:false},
        address7:{type:String,required:false},
        address8:{type:String,required:false},
        address9:{type:String,required:false}
    },
    commodity:{
        cId:{type:Number,required:true},
        name:{type:String,required:true},
        price:{type:String,required:true},
        picture:{type:String,required:true}
    }
};