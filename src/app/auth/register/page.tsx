import AuthPage from "@/components/AuthPage"
import registerAction from "./registerAction";

const Register = () => {
  return (
    <AuthPage 
      title="Cadastre-se" 
      text="Crie sua conta no Dash.go"   
      registerPage
      routerPush="/auth/login"
      authFunction={registerAction}
    />
  )
};

export default Register;
