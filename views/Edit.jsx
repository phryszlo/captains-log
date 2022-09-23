const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <DefaultLayout title={`Edit entry "${log.title}"`}>
        <div>
          <form
            className="form log-entry-form"
            action={`/logs/${log.id}?_method=PUT`}
            method="POST">
            <div className="form-field">
              <div className="form-label">Title:</div>
              <input type="text" name="title" defaultValue={log.title} />
            </div>
            <div className="form-field">
              <div className="form-label">Entry:</div>
              <input type="textarea" rows="10" cols="20" wrap="hard" name="entry" defaultValue={log.entry} />
            </div>
            <div className="form-field">
              <div className="form-label">Ship is broken:</div>
              {log.shipIsBroken ? (
                <input type="checkbox" title="shipIsBroken" defaultChecked />
              ) : (
                <input type="checkbox" title="shipIsBroken" />
              )
              }
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