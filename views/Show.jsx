const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <DefaultLayout title={`Closeup of ${log.title}`}>
        <div className="show-wrapper">
          <div className="time-stamp-wrapper">
            <h5 className="time-stamp">{
              log.createdAt ?
                `${new Date(log.createdAt).toDateString()} 
                    ${new Date(log.createdAt).toLocaleTimeString('en-US')}`
                :
                `entered before captain added timestamps`
            }</h5>
          </div>
          <div className="entry-title-wrapper">
            <a className="entry-display-title" href={`/logs/${log.id}`}>{log.title}</a> <br />
          </div>

          <div className="log-entry-display">{log.entry}</div>
          <br />

          <div className="broken-ship-div">Is the ship broken?
            {log.shipIsBroken
              ? <span className='icon-span' style={{ color: '#333' }}>
                {`  😮 Yes. ✅ 🔴 ⚡🚭🆘☣️☢️  `}
              </span>
              : <span className='icon-span' style={{ color: '#333' }}>
                {`  😀 No.  🟢 🆗 `}
              </span>
            }
          </div>
          <div className="edit-buttons">
            <a className="cancel-add-edit show-back-to-log" href="/logs">back to log log</a>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;