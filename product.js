var galaprice = 12490000;
var vivoprice = 4490000;
var iphoneprice = 33590000;
var oppoprice = 4690000;
var anhAr = [];
var soanh = 4;
var currentIndex = 0;
var auto;
function loadAnh() {
    anhAr[0] = new Image();
    anhAr[0].src = "1.jpg";
    anhAr[1] = new Image();
    anhAr[1].src = "2.jpg";
    anhAr[2] = new Image();
    anhAr[2].src = "3.jpg";
    anhAr[3] = new Image();
    anhAr[3].src = "4.jpg";
    auto = setInterval(next, 2000);
}

function next() {
    currentIndex++;
    if (currentIndex >= soanh) {
        currentIndex = 0;
    }
    document.getElementById("slideshow").src = anhAr[currentIndex].src;
    
}

function back() {
    if (currentIndex > 0) {
        currentIndex--;

    } else {
        currentIndex = soanh - 1;
    }
    document.getElementById("slideshow").src = anhAr[currentIndex].src;
}
var pause_count = 0;
//Tạo nút dừng hoặc chạy cho slide show
function pause(){ 
    if(pause_count == 0){
        clearInterval(auto);
        pause_count++;
    }else{
        auto = setInterval(next, 2000);
        pause_count=0;
    }
    
}


var temp = 0;
var galatemp = 0;
var vivotemp = 0;
var iphonetemp = 0;
var oppotemp = 0;

function cartadd(x) {

    if (x == 'gala') {
        let elemental = document.getElementById("gala-cart");
        elemental.classList.add("cart-pro");
        galatemp++;
        cartplus(0);
    } else if (x == 'vivo') {
        let elemental = document.getElementById("vivo-cart");
        elemental.classList.add("cart-pro");
        vivotemp++;
        cartplus(1);
    } else if (x == 'iphone') {
        let elemental = document.getElementById("iphone-cart");
        elemental.classList.add("cart-pro");
        iphonetemp++;
        cartplus(2);
    } else if (x == 'oppo') {
        let elemental = document.getElementById("oppo-cart");
        elemental.classList.add("cart-pro");
        oppotemp++;
        cartplus(3);
    }
}


function formbuy() {
    let element = document.getElementById("form-buy");
    element.classList.add("form-apear");

}

function formoff() {
    let elemental = document.getElementById("form-buy");
    elemental.classList.remove("form-apear");
}

function amount() {

    var galacount = document.getElementsByClassName("amount")[0].value;
    var vivocount = document.getElementsByClassName("amount")[1].value;
    var iphonecount = document.getElementsByClassName("amount")[2].value;
    var oppocount = document.getElementsByClassName("amount")[3].value;

    let element = document.getElementById("cart-count-num");

    element.innerHTML = galacount * 1 + vivocount * 1 + iphonecount * 1 + oppocount * 1;

    cal(galacount, vivocount, iphonecount, oppocount);

    //Xóa sản phẩm khi số lượng về 0


}

function cartprooff(x) {
    let galacountoff = document.getElementsByClassName("amount")[0];
    let vivocountoff = document.getElementsByClassName("amount")[1];
    let iphonecountoff = document.getElementsByClassName("amount")[2];
    let oppocountoff = document.getElementsByClassName("amount")[3];

    if (x == 0) {
        document.getElementById("gala-cart").classList.remove("cart-pro")
        galacountoff.value=0;

    } else if (x == 1) {
        document.getElementById("vivo-cart").classList.remove("cart-pro")
        vivocountoff.value=0;
    } else if (x == 2) {
        document.getElementById("iphone-cart").classList.remove("cart-pro")
        iphonecountoff.value=0;
    } else if (x == 3) {
        document.getElementById("oppo-cart").classList.remove("cart-pro")
        oppocountoff.value=0;
    }


    let element = document.getElementById("cart-count-num");

    element.innerHTML = galacountoff.value * 1 + vivocountoff.value * 1 + iphonecountoff.value * 1 + oppocountoff.value * 1;

    cal(galacountoff.value, vivocountoff.value, iphonecountoff.value, oppocountoff.value);

}

function cartplus(x) {

    let calnum = document.getElementsByClassName("amount")[x];
    calnum.value++;
    amount();


}
function cartderc(x) {
    var calnum = document.getElementsByClassName("amount")[x];
    calnum.value--;
    if (calnum.value < 1) {
        alert("Sản phẩm không nhỏ hơn 1")
        calnum.value++;

    }
    amount();



}



function cal(a, b, c, d) {


    var priceall = a * galaprice + b * vivoprice + c * iphoneprice + d * oppoprice;
    let elemental = document.getElementById("count-all");
    elemental.innerHTML = priceall;

    //Tính tiền trong form thanh toán
    let element = document.getElementById("form-price");
    element.value = priceall;
}





function cartopen() {
    let elemental = document.getElementById("cart");
    elemental.classList.add("cart-apear");
}
function cartoff() {
    let elemental = document.getElementById("cart");
    elemental.classList.remove("cart-apear");
}

function showpro(x) {
    if (x == 'gala') {
        let element = document.getElementById("gala-pro-apear");
        element.classList.add("gala-pro-apear");
    } else if (x == 'vivo') {
        let element = document.getElementById("vivo-pro-apear");
        element.classList.add("vivo-pro-apear");
    } else if (x == 'iphone') {
        let element = document.getElementById("iphone-pro-apear");
        element.classList.add("iphone-pro-apear");
    } else if (x == 'oppo') {
        let element = document.getElementById("oppo-pro-apear");
        element.classList.add("oppo-pro-apear");
    }

}

function offpro(x) {
    if (x == 'gala') {
        let element = document.getElementById("gala-pro-apear");
        element.classList.remove("gala-pro-apear");
    } else if (x == 'vivo') {
        let element = document.getElementById("vivo-pro-apear");
        element.classList.remove("vivo-pro-apear");
    } else if (x == 'iphone') {
        let element = document.getElementById("iphone-pro-apear");
        element.classList.remove("iphone-pro-apear");
    } else if (x == 'oppo') {
        let element = document.getElementById("oppo-pro-apear");
        element.classList.remove("oppo-pro-apear");
    }

}

function changepro(p, x) {
    if (p == 'gala') {
        if (x == 1) {
            document.getElementsByClassName('sanpham')[0].lastElementChild.src = 'gala xanh lục.jpg';
        } else if (x == 2) {
            document.getElementsByClassName('sanpham')[0].lastElementChild.src = 'gala đen.jpg';
        } else if (x == 3) {
            document.getElementsByClassName('sanpham')[0].lastElementChild.src = 'gala vàng hồng.jpg';
        }
    }
    else if (p == 'vivo') {

        if (x == 1) {

            document.getElementsByClassName('sanpham')[1].lastElementChild.src = 'vivo.jpg';
        } else if (x == 2) {

            document.getElementsByClassName('sanpham')[1].lastElementChild.src = 'vivo xám.jpg';
        } else if (x == 3) {
            document.getElementsByClassName('sanpham')[1].lastElementChild.src = 'vivo đen.jpg';
        }
    }
    else if (p == 'iphone') {
        if (x == 1) {
            document.getElementsByClassName('sanpham')[2].lastElementChild.src = 'iphone hồng.jpg';
        } else if (x == 2) {
            document.getElementsByClassName('sanpham')[2].lastElementChild.src = 'iphone trắng.jpg';
        } else if (x == 3) {
            document.getElementsByClassName('sanpham')[2].lastElementChild.src = 'iphone đen.jpg';
        }
    }
    else if (p == 'oppo') {
        if (x == 1) {
            document.getElementsByClassName('sanpham')[3].lastElementChild.src = 'op tím.jpg';
        } else if (x == 2) {
            document.getElementsByClassName('sanpham')[3].lastElementChild.src = 'op vàng.jpg';
        } else if (x == 3) {
            document.getElementsByClassName('sanpham')[3].lastElementChild.src = 'op xám.jpg';
        }
    }

}

//Bắt lỗi form mua hàng



function kiemtra() {
    var hoten = document.getElementById("hoten");

    //kiem loi ho ten
    if (hoten.value.length == 0) {
        alert("Họ tên không được để trống");
        return false;
    }
    //kiem loi so dien thoai
    var sdt = document.getElementById("so-dien-thoai")
    if (sdt.length < 10 || sdt.length > 11) {
        alert("Vui lòng nhập đủ 10-11 số");
        return false;
    } else if (sdt.value = "") {
        alert("Vui lòng không để trống")
        return false;
    }

    //kiem tra gioi tinh
    var loai = document.getElementById("gioi-tinh");
    if (loai.value == 0) {
        alert("Vui lòng chọn giới tính")
        return false;
    }

    //kiem tra gia san pham
    var giasp = document.getElementById("form-price");
    if (giasp.value == 0) {
        alert("Vui lòng chọn ít nhất 1 sản phẩm trước khi đăng ký mua hàng")
    }

    //kiem tra nhan hang
    var diachi = document.getElementById("dia-chi");
    if (diachi.value == "") {
        alert("Vui lòng nhập địa chỉ")
        return false;
    }

    var sodienthoai = document.getElementById("sodienthoai")
    if (sodienthoai.value.length == 0) {
        alert("Vui lòng nhập số điện thoại")
        return false;
    }
    if (sodienthoai.value.length != 10) {
        alert("Số điện thoại phải gồm 10 số")
        return false;
    }
}

setInterval(function(){

    let ngayht = new Date();
    
    let tet = new Date("01 01 2023");
    
    let t= tet-ngayht;
    
    let giay = Math.floor((t/1000)%60) ;
    
    let phut =Math. floor ( (t/1000/60)%60) ;
    
    let gio =Math.floor((t/(1000*60*60)%24) ) ;
    let ngay =Math.floor((t/(1000*60*60*24) ));
    
    console.log(giay);

    document.getElementById("ngay").innerHTML = ngay;
    if(gio<10){
        document.getElementById("gio").innerHTML = "0"+gio;
    }else{
        document.getElementById("gio").innerHTML = gio;
    }
    if(phut<10){
        document.getElementById("phut").innerHTML = "0"+phut;
    }else{
        document.getElementById("phut").innerHTML = phut;
    }
    if(giay<10){
        document.getElementById("giay").innerHTML = "0"+giay;
    }else{
        document.getElementById("giay").innerHTML = giay;
    }
    
    
    }, 1000);
function troll(){
    alert("Chức năng đang được phát triển trong tương lai")
}
