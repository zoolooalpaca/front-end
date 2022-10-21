<template>
    <div
      class="dialog-container"
      id="my-dialog"
      aria-hidden="true"
      aria-labelledby="my-dialog-title"
      aria-describedby="my-dialog-description"
    >
      <div
        class="dialog-overlay"
        data-a11y-dialog-hide
      ></div>

      <div class="dialog-content surface" role="document">

      <div id="dialog-content">
        <div>
          <span class="material-symbols-outlined text-center">
            emergency_home
          </span>
        </div>
        <p id="my-dialog-title" class="headline-small text-center">
          {{title}}
        </p>
        <p id="my-dialog-description" class="body-medium text-center">
          {{bodyText}}
        </p>
      </div>
      <div id="dialog-action">
        <div>
          <button
            type="cancel"
            name="button"
          >ไม่ยกเลิก</button>
          <button
            type="cancel"
            name="button"
          >ยกเลิกอาหาร</button>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import A11yDialog from 'a11y-dialog';

export default {
  mounted() {
    const container = document.getElementById('my-dialog');
    const dialog = new A11yDialog(container);

    dialog.on('show', (event) => {
      //
    });
  },
  data() {
    return {
      title: 'ยกเลิกอาหาร',
      bodyText: 'ยกเลิกอาหารที่สั่งไปแล้ว คุณจะไม่สามารถแก้ไข' +
      'การยกเลิกนี้ได้ กดปุ่มยกเลิกอาหารเพื่อยกเลิก การสั่งทำอาหาร',
    };
  },
};
</script>
<style>

.dialog-container {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
}

.dialog-container[aria-hidden='true'] {
  display: none;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(43, 46, 56, 0.9);
  animation: fade-in 200ms both;
}

.dialog-content {
  margin: auto;
  z-index: 10;
  position: relative;
  animation: fade-in 400ms 200ms both, slide-up 400ms 200ms both;
  max-width: 90%;
  width: 312px;
  border-radius: 28px;
}

#dialog-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 24px 4px;
  gap: 16px;
}

#dialog-action {
  padding: 24px;
}

@media screen and (min-width: 700px) {
  .dialog-content {
    display: block;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(10%);
  }
}

.dialog h1 {
  margin: 0;
  font-size: 1.25em;
}

.dialog-close {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  border: 0;
  padding: 0;
  background-color: transparent;
  font-weight: bold;
  font-size: 1.25em;
  width: 1.2em;
  height: 1.2em;
  text-align: center;
  cursor: pointer;
  transition: 0.15s;
}

@media screen and (min-width: 700px) {
  .dialog-close {
    top: 1em;
    right: 1em;
  }
}

</style>
