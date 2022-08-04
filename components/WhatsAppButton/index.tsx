import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link href="https://api.whatsapp.com/send?phone=5563991321180&text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20um%20or%C3%A7amento.">
      <a
        style={{
          position: "fixed",
          width: "60px",
          height: "60px",
          bottom: "40px",
          right: "40px",
          background: "#25D366",
          color: "white",
          borderRadius: "50%",
          textAlign: "center",
          fontSize: "30px",
          boxShadow: "2px 2px 2px #999",
          zIndex: 9999,
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
					textDecorationLine: "none",
					cursor: "pointer"
        }}
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </Link>
  );
}
