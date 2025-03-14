import { auth } from "@/lib/auth";
import Header from "../layout/Header";

// export type AuthGuardProps = {
//   children: React.ReactNode;
// };

export const AuthGuard = async () => {
  const session = await auth();
  return <Header session={session} />;
};
