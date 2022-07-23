export default function DropDown({ id, title, body }) {
  return (
    <>
      <div
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}
      >
        {title}
      </div>
      <div className="collapse" id={id}>
        <div className="card card-body">{body}</div>
      </div>
    </>
  );
}
