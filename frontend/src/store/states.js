export default {
  // Login
  isAuth: false,
  isLogin: false,
  
  emailRules: [
    email => !!email || '이메일을 입력해주세요!',
    email => /.+@.+/.test(email) || '이메일 형식으로 입력해주세요.'
  ],
  pwRules: [
    password => !!password || '비밀번호를 입력해주세요!',
  ],
  nameRules: [
    name => !!name || '이름을 입력해주세요!'
  ],
  phoneRules: [
    phone => !!phone || '전화번호를 입력해주세요!'
  ],
};
