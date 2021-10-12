


function emailIsValid(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function resettext(){
  document.getElementById('name').value = '';
    document.getElementById('img').value = '';
   document.getElementById('brand').value = '';
   document.getElementById('cost').value = '';
   document.getElementById('discription').value = '';
     document.getElementById('contact').value = '';
     document.getElementById('phonenumber').value = '';
   document.getElementById('email').value = '';
}

function save(){
    let name = document.getElementById('name').value;
    let img = document.getElementById('img').value;
    let brand = document.getElementById('brand').value;
    let cost = document.getElementById('cost').value;
    let discription = document.getElementById('discription').value;
    let contact = document.getElementById('contact').value;
    let phonenumber = document.getElementById('phonenumber').value;
    let email = document.getElementById('email').value;

    if (name.length == 0){
        document.getElementById('name-error').innerHTML = 'vui lòng nhập tên xe';
        name = '';
    }
    else if(name.trim().length <3){
        document.getElementById('name-error').innerHTML = 'không được dưới 3 kí tự';
        name = '' ;
    }
    else if(name.trim().length >50 ){
        document.getElementById('name-error').innerHTML = 'không được quá 50 kí tự';
        name = '';
    }
    else{
        document.getElementById('name-error').innerHTML = '';
    }

    if (brand.length == 0){
        document.getElementById('brand-error').innerHTML = 'vui lòng nhập hãng xe';
        brand = '';
    }
    else{
        document.getElementById('brand-error').innerHTML = '';
    }
    
    if (cost.length == 0){
        document.getElementById('cost-error').innerHTML = 'vui lòng nhập giá tiền';
        cost='';
    }
    else if(cost < 0){
        document.getElementById('cost-error').innerHTML = 'giá tiền phải lớn hơn 0';
        cost='';
    }
    else{
        document.getElementById('cost-error').innerHTML = '';
    }

    if (contact.length == 0){
        document.getElementById('contact-error').innerHTML = 'vui lòng nhập tên người liên hệ';
        contact = '';
    }
    else{
        document.getElementById('contact-error').innerHTML = '';
    }

    if (phonenumber.length ==0){
        document.getElementById('phone-error').innerHTML = 'vui lòng nhập số điện thoại';
        phonenumber = '';
    }

    
    
    else if (phonenumber.trim().length <12){
        document.getElementById('phone-error').innerHTML = 'số điện thoại cần ít nhất 9 chữ số';
        phonenumber = '';
    }
    else if (phonenumber.trim().length >15){
        document.getElementById('phone-error').innerHTML = 'nhập sai số điện thoại';
        phonenumber = '';
    }

    else if (phonenumber.startsWith("+84") == false){
        document.getElementById('phone-error').innerHTML = 'bắt đầu bằng +84';
        phonenumber = '';
    }

    else{
        document.getElementById('phone-error').innerHTML = '';
        
    }

    if (email.length == 0){
        document.getElementById('email-error').innerHTML = 'vui lòng nhập email';
        email = '';
    }
    else if(!emailIsValid(email)){
        document.getElementById('email-error').innerHTML = 'Email không hợp lệ';
        email = '';
    }
    else{
        document.getElementById('email-error').innerHTML = '';
    }

    if (discription.length > 0)
    { discription= document.getElementById('discription').value ;}
    else{
        document.getElementById('discription').value = '';
    }

    // if (img.length > 0){
    //     if 
    // }

    

    
    if (name && brand && cost && contact && phonenumber && email  ){
        console.log (name , brand , cost , contact , phonenumber , email, discription)
        

        let datas = localStorage.getItem('datas') ? JSON.parse(localStorage.getItem('datas')) :[];
        datas.push({
            name : name,
            // img :img,
            brand : brand,
            cost : cost,
            contact : contact,
            phonenumber : phonenumber,
            email : email,
            discription :discription,
        });



        
        localStorage.setItem('datas', JSON.stringify(datas));
        

        this.renderListCustomer();

        this.resettext()
        
    }

}

function renderListCustomer() {
    let datas = localStorage.getItem('datas') ? JSON.parse(localStorage.getItem('datas')) :[];

    document.getElementById('grid-view').style.display = 'block'

    let tableContent =`<tr>

            <td class="td">STT</td> 
            <td class="td">Hình Ảnh</td> 
            <td class="td">Tên Xe</td> 
            <td class="td">Hãng Xe</td> 
            <td class="td">Giá Tiền</td> 
            <td class="td">Người Liên Hệ</td> 
            <td class="td">Điện Thoại</td> 
            <td class="td">Email</td> 
        </tr>`;

        datas.forEach((data, index) => {
            var dataId = index;
            index ++;
            tableContent+= `<tr>
                <td class="td">${index}</td> 
                <td class="td"></td> 
                <td class="td">${data.name}</td> 
                <td class="td">${data.brand}</td> 
                <td class="td">${data.cost}</td> 
                <td class="td">${data.contact}</td> 
                <td class="td">${data.phonenumber}</td>     
                <td class="td">${data.email}</td> 
                <td>
                <a href='#' onclick = 'check(${dataId})' id = "kiemtra">check</a> 
                <a href='#' onclick = 'delet(${dataId})' style='display:none' >deltete</a>  </td>
            </tr>`;
           
        });

        document.getElementById('grid-view').innerHTML = tableContent;

}

function check(id) {

    let datas = localStorage.getItem('datas') ? JSON.parse(localStorage.getItem('datas')) :[];
    
    let data = datas[id];
    
    document.getElementById('name').value = data.name ;
    // document.getElementById('img').value =;
    document.getElementById('brand').value= data.brand ;
    document.getElementById('cost').value = data.cost;
    document.getElementById('discription').value = data.discription ;
   document.getElementById('contact').value= data.contact ;
    document.getElementById('phonenumber').value= data.phonenumber ;
    document.getElementById('email').value= data.email ;

    
    
   
    if(
            data.name = document.getElementById('name').value,
            data.brand = document.getElementById('brand').value,
            data.cost = document.getElementById('cost').value,
            data.discription = document.getElementById('discription').value,
            data.contact = document.getElementById('contact').value,
            data.phonenumber = document.getElementById('phonenumber').value,
            data.email = document.getElementById('email').value
    ) 

    console.log(data);


    document.getElementById("xoa").onclick = function() {
        
            let datas = localStorage.getItem('datas') ? JSON.parse(localStorage.getItem('datas')) :[];
            
            
            datas.splice(id , 1);
            
            localStorage.setItem('datas' ,JSON.stringify(datas));
        
            renderListCustomer();
        
            resettext();
        
    };

    
   
   localStorage.setItem('datas', JSON.stringify(datas));
   this.renderListCustomer();
};





    




 





//  searchBar.addEventListener('keyup', (text) => 

// {
//     let datas = localStorage.getItem('datas') ? JSON.parse(localStorage.getItem('datas')) :[];
//     const searchBar = document.getElementById('searchBar');


//     const searchString = text.target.value; //chữ đang nhập trong search bar
//     const filterDatas = datas.filter(data => 
//     {
//         return(             
//             data.name.includes(searchString) ||
//             data.brand.includes(searchString) ||
//             data.cost.includes(searchString) ||
//             data.contact.includes(searchString) ||
//             data.phonenumber.includes(searchString)
            
//         )
//     });
    
//     console.log(filterDatas)


// });
