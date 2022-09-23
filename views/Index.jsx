const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    console.log(`logs: ${logs}`)
    return (
      <DefaultLayout title={"Captain's Log Log"}>
        <nav>
          <a href={'/logs/new'}>New Log Entry</a>
        </nav>

        <ul className="index-ul">
          {logs.map((log, index) => {
            return (
              <li key={index}>
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

                <div>Is the ship broken?
                  {log.shipIsBroken
                    ? <span className='icon-span' style={{ color: '#333' }}>
                      {`  😮 Yes. ✅ 🔴 ⚡🚭🆘☣️☢️  `}
                    </span>
                    : <span className='icon-span' style={{ color: '#333' }}>
                      {`  😀 No.  🟢 🆗 `}
                    </span>
                  }
                </div>
                <br />
                <form
                  action={`/logs/${log.id}?_method=DELETE`}
                  className="delete-form"
                  method="POST">
                {/* EDIT */}
                <a className="edit-link" href={`/logs/${log.id}/edit`}>Edit log entry</a>
                {/* DELETE */}
                  <input type="submit" value="DELETE" />
                </form>
                <br /><hr /><br />
              </li>
            );
          })}
        </ul>
      </DefaultLayout >
    )
  }
}

module.exports = Index;

