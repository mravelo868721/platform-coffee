import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Every field has something in it
  const isFormComplete = Object.values(form).every(Boolean);

  return (
    <div>
      <form className="flex flex-col bg-gray-400 p-8">
        <label className="flex flex-col">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            // On state change change only this
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-white border border-white rounded-lg p-4 mb-4"
          ></input>
        </label>

        <label className="flex flex-col">
          <span>Email</span>
          <input
            type="email"
            value={form.email}
            // On state change change only this
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-white border border-white rounded-lg p-4 mb-4"
          ></input>
        </label>
        <label className="flex flex-col">
          <span>Message</span>
          <input
            className="bg-white border border-white rounded-lg p-4 mb-4"
            type="text"
            name="message"
            value={form.message}
            // On state change change only this
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></input>
        </label>

        <button
          className="
    px-8 py-4 rounded-lg font-semibold uppercase
    bg-black text-white
    disabled:bg-gray-300 disabled:text-gray-500
    disabled:cursor-not-allowed
  "
          disabled={!isFormComplete}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
