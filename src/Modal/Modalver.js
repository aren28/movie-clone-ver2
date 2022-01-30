import React,{useState} from 'react'
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Iframe from 'react-iframe';

function Modalver() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
        <div>
          <div class="row">
              <h2>NETFLIX ORIGINALS</h2>
              <div class="row__posters">
                  <img onClick={onOpenModal} class="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg" alt="" />

                  <img class="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg" alt="" />

                  <img class="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg" alt="" />

                  <img class="row__poster row__posterLarge" src="images/large-movie4.jpg" alt="" />

                  <img class="row__poster row__posterLarge" src="images/large-movie5.jpg" alt="" />

                  <img class="row__poster row__posterLarge" src="images/large-movie6.jpg" alt="" />

                  <img class="row__poster row__posterLarge" src="images/large-movie7.jpg" alt="" />

                  <img class="row__poster row__posterLarge" src="images/large-movie8.jpg" alt="" />
              </div>
          </div>
          <Modal 
          open={open} 
          onClose={onCloseModal} 
          center
          closeOnEsc
          showCloseIcon
          styles={{
            modal: {
              maxWidth: "102%",
              maxHeight: "102%",
              height:"100%",
              width: "100%",
              padding: "0px",
              left:"-22px",
              top:"-18px"
            },
            overlay: {
              background: "rgba(0, 0, 0, 0.5)"
            },
            closeButton: {
              background: "yellow"
            }
          }}
          >
            <Iframe src="https://drive.google.com/file/d/1xtp5FJnZvQI-xb2TGxvQQsVjKGkUgDXZ/preview" 
            width="100%" 
            height="100%" 
            allow="autoplay"
            allowFullScreen="true"
            ></Iframe>
          </Modal>
        </div>
    </div>
  );
}

export default Modalver;
