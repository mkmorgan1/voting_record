import AllBillsDropDown from "./AllBillsDropDown";

export default function Congress({ congress }) {
  return (
    <>
      <div id="accordion">
        <AllBillsDropDown
          congress={congress}
          status={"passed"}
          title={"Passed Bills"}
          titleId={`${congress}-passed`}
        />
        <AllBillsDropDown
          congress={congress}
          status={"vetoed"}
          title={"Vetoed Bills"}
          titleId={`${congress}-vetoed`}
        />
      </div>
    </>
  );
}
