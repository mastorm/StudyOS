import logo from "~/assets/logo.svg";
import { Form } from "remix";
import { Link } from "react-router-dom";
import { Input } from "~/components/form";

export default function Index() {
  return (
    <main className="p-3 rounded-md shadow-lg bg-white flex flex-col gap-6">
      <div className="h-24 w-24 mx-auto">
        <img
          className="w-auto h-full mx-auto p-2"
          src={logo}
          alt="StudyOS logo"
        />
      </div>

      <Form className="flex flex-col gap-2">
        <Input name="email" required placeholder="your@email.com" />
        <Input
          name="password"
          required
          type="password"
          placeholder="********"
        />
        <button className="p-2 bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-white rounded-md uppercase">
          Login
        </button>
      </Form>
      <p>
        Dont have an account yet?{" "}
        <Link
          className="text-teal-500 visited:text-teal-600 hover:text-teal-400"
          to="/register"
        >
          Create one!
        </Link>
      </p>
    </main>
  );
}
