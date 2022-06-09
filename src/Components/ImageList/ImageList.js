import React, { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CloseIcon from '@mui/icons-material/Close';
import Mouse from '../Mouse/Mouse.js'
import "./ImageList.scss";

export default function StandardImageList() {
    const itemData = [ // To Do: Figure out a way to fetch this data programmatically, generate id sequence from 1
        {
            img: '/assets/images/LawDepot/Change-Email-Address.PNG',
            title: 'Change Email Address',
            id: 1
        },
        {
            img: '/assets/images/LawDepot/Communication-Center.PNG',
            title: 'Communication Center',
            id: 2
        },
        {
            img: '/assets/images/LawDepot/Contact-Form.PNG',
            title: 'Contact Form',
            id: 3
        },
        {
            img: '/assets/images/LawDepot/Create-Folder-Popup.PNG',
            title: 'Create Folder Pop Up',
            id: 4
        },
        {
            img: '/assets/images/LawDepot/Delete-Popup.PNG',
            title: 'Delete Pop Up',
            id: 5
        },
        {
            img: '/assets/images/LawDepot/Doculaw-Home-Page.PNG',
            title: 'Doculaw Home Page',
            id: 6
        },
        {
            img: '/assets/images/LawDepot/Document-History-Popup.PNG',
            title: 'Document History Pop up',
            id: 7
        },
        {
            img: '/assets/images/LawDepot/File-Upload.PNG',
            title: 'File Upload',
            id: 8
        },
        {
            img: '/assets/images/LawDepot/Folder-Navigation.PNG',
            title: 'Folder Navigation',
            id: 9
        },
        {
            img: '/assets/images/LawDepot/Item-Details-Popup.PNG',
            title: 'Item details Popup',
            id: 10
        },
        {
            img: '/assets/images/LawDepot/Move-To-Empty-Folder.PNG',
            title: 'Move to Empty Folder',
            id: 11
        },
        {
            img: '/assets/images/LawDepot/My-Account-Page.PNG',
            title: 'My Account',
            id: 12
        },
        {
            img: '/assets/images/LawDepot/My-Documents.PNG',
            title: 'My Documents',
            id: 13
        },
        {
            img: '/assets/images/LawDepot/All-Documents-Search.PNG',
            title: 'All Documents',
            id: 14
        },
        {
            img: '/assets/images/LawDepot/My-Files.PNG',
            title: 'My Files',
            id: 15
        },
        {
            img: '/assets/images/LawDepot/Payment-Method-Popup.PNG',
            title: 'Payment Method Popup',
            id: 16
        },
        {
            img: '/assets/images/LawDepot/Payment-Method.PNG',
            title: 'Payment Method',
            id: 17
        },
        {
            img: '/assets/images/LawDepot/Privacy-Policy-Print-Popup.PNG',
            title: 'Privacy policy print popup',
            id: 18
        },
        {
            img: '/assets/images/LawDepot/Rename-Item-Popup.PNG',
            title: 'Rename Item Popup',
            id: 19
        },
        {
            img: '/assets/images/LawDepot/Response-Prompt.PNG',
            title: 'Response Popup',
            id: 20
        },
        {
            img: '/assets/images/LawDepot/Sample-Contract-Form-2.PNG',
            title: 'Sample Contract Form 2',
            id: 21
        },
        {
            img: '/assets/images/LawDepot/Sample-Contract-Form.PNG',
            title: 'Sample Contract Form',
            id: 22
        },
        {
            img: '/assets/images/LawDepot/Select-Country-Popup.PNG',
            title: 'Select Country Popup',
            id: 23
        },
        {
            img: '/assets/images/LawDepot/SEO-Content-Section.PNG',
            title: 'SEO Content Popup',
            id: 24
        },
        {
            img: '/assets/images/LawDepot/Sign-In-Popup.PNG',
            title: 'Sign In Pop up',
            id: 25
        },
        {
            img: '/assets/images/LawDepot/Site-Navigation.PNG',
            title: 'Site Navigation',
            id: 26
        },
        {
            img: '/assets/images/LawDepot/Social-Share-Widget.PNG',
            title: 'Social Share Widget',
            id: 27
        },
        {
            img: '/assets/images/LawDepot/Social-Share.PNG',
            title: 'Social Share',
            id: 28
        }
    ];

    const [state, setState] = useState({
        imageId: null,
        alt: null,
        src: null,
        visible: false
    });

    function updateModal(id) {
        if(id > itemData.length) {
            id = 1
        } else if(id < 1) {
            id = itemData.length
        }

        const image = (itemData.filter(img => img.id === id))[0];
        
        if(image) {
            setState({
                alt: image.title,
                src: image.img,
                imageId: image.id,
                visible: true
            })
        } else {
            setState({
                alt: "",
                src: "",
                imageId: null,
                visible: false 
            })
        }
    }

    return (
        <ImageList sx={{ width: 1250, height: 600 }} cols={2} rowHeight={400}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}`}
                        srcSet={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        onClick={() => updateModal(item.id)}
                    />
                </ImageListItem>
            ))}
            <Mouse />
            <Modal imageId={state.imageId} alt={state.alt} src={state.src} visible={state.visible} updateModal={updateModal} />
        </ImageList>
    );
}

function Modal(props) {
    return (
        <div id="image-modal" className={`modal ${props.visible ? "visible" : ""}`} >
            <img className="modal-content" alt={props.alt} src={props.src}></img>
            <div id="caption">{props.alt}</div>
            <ArrowLeftIcon className="left-arrow" onClick={() => props.updateModal(props.imageId - 1)} />
            <ArrowRightIcon className="right-arrow" onClick={() => props.updateModal(props.imageId + 1)} />
            <CloseIcon className="close-btn" onClick={props.updateModal} />
        </div>
    )
}
