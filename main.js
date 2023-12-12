$(document).ready(function () {
    $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $(".form-input").val();
    const tarefaLista = $("ul li")
        .toArray()
        .some((li) => $(li).text() === novaTarefa);
    if (tarefaLista) {
        alert("Esta tarefa já foi cadastrada.");
        return;
    }

    const listarTarefas = $(`<li class="has-marker">${novaTarefa}</li>`);
    $(listarTarefas).appendTo("ul");
    $(".form-input").val("");
    });

    $("ul").on("click", "li", function () {
    $(this).toggleClass("strike-through");
    });
});