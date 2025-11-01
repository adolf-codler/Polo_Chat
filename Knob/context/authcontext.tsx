import React,{useContext,createContext,useState, ReactNode, use} from "react";
type User = {name:string}|null
type AuthContextType = {
  user: User
  login: (username: string) => void
  logout: () => void
}
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
})
export const AuthProvider = ({children}:{children:ReactNode})=>{
    const [user, setUser]=useState<User>(null)
    const login = (username: string) => {
        setUser({ name: username });
    };
    
    const logout = () => {
        setUser(null);
    };

return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);