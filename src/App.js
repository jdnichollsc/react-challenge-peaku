// 1. To import React Hooks use: React.useState()
// 2. To add Fragments use: <React.Fragments></React.Fragments>
// 3. You can use bootstrap 5 and CSS
import React from "react";
import {
  // you can add others functions of react-router-dom here:
  HashRouter,
  Route,
  Redirect,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";

// You can add other components here

const RegisterForm = withRouter(({ history }) => {
  const [state, setState] = React.useReducer(
    (state, action) => ({ ...state, ...action }),
    {}
  );

  const userSuccessRegister = (e) => {
    e.preventDefault();
    // const {email, password} = state
    // write your code here
    history.push("/profile");
  };

  return (
    <form onSubmit={userSuccessRegister}>
      <h4 class="sm fs-5 fw-bold">Register with us</h4>
      <div class="form-group mb-2">
        <label for="email" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          required
          value={state.email}
          onChange={(e) => setState({ email: e.target.value })}
        />
      </div>
      <div class="form-group mb-2">
        <label for="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          required
          value={state.password}
          onChange={(e) => setState({ password: e.target.value })}
        />
      </div>
      <button id="submit-btn" type="submit" class="btn btn-dark mt-2 px-5">
        Submit
      </button>
    </form>
  );
});

const ImgCard = (props) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState(null);

  const printImage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newImageUrl = formData.get("image-url");
    if (newImageUrl) {
      setImageUrl(newImageUrl);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div class="card card-img-sidebar mt-4">
        <img
          src={imageUrl}
          id="image-sidebar"
          class="card-img-top"
          alt="Programming is fun"
        />
        <div class="card-body">
          <p class="card-text fs-6">Programming is fun</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={printImage}>
      <input
        id="image-url"
        name="image-url"
        type="url"
        class="form-control input-image mt-2"
        placeholder="Enter photo Url"
      />
      <div class="w-100">
        <button id="submit-img" type="submit" class="btn btn-dark mt-2 px-5">
          Submit
        </button>
      </div>
    </form>
  );
};

const Home = () => {
  return (
    <React.Fragment>
      <div class="row">
        <div class="container title">
          <h1 class="text-dark fs-3 fw-bold">This is my web layout</h1>
        </div>
      </div>
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col principal-content">
              <div class="col">
                <div class="mt-2">
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Profile = () => {
  return (
    <div class="row">
      <h4 class="sm fs-5 fw-bold">Upload a profile photo</h4>
      <div class="col content-card">
        <ImgCard />
      </div>
    </div>
  );
};

const PageLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div class="content-nav bg-dark">
        <nav class="nav nav-pills flex-row flex-sm-row justify-content-between align-items-center text-white">
          <div class="navbar-brand fw-bold text-white mx-2">Navbar</div>
          <div class="ml-auto d-flex">
            <Link
              id="go-to-home"
              class="flex-sm-fill text-sm-center nav-link mr-2 text-white"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link
              class="flex-sm-fill text-sm-center nav-link text-white"
              to="/profile"
            >
              Upload photo
            </Link>
          </div>
        </nav>
      </div>
      <div class="container">{children}</div>
      <div class="container content-footer bg-dark">
        <div class="row justify-content-center align-items-center text-white">
          Footer
        </div>
      </div>
    </React.Fragment>
  );
};

const withPageLayout = (Component) => {
  return (props) => (
    <PageLayout>
      <Component {...props} />
    </PageLayout>
  );
};

const HomePage = withPageLayout(Home);
const ProfilePage = withPageLayout(Profile);

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </HashRouter>
  );
};

export default App;
