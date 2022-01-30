import React,{useState} from 'react'
import Modalver from "./Modalver";

function Row() {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  return (
    // <!-- Netflix Originals -->
    <div>
        <Modalver />
    </div>
  );
}

export default Row;
