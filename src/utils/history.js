const History = {
    count: 0,
    _history: [], // 历史记录堆栈
    install(Vue) {
        this._current = 0;
        // vue插件要求的安装方法
        Object.defineProperty(Vue.prototype, "$routerHistory", {
            get() {
                return History;
            }
        });
    },
    push(path) {
        // 入栈
        this._current += 1;
        this._history.push(path);

        console.log('this._history',this._history)
    },
    pop() {
        // 出栈
        this._current -= 1;
        this._history.pop();

        return this._history[this._history.length-1]
    },
    canBack() {
        return this._history.length > 1;
    }
};
export default History;