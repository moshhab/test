"use strict";
let notes = JSON.parse(localStorage.getItem("notes"))
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

 
$("#addBtn").click(function () {
  let note = $("#inputNote").val();
  notes.unshift(note);
  notesList();
  localStorage.setItem("notes", JSON.stringify(notes));
  $("#inputNote").val("");
});

function notesList() {
  $("#listOut").empty();
  if (notes.length != 0) {
    notes.map((note, index) => {
      $("#listOut").append(`<div id="${index}"
    class="col list-group-item  list-group-item-dark" >
   ${note}
   <button class="col btn btn-dark btn-label float-lg-end"  onclick="deleteNote(${index})">Delete</button>
   </div>`);
    });
  } else $("#emptyList").html("<p>There are no notes</p>");
}

function deleteNote(index) {
  notes.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notes));

  notesList();
}
