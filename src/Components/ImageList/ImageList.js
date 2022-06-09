import React, {useState} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Mouse from '../Mouse/Mouse.js'
import "./ImageList.scss";

export default function StandardImageList() {
    const itemData = [ // To Do: Figure out a way to fetch this data programmatically
        {
            img: '/assets/images/LawDepot/Change-Email-Address.PNG',
            title: 'Change Email Address',
        },
        {
            img: '/assets/images/LawDepot/Communication-Center.PNG',
            title: 'Communication Center',
        },
        {
            img: '/assets/images/LawDepot/Contact-Form.PNG',
            title: 'Contact Form',
        },
        {
            img: '/assets/images/LawDepot/Create-Folder-Popup.PNG',
            title: 'Create Folder Pop Up',
        },
        {
            img: '/assets/images/LawDepot/Delete-Popup.PNG',
            title: 'Delete Pop Up',
        },
        {
            img: '/assets/images/LawDepot/Doculaw-Home-Page.PNG',
            title: 'Doculaw Home Page',
        },
        {
            img: '/assets/images/LawDepot/Document-History-Popup.PNG',
            title: 'Document History Pop up',
        },
        {
            img: '/assets/images/LawDepot/File-Upload.PNG',
            title: 'File Upload',
        },
        {
            img: '/assets/images/LawDepot/Folder-Navigation.PNG',
            title: 'Folder Navigation',
        },
        {
            img: '/assets/images/LawDepot/Item-Details-Popup.PNG',
            title: 'Item details Popup',
        },
        {
            img: '/assets/images/LawDepot/Move-To-Empty-Folder.PNG',
            title: 'Move to Empty Folder',
        },
        {
            img: '/assets/images/LawDepot/My-Account-Page.PNG',
            title: 'My Account',
        },
        {
            img: '/assets/images/LawDepot/My-Documents.PNG',
            title: 'My Documents',
        },
        {
            img: '/assets/images/LawDepot/All-Documents-Search.PNG',
            title: 'All Documents',
        },
        {
            img: '/assets/images/LawDepot/My-Files.PNG',
            title: 'My Files',
        },
        {
            img: '/assets/images/LawDepot/Payment-Method-Popup.PNG',
            title: 'Payment Method Popup',
        },
        {
            img: '/assets/images/LawDepot/Payment-Method.PNG',
            title: 'Payment Method',
        },
        {
            img: '/assets/images/LawDepot/Privacy-Policy-Print-Popup.PNG',
            title: 'Privacy policy print popup',
        },
        {
            img: '/assets/images/LawDepot/Rename-Item-Popup.PNG',
            title: 'Rename Item Popup',
        },
        {
            img: '/assets/images/LawDepot/Response-Prompt.PNG',
            title: 'Response Popup',
        },
        {
            img: '/assets/images/LawDepot/Sample-Contract-Form-2.PNG',
            title: 'Sample Contract Form 2',
        },
        {
            img: '/assets/images/LawDepot/Sample-Contract-Form.PNG',
            title: 'Sample Contract Form',
        },
        {
            img: '/assets/images/LawDepot/Select-Country-Popup.PNG',
            title: 'Select Country Popup',
        },
        {
            img: '/assets/images/LawDepot/SEO-Content-Section.PNG',
            title: 'SEO Content Popup',
        },
        {
            img: '/assets/images/LawDepot/Sign-In-Popup.PNG',
            title: 'Sign In Pop up',
        },
        {
            img: '/assets/images/LawDepot/Site-Navigation.PNG',
            title: 'Site Navigation',
        },
        {
            img: '/assets/images/LawDepot/Social-Share-Widget.PNG',
            title: 'Social Share Widget',
        },
        {
            img: '/assets/images/LawDepot/Social-Share.PNG',
            title: 'Social Share',
        }
    ];

    const [state, setState] = useState({
        alt: null,
        src: null,
        visible: false
    });

    function updateModal(e) {
        setState({
            alt: e.target.alt,
            src: e.target.src,
            visible: true 
        })
    }

    function setDefault() {
        setState({
            alt: "",
            src: "",
            visible: false
        })
    }

    return (
        <ImageList sx={{ width: 1250, height: 600 }} cols={2} rowHeight={400}>
            {itemData.map((item) => (
                <ImageListItem key={item.img} onClick={updateModal}>
                    <img
                        src={`${item.img}`}
                        srcSet={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
            <Mouse />
            <Modal alt={state.alt} src={state.src} visible={state.visible} setDefault={setDefault} />
        </ImageList>
    );
}

function Modal(props) {
    return (
        <div id="myModal" className={`modal ${props.visible ? "visible" : ""}`} onClick={props.setDefault}>
            {props.visible &&
                <>
                    <img className="modal-content" alt={props.alt} src={props.src}></img>
                    <div id="caption">{props.alt}</div>
                </>
            }
        </div>
    )
}
