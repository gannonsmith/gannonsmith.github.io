import { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {

  const StatusType = {
    Offline: "offline",
    Online: "online",
    Idle: "idle",
    DoNotDisturb: "dnd"
  }

  const [d, setD] = useState(null);
  const [status, setStatus] = useState(StatusType.Offline)

  function renderStatus() {
    switch (status) {
      case StatusType.Offline:
        return (
          <div className='status'>
            Offline
          </div>
        );
      case StatusType.Online:
        return (
          <div className='status'>
            Online
          </div>
        );
      case StatusType.Idle:
        return (
          <div className='status'>
            Idle
          </div>
        );
      case StatusType.DoNotDisturb:
        return (
          <div className='status'>
            Do Not Disturb
          </div>
        );
      default:
        return (<div>

        </div>)
    }
  }

  function renderStatusColor() {
    switch (status) {
      case StatusType.Offline:
        return ({
          'border': '5px solid #2C2F33'
        });
      case StatusType.Online:
        return ({
          'border': '5px solid #2E8B57'
        });
      case StatusType.Idle:
        return ({
          'border': '5px solid #FFD700'
        });
      case StatusType.DoNotDisturb:
        return ({
          'border': '5px solid red'
        });
      default:
        return (<div>

        </div>)
    }
  }

  useEffect(() => {
    const socket = new WebSocket('wss://gateway.discord.gg/encoding=json')

    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socket.onerror = (error) => {
      console.error('Websocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);

      setD(message['s']);

      if (message['op'] === 10) {
        setInterval(sendHeartbeat, message['d']['heartbeat_interval'] * 0.5);
        setTimeout(sendIdentify, 10000);
      } else if (message['op'] === 0 && message['d']['user']['id'] === "527586058695868424") {
        setStatus(message['d']['status']);
      }
    }

    function sendHeartbeat() {
      let heartbeatMessage = {
        "op": 1,
        "d": d,
      };
      
      socket.send(JSON.stringify(heartbeatMessage));
      console.log('Heartbeat message sent:', heartbeatMessage);
    }
  
    function sendIdentify() {
      const identifyMessage = {
        "op": 2,
        "d": {
          "token": "MTEyOTIxMzI5OTIyNjA1NDcwNw.Gk2mMK.lGZhKka3MvPlRuyvZxVa1peOt3SIZrXM4uZ3O8",
          "intents": 256,
          "properties": {
            "os": "linux",
            "browser": "my_library",
            "device": "my_library"
          }
        }
      };

      socket.send(JSON.stringify(identifyMessage));
      console.log('Identify message sent:', identifyMessage);
      return;
    }

    return () => {
      socket.close();
    };
  }, []);
  
  return (
    <div className='nav'>

      <div className='portrait-container'>
        <Link to="/home">
          <img src={"/static/images/arv_photo.jpg"} className="portrait" style={renderStatusColor()} alt="Gannon Smith"></img>
        </Link>
      </div>

      <div className='logo-container'>
        <span id="logo">Gannon Smith</span><br></br>
        {renderStatus()}
      </div>

      <div className='panel-container'>
        <div className='panel'>
          <Link to={"./home"}>
            <div className='nav-link'>
              Home
            </div>
          </Link>
        </div>
        <div className='panel'>
            <Link to={"./about"}>
              <div className='nav-link'>
                About
              </div>
            </Link>
        </div>
        <div className='panel'>
            <Link to={"./portolio"}>
              <div className='nav-link'>
              Portfolio
              </div>
            </Link>
        </div>
        <div className='panel'>
            <Link to={"./connect"}>
              <div className='nav-link'>
                Connect
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
