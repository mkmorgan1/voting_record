import DropDown from "./Components/DropDown"

export default function House() {
  return (
    <>
      <DropDown title={'Passed Bills'} body={<h1>Bills that have been passed</h1>}/>
      <DropDown title={'Rejected Bills'} body={<h1>Bills that have been rejected</h1>}/>
    </>
  )
}
