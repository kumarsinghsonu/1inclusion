import React, {useState} from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader,
    MDBRow
} from "mdbreact";
import image1 from "../assets/images/gallery/image-1.jpg";
import image2 from "../assets/images/gallery/image-2.jpg";
import image3 from "../assets/images/gallery/image-3.jpg";
import image4 from "../assets/images/gallery/image-4.jpg";
import image5 from "../assets/images/gallery/image-5.jpg";


export const Gallery: React.FC = () => {

    const images = {
        '0': [
           'hr', 'ds'
        ]
    }

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    }

    return (
        <MDBContainer>
            <div className="container-xl">
            <div className='display-3 font-weight-bold orange-text'>Gallery</div>
                <p>Images from our events, programs, etc..</p>

                <MDBModal isOpen={modal} toggle={toggle} inline={false} noClickableBodyWithoutBackdrop={true} overflowScroll={true} size='lg'>
                    <MDBModalHeader toggle={toggle}></MDBModalHeader>
                    <MDBModalBody>
                        <MDBCardImage className="img-fluid" src={image2} waves/>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="dark" onClick={toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>



                <div className='display-4 font-weight-bolder'>1inclusion event 2021</div>
                <MDBRow className='mt-1'>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image1} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image2} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image3} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image4} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image5} waves/>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>


                <div className='display-4 font-weight-bolder'>1Inclusion Jobs 2021</div>
                <MDBRow className='mt-1'>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image1} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image2} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image3} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image4} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image5} waves/>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <div className='display-4 font-weight-bolder'>Academia training 2021</div>
                <MDBRow className='mt-1'>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image1} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image2} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image3} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image4} waves/>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="auto" onClick={toggle}>
                        <MDBCard style={{width: "16rem", height: "16rem", marginBottom: "1rem"}}>
                            <MDBCardImage className="img-fluid" src={image5} waves/>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer>
    )
}