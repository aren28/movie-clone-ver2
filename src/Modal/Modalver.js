import {useState,useEffect} from 'react'
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import ReactPlayer from 'react-player'
import closeButton from "../images/closebutton.png";
function Modalver() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const onOpenModal = function(event){
    var videoUri =  event.target.getAttribute("data-url");
    setmovieUrl(videoUri);
    return setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const [movieUrl, setmovieUrl] = useState("");

  const styleCloseButton = {
    width: "50px",
    background: "#ffffff",
    borderRadius: "35px"
  };

  const closeIcon = (
    <img src={closeButton} style={styleCloseButton}/>
  );


  useEffect(() => {
    fetch(
      "https://movie-clone-a5867-default-rtdb.firebaseio.com/movies/actionMovies.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
      <div>
          <div>
            <div className="row">
                <h2>NETFLIX ORIGINALS</h2>
                <div className="row__posters">
                {items.map((movieArray) => (
                // <div className="movie" data-movieurl={`${movieArray.videoUrl}`}>
                  <img
                    key={movieArray.id}
                    className="row__poster row__posterLarge"
                    src={`${movieArray.thumbnail}`}
                    onClick={onOpenModal}
                    data-url={`${movieArray.videoUrl}`}
                  />
                  // </div>
                ))}
                </div>
            </div>
            <Modal 
            open={open} 
            onClose={onCloseModal} 
            center
            closeOnEsc
            showCloseIcon
            closeIcon={closeIcon}
            blockScroll="true"
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
                top:"20px",
                right:"10px"
              }
            }}
            >
              <ReactPlayer
                controls
                width="100%"
                height="100%"
                url={movieUrl}
              />
            </Modal>
          </div>
      </div>
      );
        }
}

export default Modalver;
