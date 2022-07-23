import AllBillsDropDown from "./Components/AllBillsDropDown";

export default function Senate() {
  return (
    <>
      <AllBillsDropDown
        congress={"house"}
        status={"passed"}
        title={"Passed Bills"}
        body={<h1>Bills that have been passed</h1>}
      />
      <AllBillsDropDown
        congress={"house"}
        status={"vetoed"}
        title={"Rejected Bills"}
        body={<h1>Bills that have been rejected</h1>}
      />
    </>
  );
}
