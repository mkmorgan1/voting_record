import AllBillsDropDown from "./AllBillsDropDown";

export default function Congress({ congress }) {
  return (
    <>
      <div id="accordion">
        <AllBillsDropDown
          congress={congress}
          status={"passed"}
          title={"Passed Bills"}
          body={<h1>Bills that have been passed</h1>}
        />
        <AllBillsDropDown
          congress={congress}
          status={"vetoed"}
          title={"Rejected Bills"}
          body={<h1>Bills that have been rejected</h1>}
        />
      </div>
    </>
  );
}
