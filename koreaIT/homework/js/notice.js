var pageList = [
  { id: 0, checked: true },
  { id: 1, checked: false },
  { id: 2, checked: false },
  { id: 3, checked: false },
  { id: 4, checked: false }
];
$(document).ready(function() {
  $("#notice-page-1").prop("checked", true);
  $("#notice-page-forward").on("click", function() {
    var checkedPage = forward(1);
    $(`#notice-page-${checkedPage + 1}`).prop("checked", true);
  });
  $("#notice-page-forward2").on("click", function() {
    var checkedPage = forward(2);
    $(`#notice-page-${checkedPage + 1}`).prop("checked", true);
  });
  $("#notice-page-undo").on("click", function() {
    var checkedPage = undo(1);
    $(`#notice-page-${checkedPage + 1}`).prop("checked", true);
  });
  $("#notice-page-undo2").on("click", function() {
    var checkedPage = undo(2);
    $(`#notice-page-${checkedPage + 1}`).prop("checked", true);
  });
});

function forward(i) {
  //   현재 체크된 배열 필터
  var checkedPage = pageList.filter(element => element.checked === true)[0].id;
  //  id 만 추출
  if (checkedPage === 4) {
    alert("마지막 페이지입니다.");
    return;
  }
  if (i === 2 && checkedPage == 3) {
    i = 1;
  }

  console.log("이전페이지" + (checkedPage + 1));
  pageList[checkedPage].checked = false;
  pageList[checkedPage + i].checked = true;
  var checkedPage = pageList.filter(element => element.checked === true)[0].id;
  console.log("현재페이지" + (checkedPage + 1));
  return checkedPage;
}

function undo(i) {
  //   현재 체크된 배열 필터
  var checkedPage = pageList.filter(element => element.checked === true)[0].id;
  //  id 만 추출
  if (checkedPage === 0) {
    alert("첫번째 페이지입니다.");
    return;
  }
  if (i === 2 && checkedPage === 1) {
    i = 1;
  }
  console.log("이전페이지" + (checkedPage + 1));
  pageList[checkedPage].checked = false;
  pageList[checkedPage - i].checked = true;
  var checkedPage = pageList.filter(element => element.checked === true)[0].id;
  console.log("현재페이지" + (checkedPage + 1));
  return checkedPage;
}
