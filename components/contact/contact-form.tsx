"use client";

import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contact: any) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Something went wrong");
}

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState<
    "pending" | "success" | "error" | null
  >(null);
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus == "pending") return;
    const timer = setTimeout(() => {
      setRequestStatus(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [requestStatus]);

  async function onSendMessageHandler(e: any) {
    e.preventDefault();
    setRequestStatus("pending");

    try {
      await sendContactData({ email, name, message });
      setRequestStatus("success");
      setMessage("");
      setEmail("");
      setName("");
    } catch (e: any) {
      setRequestStatus("error");
      setRequestError(e.message);
    }
  }

  let notification: {
    title: string;
    message: string;
    status: "pending" | "success" | "error";
  } | null = null;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Your request is on its way",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Your message was sent successfully",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={onSendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification ? (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      ) : undefined}
    </section>
  );
}
