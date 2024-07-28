import { compareSync } from "bcryptjs-react";
import { BehaviorSubject } from 'rxjs';

class GeneratorBloc {

    constructor() {
        this._state = new BehaviorSubject({
            isValid: false,
            isLoading: false,
            error: null
        })
    }

    get state() {
        return this._state.asObservable()
    }

    async verifyBcryptText(bcryptText, plainText) {
        try {
            this._state.next({
                ...this._state.value,
                isLoading: true
            })
            const isVerified = await compareSync(plainText, bcryptText)
            this._state.next({
                ...this._state.value,
                isValid: isVerified,
                isLoading: false,
                error: null
            })

            if (!isVerified) throw new Error("Invalid password")
        } catch (error) {
            this._state.next({
                isValid: false,
                error: error.message,
                isLoading: false
            })
        }
    }

    dispose() {
        this._state.complete()
    }
}


export default GeneratorBloc;