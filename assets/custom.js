const form = document.querySelector(".form-user-comment");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const comment = form.elements.userComment.value;

  console.log(event);
  console.log(form.elements.userComment.value);
  console.log("Button was clicked");
}

const date = new Date().getMinutes();
console.log(date);

function creatMarkapCommentUser(comment) {
  const timeWhenTheCommentWasLeftInMinutes = new Date().getMinutes();

  const markup = `<div class="comments" id="comment0" style="display: block">
    <div class="profile">
      <img src="assets/Images/1.gif" />
    </div>
    <div class="comment-content">
      <p class="name">
        <div style="vertical-align: inherit">
          <p style="vertical-align: inherit">Anonymous</p>
        </div>
      </p>
      <p style="vertical-align: inherit>
        ${comment}
      </p>
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
  </div> `;
}

// anonymous
