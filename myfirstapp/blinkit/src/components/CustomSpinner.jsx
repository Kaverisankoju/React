import {DNA } from 'react-loader-spinner'

export function CustomSpinner() {
  return (
    <DNA
visible={true}
height="80"
width="80"
ariaLabel="dna-loading"
wrapperStyle={{}}
wrapperClass="dna-wrapper"
/>
  )
}