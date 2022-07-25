export default function TitleValueTag({ title, value }) {
  return (
    <>
      <h6>
        <b>{title}: </b>
        {value}
      </h6>
    </>
  );
}