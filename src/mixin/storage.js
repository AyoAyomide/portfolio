import firebase from "firebase/app";
import "firebase/storage";
import { useToast } from "balm-ui/plugins/toast";
const axios = require('axios');
const $toast = useToast();

function upload_img(file, tag, name, hint) {
    if (file == false || name == "") {
        $toast("Invalid image file or file name")
        return false;
    }
    let storageRef = firebase.storage().ref();
    let location = storageRef.child(tag + '/' + name);
    let tracker = location.put(file);
    tracker.on('state_changed', function (snapshot) {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        hint(progress);
    }, function (error) {
        $toast(error)
    }, function () {
        $toast("Image uploaded");
    });
}
function load_img() {
    var storageRef = firebase.storage().ref("3d");
    // Now we get the references of these images
    storageRef.listAll().then(function (result) {
        result.items.forEach(function (imageRef) {
            // And finally display them
            displayImage(imageRef);
        });
    }).catch(function (error) {
        // Handle any errors
        console.log(error);
    });

    function displayImage(imageRef) {
        console.log(imageRef);
        imageRef.getDownloadURL().then(function (url) {
            axios.get(url)
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }).catch(function (error) {
            // Handle any errors
            console.log(error);
        });
    }
}
export { upload_img, load_img }
