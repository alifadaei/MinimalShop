import React, { Component } from 'react';

class Login extends Component {
  state = {}
  render() {
    return (
      <div className="row justify-content-center align-items-center mb-sm-5 rtl margin-top" id='login-container'>
        <div className="col-10 col-sm-7 col-md-6 col-lg-4 bg-light p-3 p-md-4 rounded-2 shadow">

          <form autocomplete="on" id="login-form" className="" method="POST" action="">
            <div className="mb-3">
              <label for="email" className="form-label">ایمیل</label>
              <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">لطفا یک ایمیل معتبر وارد کنید</div>
            </div>

            <div className="mb-3">
              <label for="password" className="form-label">پسورد</label>
              <input type="password" className="form-control" id="password" name="password" aria-describedby="passHelp" />
              <div id="passHelp" className="form-text"></div>
            </div>

            <div className="text-center  mt-1 pt-2 ">
              <button name="btn-login" type="submit" className="btn btn-primary w-100">ورود
              </button>
            </div>
            <div className="text-center my-2 my-sm-3 ">
              <button className="btn btn-dark w-100" id="btn-register" type="button">ثبت نام
              </button>
            </div>
          </form>
          <form id="register-form" className="d-none" method="POST" action="">
            <div className="mb-3">
              <label for="first-name" className="form-label">نام</label>
              <input type="text" className="form-control" id="first-name" name="firstname" aria-describedby="fnh" />
              <div id="fnh" className="form-text">نام کوچک</div>
            </div>

            <div className="mb-3">
              <label for="last-name" className="form-label">نام خانوادگی</label>
              <input type="text" className="form-control" id="last-name" name="lastname" aria-describedby="lnh" />
              <div id="lnh" className="form-text">نام خانوادگی</div>
            </div>

            <div className="mb-3">
              <label for="remail" className="form-label">ایمیل</label>
              <input type="email" className="form-control" id="remail" name="email" aria-describedby="eh" />
              <div id="eh" className="form-text">یک ایمیل معتبر وارد کنید</div>
            </div>

            <div className="mb-3">
              <label for="rpassword" className="form-label">پسورد</label>
              <input type="password" className="form-control" id="rpassword" name="password" aria-describedby="ph" />
              <div id="ph" className="form-text">یک پسورد وارد کنید</div>
            </div>

            <div className="mb-3">
              <label for="rpassword2" className="form-label">Password again</label>
              <input type="password" className="form-control" id="rpassword2" name="password2" aria-describedby="ph2" />
              <div id="ph2" className="form-text">Re-enter your password</div>
            </div>

            <div className="mb-3">
              <label for="mobile-number" className="form-label">Mobile number</label>
              <input type="text" className="form-control" id="rpassword2" minlength="10" maxlength="10" name="mobile" aria-describedby="mh" />
              <div id="mh" className="form-text">Enter your mobile number</div>
            </div>

          </form>

        </div>
      </div>
    );
  }
}

export default Login;