const id = document.getElementById('id') ;
const pw = document.getElementById('pw') ;
const menu1 = document.getElementById('menu1') ;
const menu2 = document.getElementById('menu2') ;
const token = sessionStorage.getItem('TOKEN');
// console.log(token);
const list = document.getElementById('list');

const handleData = async() => {
    const url = `http://1.234.5.158:23000/item101/selectlistpage.json?page=1`;
    const headers = {"Contet-Type":"application/json"}
    const { data } = await axios.get(url, {headers});
    // console.log('handleData', data);
    if(data.status === 200) {
            for(tmp of data.result) {
            // console.log(tmp);
            list.innerHTML +=
                `<a href = "/itemcontent2.html?no=${tmp._id}">`+
                `<div>` +
                    `<p><img src="${tmp.img}" style="width:100%; height:150px"></p>` +
                    `<p>${tmp.name}</p>` +
                `</div>` +
                `</a>` ;
        }
    }
}
handleData();

const handleLogin = async() => {
    if(id.value.length <= 0) {
        alert('아이디를 입력하세요.')
        id.focus();
        return false;
    }
    if(pw.value.length <= 0) {
        alert('비밀번호를 입력하세요.')
        pw.focus();
        return false;
    }

    const url = `http://1.234.5.158:23000/member101/select.json`;
    const headers = {"Content-Type":"application/json"} ;
    const body = {
        id: id.value,
        pw: pw.value
    }
    const { data } = await axios.post(url, body, {headers});
    // console.log(data);
    if(data.status === 200) {
        sessionStorage.setItem('TOKEN', data.result);
        window.location.href="/main2.html";
    }
    else {
        alert('아이디 또는 비밀번호를 확인하세요.')
    }
}
   
if(token === null) {
    menu1.style.display = "block";
    menu2.style.display = "none";
}
else {
    menu1.style.display = "none";
    menu2.style.display = "block";
}