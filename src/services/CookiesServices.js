import Cookies from "universal-cookie";
const cookies=new Cookies()
class CookiesServices{
    set(name,value,options){
        return cookies.set(name,value,options)
    }
    get(name){
        return cookies.get(name)
    }
    remove(name){
        return cookies.remove(name)
    }
}
export default new CookiesServices()