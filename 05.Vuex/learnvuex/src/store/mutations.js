import {INCREMENT} from "./mutations-type";

export default {
    [INCREMENT](state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    addCount(state, num) {
        state.counter += num
    },
    subaddCount(state, num) {
        state.counter -= num
    },
    //响应式数据
    addStudent(state, stu) {
        state.students.push(stu)
    },
    updateStu(state, data) {
        state.student.name = data
    }
}