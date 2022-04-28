import { Outlet } from "remix";
import { SingleElementLayout } from "~/layouts/singleElementLayout";

export default function Login() {
  return (
    <SingleElementLayout>
      <Outlet />
    </SingleElementLayout>
  );
}
