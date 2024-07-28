import { genSaltSync, hashSync } from "bcryptjs-react";
import { BehaviorSubject } from "rxjs";

class HasherBloc {
    constructor() {
        this._state = new BehaviorSubject({
            hash: "",
        })
    }

    get state() {
        return this._state.asObservable()
    }

    async hashText(plaintText, saltCount) {
        try {
            const salt = await genSaltSync(saltCount);
            const hash = await hashSync(plaintText, salt)
            this._state.next({
                hash: hash
            })
        } catch (error) {
            this._state.next({
                hash: "",
                error: error.message
            })
        }
    }

    dispose() {
        this._state.complete();
    }
}

export default HasherBloc