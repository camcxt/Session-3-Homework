
// su dung vong lap// sử dụng vòng lặp while.
// tạo 1 chương trình cho người dùng nhập thêm bớt sửa và đọc phone number
// khi hoàn thành 1 chức năng sẽ quay lại menu CRUD để người dùng chọn 
// nếu người dùng  nhập "C" => tạo mới 1 element ==> quay lại menu
// nếu người dùng  nhập "R" => Cho người dùng nhập chỉ số INDEX, in ra nó. ==> quay lại menu
// nếu người dùng  nhập "U" => cập nhật 1 phần tử do người dùng nhập index ==> quay lại menu
// nếu người dùng  nhập "D" => hỏi người dùng chỉ số index muốn xóa => xoa no ==> quay lại menu

let initNumber = [0972813172, 0821912390];
a = true;
while(a){
let input = prompt("Enter your function : C/R/U/D/E");

if (input === "C") {
  let add = Number(prompt("add phone number : "));
  initNumber.unshift(add);
  console.table(initNumber);
}
else if (input === "D") {
  let del = Number(prompt("enter index of phone number : "));
  if (del < 0 || del >= initNumber.length) {
    alert("Please other index :");
  } else {
    initNumber.splice(del, 1);
    console.table(initNumber);
  }
}
else if (input === "U") {
    let update = Number(prompt("enter index of phone number : "));
    if (update < 0 || update >= initNumber.length) {
      alert("Please other index :");
    } else {
      let valueUpdate = Number(prompt("Enter Value to update :"));
      initNumber[update] = valueUpdate;
      console.table(initNumber);
    }
  }
  else if (input === "R") {
    let read = Number(prompt("enter index of phone number : "));
    console.log(initNumber[read]);
  }else if(input === "E"){
    alert("Exit the program");
    a = false;
  }else {
    alert("C/R/U/D/E ?");
  }
}
