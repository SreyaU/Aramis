const toggleButton = document.getElementById('toggle-sidebar');
const sidebar= document.getElementById('sidebar');

toggleButton.addEventListener('click',() =>{
    sidebar.classList.toggle('visible');
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const messageElement = document.getElementById('message');

    if (file) {
        if (file.type.startsWith('image/')) {
            messageElement.textContent = 'File is valid. Ready to upload!';
        } else {
            messageElement.textContent = 'Please upload a valid image file.';
            event.target.value = ''; // Reset the input
        }
    }
});

function validate(){
    const name1 = document.getElementById('fname').value;
    const name2 = document.getElementById('lname').value;
    const valname =/^[a-zA-Z]+$/;
    const fNameId = document.getElementById('fname');
    const lNameId = document.getElementById('lname');

    if (!RegExp.test(name1)){
        alert("Invalid input.Only characters are allowed")
    }
    if (!RegExp.test(name2)){
        alert("Invalid input.Only characters are allowed")
    }
}
// const fileInput = document.getElementById('myfile');
// const previewContainer = document.getElementById('imagepreview');
// fileInput.addEventListener('change', function(){
//     const file = fileInput.files[0];
//     if(!image.type.includes('image'))
//         return alert ('only images are allowed');
//     }
// )

