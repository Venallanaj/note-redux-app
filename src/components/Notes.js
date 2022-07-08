import NewNote from "./NewNote";
import NoteList from "./NoteList";

const Notes = (props) => {
  return (
    <div className="container justify-content-center align-items-center">
      <div className="row">
        <div className="col-sm-6">
          <NoteList />
        </div>
        <div className="col-sm-6">
          <NewNote />
        </div>
      </div>
    </div>
  );
};

export default Notes;
