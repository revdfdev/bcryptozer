import { BehaviorSubject } from "rxjs";

class DialogBloc {

    constructor() {
        this._state = new BehaviorSubject({
            isOpen: false,
            dialogData: null,
            error: null
        })
    }

    get state() {
        return this._state.asObservable()
    }

    openDialog(dialogData, error) {
        this._state.next({
            isOpen: true,
            dialogData: dialogData,
            error: error
        })
    }

    closeDialog() {
        this._state.next({
            isOpen: false,
            dialogData: null,
            error: null,
        })
    }

    dispose() {
        this._state.complete()
    }
}

export default DialogBloc