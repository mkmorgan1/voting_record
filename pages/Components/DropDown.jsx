export default function DropDown({ id, title, body }) {
  const reference = id + title;
  return (
    <>
      <h6
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${reference}`}
        aria-expanded="false"
        aria-controls={reference}
      >
        {title}
      </h6>
      <div className="collapse" id={reference}>
        <div className="card card-body">{body}</div>
      </div>
    </>
  );
}
