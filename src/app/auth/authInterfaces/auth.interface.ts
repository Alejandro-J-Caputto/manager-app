export interface LoginForm {
  email: string,
  password: string
}
export interface RegisterForm {
  name: string
  email: string,
  password: string,
  passwordConfirm: string
}


export interface LoginResponse {
  status:  string;
  message: string;
  user:    User;
  token:   string;
}

export interface User {
  role:     string;
  active:   boolean;
  google:   boolean;
  _id:      string;
  name:     string;
  email:    string;
  password: string;
  __v:      number;
}

export interface RegisterResponse {
  status:  string;
  message: string;
  token:   string;
  newUser: User;
}
