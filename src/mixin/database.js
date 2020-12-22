import firebase from "firebase/app";
import "firebase/firestore";

const database = firebase.firestore();

function img_data(docName, objData) {
    let update_data = database.collection("project").doc(docName);
    update_data.update({
        data: firebase.firestore.FieldValue.arrayUnion(objData)
    })
}
function getTagList(pass) {
    let tags = database.collection("tools").doc('tools');
    let tagsList = [];
    let tagData = [];
    tags.get().then((doc) => {
        if (doc.exists) {
            tagsList = [...doc.data().packs];
        }
        tagsList.forEach((data) => {
            tagData.push(data.name);
        })
        pass(tagData);
    })
}
function getProject(type) {
    let project = database.collection("project").doc(type);
    project.get().then((doc) => {
        console.log(doc.data().data);
    })
}
export { img_data, getTagList, getProject }