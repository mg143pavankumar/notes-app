import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import Head from "next/head";

const NewNote = () => {
  const [form, setForm] = useState({ title: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createNote = async () => {
    try {
      const res = await fetch(
        "https://notes-app-three-kappa.vercel.app/api/notes",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is required";
    }

    if (!form.description) {
      err.description = "Description is required";
    }

    return err;
  };

  return (
    <div className="w-3/4 sm:w-3/6 m-auto ">
      <Head>
        <title>Create Note</title>
      </Head>
      <h1 className="py-10 text-center text-3xl font-bold">Create Note</h1>
      <div>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Input
              fluid
              error={
                errors.title
                  ? { content: "please enter a title", pointing: "below" }
                  : null
              }
              label="Title"
              placeholder="Enter your title"
              name="title"
              onChange={handleChange}
            />

            <Form.TextArea
              fluid="true"
              error={
                errors.description
                  ? { content: "please enter a desciption", pointing: "below" }
                  : null
              }
              label="Descirption"
              placeholder="Enter your description"
              name="description"
              onChange={handleChange}
            />
            <Button type="submit">Create</Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewNote;
