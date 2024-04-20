const form = document.querySelector(".form-user-comment");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const comment = form.elements.userComment.value;

  const checkingTheFieldForEmptiness =
    comment !== ""
      ? creatMarkapCommentUser(comment)
      : alert("preencha os campos");
  form.reset();
}

function creatMarkapCommentUser(comment) {
  console.log(comment);

  const word = "fuck";
  const markup = `<div class="comments" id="comment0" style="display: block">
  <div class="profile">
    <img src="assets/Images/3.jpg" />
  </div>
  <div class="comment-content">
    <p class="name">
      <font style="vertical-align: inherit">
        <font style="vertical-align: inherit">Anonymous</font>
      </font>
    </p>
    <p style="vertical-align: inherit"> ${comment}</p>
  </div>
  <div class="clr"></div>
  <div class="comment-status">
    <span>
      <font style="vertical-align: inherit">
        <font style="vertical-align: inherit">Curte·comente</font>
      </font>
      <img src="assets/Images/like.png" width="15px" height="15px" />
      <font style="vertical-align: inherit">
        <font style="vertical-align: inherit">29</font>
      </font>
    </span>
    <font style="vertical-align: inherit">
      <small>
        <font style="vertical-align: inherit">·</font>
      </small>

      <small>
        <u>
          <font style="vertical-align: inherit"
            >4 minutos antes</font
          >
        </u>
      </small>
    </font>
    <small>
      <font style="vertical-align: inherit"></font>
      <u>
        <font style="vertical-align: inherit"></font>
      </u>
    </small>
  </div>
</div>`;

  form.insertAdjacentHTML("afterend", markup);
}

// anonymous

{
  /* <p>
<font style="vertical-align: inherit">
  <font style="vertical-align: inherit"
    >${comment}</font
  >
</font>
</p> */
}
