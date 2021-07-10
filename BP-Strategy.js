// 登录控制器
function LoginController(){
    this.strategy = undefined
    this.setStrategy = function(strategy){
        this.strategy = strategy
        this.login = this.strategy.login
    }
}


// 用户名密码登录
function LocalStrategy (){
    this.login = ({username,password}) => {
        console.log(username,password)
        // authenticating with username and password...
    }
}


// 手机号验证码登录
function PhoneStrategy(){
    this.login = ({id,secret}) => {
        console.log(id,secret)
        // authenticating with hone and verifyCode...
    }
}



//  第三方社交登录策略
function SocialStrategy() {
    this.login = ({ id, secret }) => {
      console.log(id, secret);
      // authenticating with id and secret... 
    }
}


const loginController = new LoginController()

//   调用用户名密码登录接口，使用LocalStrategy
app.use('login/local',function (req,res) {
    loginController.setStrategy(new LocalStrategy())
    loginController.login(req.body)
})

// 调用手机、验证码登录接口，使用PhoneStrategy
app.use('/login/phone', function (req, res) {
    loginController.setStrategy(new PhoneStrategy());
    loginController.login(req.body);
  });
  
// 调用社交登录接口，使用SocialStrategy
app.use('/login/social', function (req, res) {
  loginController.setStrategy(new SocialStrategy());
  loginController.login(req.body);
});