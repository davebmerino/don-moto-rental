import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase-client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function LogIn() {
  const navigate = useNavigate();

  const adminEmails = ["daavviidd21@gmail.com", "admin2@gmail.com"];

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          const email = session.user.email;

          if (adminEmails.includes(email)) {
            navigate("/admin");
          } else {
            navigate("/user");
          }
        }
      }
    );

    // Cleanup on unmount
    return () => {
      listener.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <div className="flex justify-center items-center align-middle py-6 mt-20 gap-10 bg-[#f8fafc]">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
      />
    </div>
  );
}
