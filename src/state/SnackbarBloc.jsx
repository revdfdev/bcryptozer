import { BehaviorSubject } from "rxjs";

class SnackBarBloc {

    constructor() {
        this._state = new BehaviorSubject({
            isOpen: false,
            message: "",
        })
    }

    get state() {
        return this._state.asObservable()
    }

    open(message) {
        this._state.next({
            isOpen: true,
            message: message
        })
    }

    close() {
        this._state.next({
            isOpen: false,
            message: ""
        })
    }

    dispose() {
        this._state.complete()
    }
}

export default SnackBarBloc