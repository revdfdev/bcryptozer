import React, { Suspense, useEffect } from 'react'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi'
import './App.css'
import Card from './components/Cards'
import NavBar from './components/NavBar'
import Snackbar from './components/SnackBar'
import { useDialog, useGenerator, useHasher, useSnackBar } from './state/BlocContext'

const Hasher = React.lazy(() => import('./components/Hasher'));
const Generator = React.lazy(() => import('./components/Generator'));

function App() {

  const hasherPointers = [
    "Plain text password: Enter the plain text password you want to hash into the input field labeled Plain text password.",
    "Cost factor: Enter the cost factor you want to use into the input field labeled Cost factor. The more cost factor you use, the longer it takes to hash the password. The cost factor should be maximum 15.",
    "Hash: Click the Hash button to generate the bcrypt hash of the entered password. The resulting hash can then be stored securely, for example, in a database."
  ]

  const validatorPointers = [
    "Bcrypt text: Enter the bcrypt text you want to validate into the input field labeled Bcrypt text.",
    "Plain text password: Enter the plain text password you want to validate into the input field labeled Plain text password.",
    "Compare: Click the Compare button to check if the plain text password matches the bcrypt hash. If the plain text password corresponds to the hashed value, the validation is successful."
  ]

  const generatorBloc = useGenerator();

  const hashBloc = useHasher();

  const dialogBloc = useDialog();

  const snackBarBloc = useSnackBar();

  useEffect(() => {
    const hashSubscription = hashBloc._state.subscribe(state => {
      if (state.isLoading) {
        snackBarBloc.open("🌀 Loading...")
      }

      if (state.error && !state.isLoading) {
        dialogBloc.openDialog({
          title: "Error",
          identifier: "error",
          data: state.error
        }, state.error)
        snackBarBloc.close();
      }

      if (state.hash && !state.isLoading && !state.error) {
        dialogBloc.openDialog({
          title: "Hashed text",
          identifier: "hash",
          data: state.hash
        }, null)
        snackBarBloc.close();
      }
    })

    const generatorSubscription = generatorBloc._state.subscribe(state => {

      if (state.isLoading) {
        snackBarBloc.open("🌀 Loading...")
      }

      if (state.error && !state.isLoading) {
        dialogBloc.openDialog({
          title: "Error",
          identifier: "error",
          data: state.error
        }, state.error)
      }

      if (state.isValid && !state.isLoading && !state.error) {
        dialogBloc.openDialog({
          title: "Text validated",
          identifier: "generator",
          data: state.isValid
        }, null)
        snackBarBloc.close();
      }
    })

    return () => {
      hashSubscription.unsubscribe();
      generatorSubscription.unsubscribe();
    };
  }, [hashBloc, generatorBloc])

  return (
    <>
      <div className='w-full h-full flex background-pattern flex-col'>
        <NavBar />
        <main className='w-full h-screen mt-2 background-pattern flex flex-row justify-between'>
          <div className='w-1/2 h-full justify-center items-center'>
            <Card title="Hasher" pointers={hasherPointers} headline="Hash your password" icon={<HiLockClosed className='text-sambucus-500 w-8 h-8 mb-2' />}>
              <Suspense fallback={<>Loading....</>}>
                <Hasher />
              </Suspense>
            </Card>
          </div>
          <div className='w-1/2 h-full'>
            <Card title="Validator" pointers={validatorPointers} headline="Validate your password" icon={<HiLockOpen className='text-sambucus-500 w-8 h-8 mb-2' />}>
              <Suspense fallback={<>Loading...</>}>
                <Generator />
              </Suspense>
            </Card>
          </div>
        </main>
        <Snackbar />
      </div>
    </>
  )
}

export default App
