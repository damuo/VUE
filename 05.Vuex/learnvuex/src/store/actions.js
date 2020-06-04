export default {
    //不带参
    /*updateStudent(context){
      setTimeout(()=>{
        context.commit('updateStu')
      },1000)
    }*/
    //带参
    updateStudent(context,data){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('updateStu',data.name);
                resolve(data)
            },1000)
        })
    }
}