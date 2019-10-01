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

const tableElement = document.getElementById('users');

const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup',(event =>{
    const searchText = searchInput.value.toLowerCase();

    console.log(searchText);

    if(!searchText){
        
        const tbody = tableElement.children[1];
        Array.from(tbody.children).forEach((row)=>{
            row.remove();
        })
        addRows(userData);
    }else{

        const filterUsers = userData.filter((users) =>{
            return users.firstname.toLowerCase() === searchText || 
            users.lastname.toLowerCase() === searchText ||
            users.occupation.toLowerCase() ==  searchText

        });
        console.log(filterUsers);

        const clearRows = ()=>{
            
        }
        const tbody = tableElement.children[1];
        Array.from(tbody.children).forEach((row)=>{
            row.remove();
        })

        addRows(filterUsers);
}

    const clearRows = ()=>{
        
    }

}));

const addRows = (users)=>{

    const forEachCallBackFn = function(user){
        console.log(user);
        const rowElement = document.createElement('tr');
    
        rowElement.classList = 'row';
    
        const id = document.createElement ('td');
        const firstname = document.createElement ('td');
        const lastname = document.createElement ('td');
        const occupation = document.createElement ('td');
    
        id.textContent = user.id;
        firstname.textContent = user.firstname;
        lastname.textContent = user.lastname;
        occupation.textContent = user.occupation;
    
        rowElement.appendChild(id);
        rowElement.appendChild(firstname);
        rowElement.appendChild(lastname);
        rowElement.appendChild(occupation);
    
        // tableElement.appendChild(rowElement);
        tableElement.children[1].appendChild(rowElement);
    
    }
    
    users.forEach(forEachCallBackFn);
}

addRows(userData);