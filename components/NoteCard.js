import React from "react";
import { Card, Button } from "semantic-ui-react";
import Link from "next/link";

const NoteCard = ({ note }) => {
  return (
    <div className="m-10">
      <Card>
        <Card.Content>
          <Card.Header>
            <Link href={`/${note._id}`}>
              <a>{note.title}</a>
            </Link>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link href={`/${note._id}`}>
            <Button primary>View</Button>
          </Link>
          <Link href={`/${note._id}/edit`}>
            <Button primary>Edit</Button>
          </Link>
        </Card.Content>
      </Card>
    </div>
  );
};

export default NoteCard;
