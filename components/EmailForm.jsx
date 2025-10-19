"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted Email");
    alert("mail submitted");
    setEmail("");
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-3/4 mx-auto my-8 "
      >
        <input
          type="email"
          id="emailInput"
          value={email}
          placeholder="Email address..."
          onChange={handleChange}
          required
          className="bg-amber-50  h-9 sm:h-12 border-2 border-[var(--deep-red)] outline-0 mb-3 p-2 rounded-2xl "
        />

        <button
          className="bg-[var(--deep-red)] py-2 sm:py-3 uppercase text-white font-extrabold cursor-pointer hover:bg-[var(--orange)] hover:text[var(--text-deep-red)] rounded-2xl text-[12px] sm:text-2xl"
          type="submit "
        >
          get new recipes
        </button>
      </form>
      <p className="text-[11px] text-center sm:text-sm   bg-[var(--bg-light)] ">
        By signing up, you agree to our Privacy Policy. We respect your data.
        Unsubscribe anytime.
      </p>
    </div>
  );
}
