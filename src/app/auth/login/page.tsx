import AuthPage from "@/components/AuthPage";
import loginAction from "./loginAction";

const Login = () => {
    return (  
        <AuthPage
            title="Faça Login"
            text="Faça login no Dash.go"
            routerPush="/dashboard"
            authFunction={loginAction}
        />
    );
}
 
export default Login;