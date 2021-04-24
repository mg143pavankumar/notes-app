import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Confirm, Button, Loader } from "semantic-ui-react";
import Head from "next/head";

const Note = ({ data }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteNote();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);

  const close = () => setConfirm(false);

  const deleteNote = async () => {
    const noteId = router.query.id;

    try {
      const deleted = await fetch(`${process.env.SERVER_URL}/${noteId}`, {
        method: "DELETE",
      });

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      {isDeleting ? (
        <Loader active />
      ) : (
        <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <Button color="red" onClick={open}>
            Delete
          </Button>
        </>
      )}

      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${process.env.SERVER_URL}/${id}`);
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Note;
