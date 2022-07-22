export default function DropDown({title, body}) {
  const titleString = title.split(' ').join('')
  return (
    <div>
      <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#${titleString}`} aria-expanded="false" aria-controls={titleString}>
          {title}
      </button>
      <div className="collapse" id={titleString}>
        <div className="card card-body">
          {body}
        </div>
      </div>
    </div>
  )
}
