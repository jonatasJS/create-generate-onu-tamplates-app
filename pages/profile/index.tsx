/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import ButtonBack from "../../components/ButtonBack";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  error && setTimeout(() => (window.location.href = "/"), 2000);

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#000",
        }}
      >
        Loading...
      </div>
    );
  if (error)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#000",
        }}
      >
        {error.message}
      </div>
    );

  return (
    user && (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={user.picture || ""}
          alt={user.nickname || ""}
          style={{
            borderRadius: "50%",
          }}
        />
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
        <ButtonBack
          style={{
            position: "unset",
          }}
          isArrow={false}
          value="Logout"
          onClick={() => (window.location.href = "/api/auth/logout")}
        />
      </div>
    )
  );
}
