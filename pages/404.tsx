import { useRouter } from "next/router";
import ButtonBack from "../components/ButtonBack";

function Page404() {
  const { back } = useRouter();
  return (
    <div
      style={{
        width: "100vw",
        height: "97vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>404</h1>
      <p>Page not found</p>
      <ButtonBack
        isArrow={false}
        onClick={back}
        style={{
          position: "unset",
        }}
      >
        HOME
      </ButtonBack>
    </div>
  );
}

export default Page404;
