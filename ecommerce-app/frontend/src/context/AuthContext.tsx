import { signIn } from "@/api/auth";
import type { SignInRequest } from "@/types/auth";
import type { UserSession } from "@/types/user-session";
import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  userSession: UserSession | null;
  isAuthenticated: boolean;
  isAdmin: boolean;

  login: (signInRequest: SignInRequest) => Promise<boolean>;
  logout: () => void;
}

const getRoleFromToken = (token: string) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role || "user";
  } catch (error) {
    return "user";
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userSession, setUserSession] = useState<UserSession | null>(() => {
    const storedUser = localStorage.getItem("userSession");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (signInRequest: SignInRequest): Promise<boolean> => {
    try {
      const response = await signIn(signInRequest);
      const { token } = response.data;
      setUserSession({ token });
      localStorage.setItem("userSession", JSON.stringify({ token }));
      return true;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    setUserSession(null);
    localStorage.removeItem("userSession");
  };

  const value = {
    userSession,
    isAuthenticated: !!userSession,
    isAdmin: userSession
      ? getRoleFromToken(userSession.token) === "ADMIN"
      : false,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
