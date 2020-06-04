export default {
    powerCounter(state){
        return state.counter*state.counter
    },
    getStudent(state){
        return state.students
    },
    //可在参数中传入getter
    getGreateAgeCount(state,getter){
        return getter.getStudent.filter(s => s.age>=20).length
    },
    moreAgeStu(state){
        return function (age) {
            return state.students.filter(s=>s.age>age).length
        }
    }
}