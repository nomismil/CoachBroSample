import Navbar from "./Navbar.jsx";

class Registrations extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.register;
    const member = {
      username: form.username.value,
      password: form.password.value,
      accountType: form.accountType.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      gender: form.gender.value,
      contact: form.contact.value,
      username: form.username.value,
      address: form.address.value,
      dob: form.dob.value,
    };
    this.props.addMember({
      firstName: member.firstName,
      lastName: member.lastName,
      accountType: member.accountType,
      email: member.email,
      gender: member.gender,
      contactNo: member.contact,
      username: member.username,
      password: member.password,
      address: member.address,
      dob: member.dob,
    });
    form.username.value = "";
    form.password.value = "";
    form.accountType.value = "";
    form.firstName.value = "";
    form.lastName.value = "";
    form.email.value = "";
    form.gender.value = "";
    form.contact.value = "";
    form.address.value = "";
    form.dob.value = "";
  }

  render() {
    return (
      <>
        {/* <div>
          <Navbar />
        </div> */}
        {/* <div className='container'> */}

        <div className="login">
          <div className="auth-form-container">
            <h3>New Member Registrations</h3>
            {/* <h2 className="auth-form-header">Welcome to CoachBRO!</h2> */}

            <form
              name="register"
              className="login-form"
              onSubmit={this.handleSubmit}
            >
              <label>First Name:</label>
              <input type="text" placeholder="First Name" name="firstName" />
              <label>Last Name:</label>
              <input type="text" placeholder="Last Name" name="lastName" />
              <label>Account Type:</label>
              <select name="accountType">
                <option>Ordinary</option>
                <option>Trainer</option>
              </select>
              <label>Email:</label>
              <input type="email" placeholder="Email" name="email" />
              <label>Gender:</label>
              <select name="gender">
                <option>Female</option>
                <option>Male</option>
              </select>
              <label>Contact Number:</label>
              <input type="number" placeholder="Contact" name="contact" />
              <label>Username:</label>
              <input type="text" placeholder="Username" name="username" />
              <label>Address:</label>
              <input type="text" placeholder="Address" name="address" />
              <label>DOB:</label>
              <input type="date" placeholder="DOB" name="dob" />
              <label>Password:</label>
              <input type="password" placeholder="********" name="password" />
              <button className="loginButton" onSubmit={this.handleSubmit}>Register</button>
            </form>

            <a href="/#/login">
              <button className="login-register-link-btn">
                Already have an account? Login here.
              </button>
            </a>
          </div>

          {/* <footer className="privacy-notice">
              <p>
                This site uses cookies. By continuing to use this site, you agree to
                our use of cookies. For more details, please see our{" "}
                <a href="https://www.nus.edu.sg/privacy-notice/">Privacy Policy</a>
              </p>
            </footer> */}
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Registrations;
