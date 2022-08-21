import Layout from "../components/Layout/Layout"
import "semantic-ui-css/semantic.min.css"
import axios from "axios"
import {parseCookies,destroyCookie} from "nookies"; //retrieves cookies from backend
import baseUrl from "../utils/baseUrl"
import {redirectUser} from "../utils/authUser"




function MyApp({Component,pageProps}){
  return(
    <Layout {...pageProps}>
      <Component {...pageProps}/>
    </Layout>
  )
}

MyApp.getInitialProps = async(appContext)=>{ //We need to add this method to use getInitialProps bcoz we hv made custom _app.js which overrides default App.js properties. 
  const {Component,ctx} = appContext;//Component and ctx are properties of appContent. Component->active page 
    //console.log(appContext)

    const {token} = parseCookies(ctx);

    let pageProps={};

    const protectedRoutes = ctx.pathname==="/";

    if(!token){
      protectedRoutes && redirectUser(ctx,"/login")
    }
    else{
      if(Component.getInitialProps){//if any Component requests getInitialProps
        pageProps=await Component.getInitialProps(ctx);
  
      }

      try {
        const res = await axios.get(`${baseUrl}/api/auth`,{headers:{Authorization:token}})

        const {user,userFollowStats}=res.data

        if(user) !protectedRoutes&&redirectUser(ctx,"/")//if user is already logged in and trying to click login/signup

        pageProps.user=user;
        pageProps.userFollowStats=userFollowStats;


      } catch (error) {
        destroyCookie(ctx,"token")
        redirectUser(ctx,"/login")
      }
    }

   
    return {pageProps};
}

export default  MyApp;