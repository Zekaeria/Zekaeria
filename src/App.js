import logo from "./logo.svg";
import "./App.css";

import img1 from "./assets/slide4.png";

function App() {
  return (
    <div className="App">
      {/*Cover or heading*/}
      <div className="mb-2 bg-white rounded-3 mt-5">
        <div className="container-fluid py-5 full-width">
          <img
            className="rounded my-2 mx-2"
            src="https://lh3.googleusercontent.com/W5_TVdraYbAg2YgNz21TewCxg8Xvyxi3YbdhIzTdrhE-hGOx1FrPHOVml5K245PATH_9-pBjUUbXc16OTySHkrMU3JXBjGkYYbS3yIUDI-ckGgExKtAPM1F2pjzxtMw07bCS_GT-=w2400"
            alt="Generic placeholder image"
            width="200"
            height="200"
          />
          <h1 className="display-5 fw-bold">EXPRESSON</h1>
          <p className="lead fw-normal">
            {" "}
            The journal app used to express your thoughts and feelings
            privately, unless you want to share it with people you trust.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Download on Apple
          </button>
          <button className="btn btn-primary btn-lg" type="button">
            Download on Android
          </button>
        </div>
      </div>

      <header className="App-header">
        {/*<header className="pb-3 mb-4 border-bottom t-5 ">
      <a href="/" className="d-flex align-items-center text-light text-decoration-none">
        <img className="rounded mt-4" src="https://lh3.googleusercontent.com/W5_TVdraYbAg2YgNz21TewCxg8Xvyxi3YbdhIzTdrhE-hGOx1FrPHOVml5K245PATH_9-pBjUUbXc16OTySHkrMU3JXBjGkYYbS3yIUDI-ckGgExKtAPM1F2pjzxtMw07bCS_GT-=w2400" alt="Generic placeholder image" width="40" height="40"/>
        <span className="fs-4 mt-4 ms-2">Expresson</span>
      </a>
    </header>*/}

        {/*divider*/}
        <hr className="featurette-divider"></hr>
        {/*featured row or section */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading-text">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead lead-fix">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            
            <img src={img1}/>

          </div>
        </div>

        <div className="row p-5 align-items-md-stretch mx-4">
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-2">
              <h2 className="privacy">Respectful of your privacy</h2>
              <p>
                We take measures to ensure that your privacy is secured and
                whatever you share within our application stays.{" "}
              </p>
              {/*<button className="btn btn-outline-light" type="button">Example button</button>*/}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-2">
              <h2 className="privacy">Share with people you trust</h2>
              <p>
                Share your thoughts to the people you care for instead of
                strangers.{" "}
              </p>
              {/*<p>Stop sharing your private thoughts with the world and instead share it with people who actually care about you. </p>*/}
              {/*<button className="btn btn-outline-secondary" type="button">Example button</button>*/}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-2">
              <h2 className="privacy">Share anonymously</h2>
              <p>
                Birds of a feather flock together, and same goes for people. If
                you have an experience you want to share, share it publicly and
                anonymously within the app and see if others are going through
                similar situations.
              </p>
              {/*<button className="btn btn-outline-secondary" type="button">Example button</button>*/}
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 className="privacy">Siddharth Singha Roy</h2>
            <p>App Developer (React)</p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://github.com/HackXSid"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 class="privacy">Karl McPhee</h2>
            <p>App Developer (Firebase) </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://github.com/karlmcphee/"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 class="privacy">Antonio Mendieta</h2>
            <p>
              Project Manager, UI/Graphic Designer,<br></br>Web Developer
            </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://www.linkedin.com/in/antoniomendieta/"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 class="privacy">Anielle Mari David</h2>
            <p>UI/Graphic Designer, Web Developer</p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://github.com/Zekaeria"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
        </div>
      </header>

      {/*bottom of the page*/}
      <footer class="mastfoot mt-auto">
        <p class="float-right mt-3">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2020-2021 Comida For Familias, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
