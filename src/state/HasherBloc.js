import { genSaltSync, hashSync } from "bcryptjs-react";
import { BehaviorSubject } from "rxjs";

class HasherBloc {
    constructor() {
        this._state = new BehaviorSubject({
            hash: "",
            isLoading: false,
            error: null
        })
    }

    get state() {
        return this._state.asObservable()
    }

    async hashText(plaintText, saltCount) {
        try {
            this._state.next({
                ...this._state.value,
                isLoading: true
            })
            const salt = await genSaltSync(saltCount);
            const hash = await hashSync(plaintText, salt)
            this._state.next({
                ...this._state.value,
                hash: hash,
                isLoading: false
            })
        } catch (error) {
            this._state.next({
                hash: "",
                error: error.message,
                isLoading: false
            })
        }
    }

    dispose() {
        this._state.complete();
    }
}

export default HasherBloc