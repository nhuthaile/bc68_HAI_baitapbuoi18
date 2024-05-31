let arrSoNguyen = [];

document.querySelector(".btn_nhapSo").onclick = function (event) {
  event.preventDefault();
  let soNguyen = document.getElementById("nhapSoNguyen").value;
  let SoNguyenNum = Number(soNguyen);
  if (soNguyen === "" || isNaN(SoNguyenNum)) {
    return;
  } else {
    arrSoNguyen.push(SoNguyenNum);
  }
  //   document.getElementById(".nhapSoNguyenDiv").reset();
  document.querySelector(
    ".nhapSoNguyen>p"
  ).innerHTML = `Mảng số: ${arrSoNguyen}`;
  console.log(typeof soNguyen);
  console.log(arrSoNguyen);
};

// 1.TINH TONG CAC SO DUONG
document.querySelector(".btn_tongSo").onclick = function (event) {
  event.preventDefault();
  document.querySelector(".tongSoDuong>p").innerHTML = arrSoNguyen.reduce(
    (a, b) => a + b
  );
};

// 2.DEM CO BAO NHIEU SO DUONG TRONG MANG
document.querySelector(".btn_demSo").onclick = function () {
  let soDuong = 0;
  for (let i = 0; i < arrSoNguyen.length; i++) {
    if (arrSoNguyen[i] <= 0) return;
    else {
      soDuong += 1;
    }
  }
  document.querySelector(
    ".demSoDuong>p"
  ).innerHTML = `Có ${soDuong} số dương trong mảng`;
  console.log(soDuong);
};

// 3.TIM SO NHO NHAT TRONG MANG
document.querySelector(".btn_nhoNhat").onclick = function () {
  if (arrSoNguyen.length === 0) return;
  document.querySelector(
    ".soNhoNhat>p"
  ).innerHTML = `Số nhỏ nhất trong mảng là ${Math.min(...arrSoNguyen)}`;
};

// 4. TIM SO DUONG NHO NHAT TRONG MANG
document.querySelector(".btn_duongNhoNhat").onclick = function () {
  let arrDuong = [];
  for (let i = 0; i < arrSoNguyen.length; i++) {
    if (arrSoNguyen[i] < 0) return;
    else {
      arrDuong.push(arrSoNguyen[i]);
    }
  }
  if (arrDuong.length === 0) return;
  document.querySelector(
    ".soDuongNhoNhat>p"
  ).innerHTML = `Số dương nhỏ nhất là ${Math.min(...arrDuong)}`;
};

// 5.TIM SO CHAN CUOI CUNG TRONG MANG
document.querySelector(".btn_chanCuoiCung").onclick = function () {
  let soChan = -1;
  for (let i = arrSoNguyen.length - 1; i >= 0; i--) {
    if (arrSoNguyen[i] % 2 === 0) {
      soChan = arrSoNguyen[i];
      break;
    }
  }
  document.querySelector(
    ".soChanCuoiCung>p"
  ).innerHTML = `Số Chẵn Cuối Cùng Là ${soChan}`;
};

// 6.HOAN DOI VI TRI 2 SO
document.querySelector(".btn_doiCho").onclick = function () {
  let index1 = document.querySelector(".viTri1").value * 1 - 1;
  let index2 = document.querySelector(".viTri2").value * 1 - 1;
  let num1 = arrSoNguyen[index1];
  let num2 = arrSoNguyen[index2];
  arrSoNguyen[index1] = num2;
  arrSoNguyen[index2] = num1;
  document.querySelector(".hoanDoiViTri>p").innerHTML = arrSoNguyen;
};

// 7.SAP XEP MANG THEO THU TU TANG DAN

document.querySelector(".btn_tangDan").onclick = function () {
  document.querySelector(
    ".tangDan>p"
  ).innerHTML = `Mảng tăng dần ${arrSoNguyen.sort((a, b) => a - b)}`;
};

// 8.TIM SO NGUYEN TO DAU TIEN TRONG MANG
function kiemTraSoNguyenTo(num) {
  if (num < 2) return false;
  let soNguyenTo = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      soNguyenTo = false;
    }
  }
  return soNguyenTo;
}

document.querySelector(".btn_soNguyenToDauTien").onclick = function () {
  let soNguyenTo = -1;

  for (let i = 0; i < arrSoNguyen.length; i++) {
    if ([2, 3].includes(arrSoNguyen[i])) {
      soNguyenTo = arrSoNguyen[i];
      break;
    }
    if (kiemTraSoNguyenTo(arrSoNguyen[i])) {
      soNguyenTo = arrSoNguyen[i];
      break;
    }
  }
  document.querySelector(
    ".soNguyenToDauTien>p"
  ).innerHTML = `Số nguyên tố đầu tiên là ${soNguyenTo}`;
};

// 9. NHAP MANG SO THUC, DEM SO NGUYEN

document.querySelector(".btn_nhapSoThuc").onclick = function () {
  let soThuc = document.querySelector(".soThuc").value;
  if (soThuc !== "") {
    arrSoNguyen.push(soThuc * 1);
  }
  console.log(arrSoNguyen);
};

document.querySelector(".btn_baoNhieuSoNguyen").onclick = function () {
  let soNguyen = 0;
  for (let i = 0; i < arrSoNguyen.length; i++) {
    if (arrSoNguyen[i] === Math.floor(arrSoNguyen[i])) {
      soNguyen += 1;
    }
  }
  document.querySelector(
    ".baoNhieuSoNguyen>p"
  ).innerHTML = `Có ${soNguyen} số Nguyên`;
};

// 10. SO SANH SO LUONG SO DUONG VA SO LUONG SO AM

document.querySelector(".btn_soSanhAmDuong").onclick = function () {
  let soAm = 0;
  let soDuong = 0;

  for (let i = 0; i < arrSoNguyen.length; i++) {
    if (arrSoNguyen[i] > 0) {
      soDuong += 1;
    } else if (arrSoNguyen[i] < 0) {
      soAm += 1;
    }
  }
  if (soAm === 0 && soDuong === 0)
    return (document.querySelector(
      ".soSanhAmDuong>p"
    ).innerHTML = `Vui lòng nhập số vào mảng`);
  if (soAm > soDuong) {
    return (document.querySelector(
      ".soSanhAmDuong>p"
    ).innerHTML = `Số Âm nhiều hơn số Dương`);
  } else if (soAm === soDuong) {
    return (document.querySelector(
      ".soSanhAmDuong>p"
    ).innerHTML = `Số Âm bằng số Dương`);
  } else {
    return (document.querySelector(
      ".soSanhAmDuong>p"
    ).innerHTML = `Số Âm ít hơn Dương`);
  }
};
