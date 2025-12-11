import { useState } from "react";
import Button from "../../ui/Button";
import TextInput from "../../ui/Input/TextInput";

const EMAIL_REGEX = /^[^@]+@[^@]+\.[^@]+$/;
const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!email.match(EMAIL_REGEX)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    } else if (!email) {
      setErrorMessage("Email address is required.");
      return;
    } else {
      setErrorMessage("");
    }

    setSubmitting(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }), // Send the data in JSON format
    };

    // Make the request
    const res = await fetch(
      "https://www.greatfrontend.com/api/projects/challenges/newsletter",
      requestOptions
    );

    console.log("res", res);

    setSubmitting(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-4 md:flex-row"
    >
      <TextInput
        placeholder="Enter your email"
        errorMessage={errorMessage}
        onChange={(value) => setEmail(value)}
        value={email}
        required
      />
      <Button type="submit" isDisabled={submitting}>
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;
