const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Entry"}>
        <div>
          <form className="form log-entry-form" action="/logs" method="POST">
            <div className="form-field">
              <div className="form-label">Name:</div>
              <input type="text" name="title" />
            </div>
            <div className="form-field">
              <div className="form-label">Entry:</div>
              <input type="textarea" name="entry" />
            </div>
            <div className="form-field">
              <div className="form-label">Ship is broken:</div>
              <input type="checkbox" name="shipIsBroken" defaultChecked />
            </div>
            <div className="form-label"></div>

            <input type="submit" name="" value="SUBMIT" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;