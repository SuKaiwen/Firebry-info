import React from 'react';

// Images
import mountain from '../Images/mountain.jpg';
import firebrylogin from '../Images/firebrylogin.JPG';
import firebrymoments from '../Images/firebrymoments.JPG';
import firebrysettings from '../Images/firebrysettings.JPG';
import firebrysignup from '../Images/firebrysignup.JPG';
import firebryupload from '../Images/firebryupload.JPG';



function Main(props) {

    const dataset = [
        {
            title: "Sign up",
            text: "Users are able to sign up using an email, password, username, first name and last name. The frontend sends a POST request to Google Firebase DB via Firebase Authentication Methods.",
            image: firebrysignup
        },
        {
            title: "Authentication",
            text: "Firebry includes an Authentication System in which users are able to log in and log out.",
            image: firebrylogin
        },
        {
            title: "Edit Password",
            text: "Firebry users are able to update their password in the application which will send a POST request to Firebase DB.",
            image: firebrysettings
        },
        {
            title: "Upload Moments",
            text: "Upload Moments to the DB. Users are able to upload an image and attach a title, description, location along with it. Images are unique to the user, users can only view moments they have uploaded on their profile.",
            image: firebryupload
        },
        {
            title: "View Moments",
            text: "Firebry users are able to view moments they uploaded on their profile in a grid format.",
            image: firebrymoments
        }
    ]

    return (
        <>
            <div className = "banner">
                <img src = {mountain} alt = "" />
            </div>
            <div className = "page-container">
                <h1>Firebry Info</h1>
                <div className = "text-box">
                    <p>Firebry is an image hosting application created using <span className = "bold">Firebase Backend</span> and <span className = "bold">React Frontend</span>. 
                    Users are able to create an account, login, update password and add/upload images with an associated title, description and location and it will store it to the database with a click of a button. 
                    </p>
                    <p>More functionalities to be added soon! For now visit the <a target="_blank" href="https://github.com/SuKaiwen/Firebry" className = "bold"><i class="fa-brands fa-github"></i> Github Repository.</a></p>
                </div>
                
                <div className = "main-grid">
                    {dataset.map(data => {return(
                        <div className = "section">
                            <div className = "info-box">
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                            </div>
                            <div className = "data-image">
                                <img src ={data.image} alt = {data.title} />
                            </div>
                        </div>)})
                    }
                </div>
                    
            </div>
        </>
    );
}

export default Main;