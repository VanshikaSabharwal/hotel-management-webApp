import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

const withAuthorization = (WrappedComponent: ComponentType<any>) => {
  return (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const authorizedEmail = process.env.STUDIO_AUTHORIZED_EMAIL as string;
    useEffect(() => {
      if (status === "loading") return;

      console.log(
        "Authorized Email from env:",
        process.env.STUDIO_AUTHORIZED_EMAIL
      );

      if (!session) {
        signIn();
      } else if (session.user?.email === authorizedEmail) {
        router.push("/studio");
      } else if (session.user?.email !== authorizedEmail) {
        router.push("/");
      }
    }, [session, status, router, authorizedEmail]);

    if (
      status === "loading" ||
      !session ||
      session.user?.email !== authorizedEmail
    ) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthorization;
