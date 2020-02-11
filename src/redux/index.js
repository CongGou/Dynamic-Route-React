
const Addnum = '加N只鸡'
const Rmnum = '加N只鸡'

export function reducer(state=0,action) {
    switch ( action.type ) {
        case Addnum:
            return state + 12;
        case Rmnum:
            return state - 1;
        default:
            return 0
    }
}
export function addnum() {
    return {
        type: Addnum
    }
}
export function rmnum() {
    return {
        type: Rmnum
    }
}
/*
state：最初的状态 
action：需要来进行改造的内容
    action.type 决定处理类型
        进行判断：
          if、switch
        加只鸡 1 2 3
        减只鸡 1 2 3
*/

/*
    store.dispatch({
        type: ’加只鸡‘
    })
*/