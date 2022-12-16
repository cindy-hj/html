const join = document.getElementsByClassName('join');
const check = document.getElementById('check');

let idcheck = 0;

const handleIDCheck = async() => {
    if(join[0].value.length >0) {
        const url = `http://1.234.5.158:23000/member101/idcheck.json?id=${join[0].value}` ; // value 빼먹지마
        const headers = {"Content-Type":"application/json"} ; // json 오타 주의
        const { data } = await axios.get(url, {headers}) ;
        // console.log('handleIDCheck', data);
        if(data.status === 200){
            if(data.result === 0) {
                check.innerHTML 
                    = '<label style="color:green">사용가능</label>'  
                    idcheck = 1;     
            }
            else if(data.result === 1) {
                check.innerHTML 
                    = '<label style="color:red">사용 불가능</label>'
                    idcheck = 0;
            }
        }
    }
    else {
        check.innerHTML
            ='<label>중복확인</label>'
    } 
    
}

const handleJoin = async() => {
    if(join[0].value.length <=0) {
        alert('아이디를 입력하세요.')
        join[0].focus();
        return false;
    }
    if(idcheck === 0) {
        alert('이미 사용된 아이디입니다.')
        join[0].focus();
        return false;
    }
    if(join[1].value.length <=0) {
        alert('비밀번호를 입력하세요.')
        join[1].focus();
        return false;
    }
    if(join[2].value.length <=0) {
        alert('비밀번호를 다시 입력하세요.')
        join[2].focus();
        return false;
    }
    if(join[2].value !== join[1].value) {
        alert('비밀번호가 일치하지 않습니다.')
        join[2].focus();
        return false;
    }
    if(join[3].value.length <=0 ) {
        alert('이름을 입력하세요.')
        join[3].focus();
        return false;
    }
    if(join[4].value.length <=0 ) {
        alert('휴대폰 번호를 입력하세요.')
        join[4].focus();
        return false;
    }
    if(join[5].value.length <=0 ) {
        alert('휴대폰 번호를 입력하세요.')
        join[5].focus();
        return false;
    }
    if(join[6].value.length <=0 ) {
        alert('휴대폰 번호를 입력하세요.')
        join[6].focus();
        return false;
    }
    if(join[7].value.length <=0 ) {
        alert('이메일을 입력하세요.')
        join[7].focus();
        return false;
    }
    if(join[8].value === '이메일 주소 선택' ) {
        alert('이메일 주소를 선택하세요.')
        join[8].focus();
        return false;
    }
    const url = `http://1.234.5.158:23000/member101/insert.json`;
    const headers = {"Content-Type":"application/json"};
    const body = {
        id      : join[0].value,
        pw      : join[1].value,
        name    : join[3].value,
        email   : join[7].value + '@' + join[8].value,
        age     : join[4].value // 나이값을 안받아서 휴대폰번호 앞 세자리로 임의설정함.
    }
    const { data } = await axios.post(url, body, {headers});
    // console.log(data);
    if(data.status === 200) {
        alert('회원 가입 성공!')
        window.location.href='/main2.html'
    }
}