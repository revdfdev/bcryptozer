import { compareSync } from "bcryptjs-react";
import { BehaviorSubject } from 'rxjs';

class GeneratorBloc {

    constructor() {
        this._state = new BehaviorSubject({
            isValid: false,
            error: null
        })
    }

    get state() {
        return this._state.asObservable()
    }

    async verifyBcryptText(bcryptText, plainText) {
        try {
            console.log("verifyBcryptText ", bcryptText, plainText)
            const isVerified = await compareSync(plainText, bcryptText)
            console.log("isVerified ", isVerified)
            this._state.next({
                isValid: isVerified,
                error: null
            })
        } catch (error) {
            this._state.next({
                isValid: false,
                error: error.message,
            })
        }
    }

    dispose() {
        this._state.complete()
    }
}


export default GeneratorBloc;