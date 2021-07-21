import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function CreateRoomDialog({ onCreateNewRoom }) {
  const [open, setOpen] = useState(false);
  const roomNameRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createNewRoom = () => {
    setOpen(false);
    onCreateNewRoom(roomNameRef.current.value);
  };

  return (
    <>
      <button
        className="sidebar__addNewChat__add-new-room-btn"
        onClick={handleClickOpen}
      >
        Add new room
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Create Room</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            type="text"
            fullWidth
            inputRef={roomNameRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={createNewRoom} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
