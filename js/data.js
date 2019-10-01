const userData = [
{
id: "1232",
firstname: "Riche",
lastname: "Jimenez",
occupation: "Developer",
profilepicture: "https://unsplash.com/photos/JAkWUtmsFXM"

},
{
    id: "1234",
    firstname: "Riche",
    lastname: "Jimenez",
    occupation: "Developer",
    profilepicture: ""
    
},
{
    id: "1235",
    firstname: "Riche",
    lastname: "Jimenez",
    occupation: "Developer",
    profilepicture: "https://unsplash.com/photos/JAkWUtmsFXM"
    
    },
    {
    id: "1236",
    firstname: "Riche",
    lastname: "Jimenez",
    occupation: "Developer",
    profilepicture: "https://unsplash.com/photos/JAkWUtmsFXM"
        
    },
    {
    id: "1237",
    firstname: "Riche",
    lastname: "Jimenez",
    occupation: "Developer",
    profilepicture: "https://unsplash.com/photos/JAkWUtmsFXM"
            
    },
    {
    id: "1239",
    firstname: "Riche",
    lastname: "Jimenez",
    occupation: "Developer",
    profilepicture: "https://unsplash.com/photos/JAkWUtmsFXM"
                
    },
    {
    id: "1231",
    firstname: "Riche",
    lastname: "Jimenez",
    occupation: "Developer",
    profilepicture: "https://unsplash.com/photos/JAkWUtmsFXM"
                    
    },
    {
    id: "1233",
    firstname: "Riche",
    lastname: "Jimenez",
    occupation: "Developer",
    profilepicture: "https://unsplash.com/photos/JAkWUtmsFXM"
                        
    },
    {
     id: "1230",
     firstname: "Riche",
     lastname: "Jimenez",
     occupation: "Developer",
     profilepicture: "https://unsplash.com/photos/JAkWUtmsFXM"
                            
    },
    {
     id: "1229",
     firstname: "Riche",
     lastname: "Jimenez",
     occupation: "Developer",
     profilepicture: "https://unsplash.com/photos/JAkWUtmsFXM"
                                
    }
];
const userData = [

];
const tableElement=document.getElementById('users');

const forEachCallbackFn =function(user){
const rowElement = document.createElement('tr');

rowElement.classList='row';

const id= document.createElement('td');
const firstname= document.createElement('td');
const lastname= document.createElement('td');
const occupation=document.createElement('td')

id.textContent=user.id;
firstname.textContent=user.firstname;
lastname.textContent=user.lastname;
occupation.textContent=user.occupation;

rowElement.appendChild(id);
rowElement.appendChild(firstname);
rowElement.appendChild(lastname);
rowElement.appendChild(occupation);

tableElement.children[1].appendChild(rowElement);

}

userData.forEach(forEachCallbackFn);

const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', (event) =>{
    const searchText = searchInput.value;
    console.log(searchText);

    const filteredUsers =userData.filter((user) =>{

        return user.firstname.toLocaleLowerCase() === searchText||
        user.lastname.toLocaleLowerCase() ===searchText||
        user.occupation.toLocaleLowerCase() ===searchText;
        
    });

    
});