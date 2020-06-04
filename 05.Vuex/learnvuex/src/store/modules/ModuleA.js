export default {
    state:{
        name:'爱丽丝'
    },
    mutations:{
        updateName(state,data){
            this.state.num=1
            state.name=data.name
        }
    },
    actions:{
        //1.写法1
        updateNames(context,data){
            setTimeout(()=>{
                alert(context.rootState.num)
                context.commit('updateName',data)
            },1000)
        }
        //2.写法2
        /*updateNames({state,commit,rootState}){
          setTimeout(()=>{
            alert(rootState.num)
            context.commit('updateName',data)
          },1000)
        }*/
    },
    getters:{
        fullName(state){
            return state.name ;
        },
        fullName2(state,getters,rootState){
            return getters.fullName+rootState.num ;
        },
        fullName3(state,getters,rootState){
            return getters.fullName2+rootState.num ;
        }
    }
}