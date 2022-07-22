import DropDown from "./Components/DropDown"

export default function Senate() {
  return (
    <>
      <DropDown title={'Passed Bills'} body={<h1>Senate Bills that have been passed</h1>}/>
      <DropDown title={'Rejected Bills'} body={<h1>Senate Bills that have been rejected</h1>}/>
    </>
  )
}
