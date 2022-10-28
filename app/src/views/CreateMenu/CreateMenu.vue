<template>
  <div class="flex flex-row">
    <div class="basis-1/4">
      <SectionHeader label="อร่อยโภชนา" />
      <NavItem
          v-for="(item, index) in navItems"
          :id="index"
          :label="item.label"
          :active="index == activeId"
          :onClickItem="onClickItem"
          :key="index"
      >
        <span class="material-symbols-outlined">{{item.icon}}</span>
      </NavItem>
    </div>
    <div class="basis-3/4 ml-10">
      <h3 class="headline-large mb-10">เพิ่มรายการอาหาร</h3>
      <div class="flex flex-row">
        <div class="basis-2/5">
          <p>insert image</p>
          <input
              style="display: none"
              type="file"
              @change="onFileSelected"
              ref="fileInput">
          <button @click="$refs.fileInput.click()" class="button-upload-file body-medium">Pick file</button>
          <button class="button-upload-file body-medium" @click="onUpload">UPLOAD</button>
        </div>
        <div class="basis-3/5 ml-5">
          <h3 class="body-large">ชื่ออาหาร</h3>
          <input type="text" class="input-create-menu">
          <h3 class="body-large">ประเภทอาหาร</h3>
          <input type="text" class="input-create-menu">
          <h3 class="body-large">ราคา</h3>
          <input type="text" class="input-create-menu">
          <h3 class="body-large">คำอธิบายอาหาร</h3>
          <textarea class="textarea-create-menu"></textarea>
          <h3 class="body-large">ข้อมูลสำหรับการแพ้อาหาร</h3>
          <textarea class="textarea-create-menu"></textarea>
        </div>
      </div>
      <div class="grid justify-items-end">
        <button class="button-create-menu body-large">เพิ่มรายการอาหาร</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SectionHeader from "../../components/NavBarDrawer/SectionHeader.vue";
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
import FoodCard from "../../components/FoodCard/FoodCard.vue";

export default {
  data() {
    return {
      selectedFile: null,
      activeId: 0,
      navItems: [
        {label: 'ชื่อลูกค้า', icon: 'account_circle'},
        {label: 'สรุปข้อมูล', icon: 'signal_cellular_alt'},
        {label: 'รายการอาหาร', icon: 'restaurant_menu'},
        {label: 'โปรโมชัน', icon: 'grid_view'},
      ],
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name)
      axios.post("https://f.ptcdn.info/548/074/000/qy4tizbb41RMykmSGg5-o.jpg", fd, {
        onUploadProgress: uploadEvent => {
          console.log("Upload Progress: " + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
        }
      })
          .then(res => {
            console.log(res)
              })
    }
  },
  components: {
    SectionHeader,
    NavItem,
    FoodCard,

  }
}
</script>

<style>
.input-create-menu[type=text]{
  width: 90%;
  border: 2px solid;
  border-color: var(--md-sys-color-primary-container);
  border-radius: 10px;
  background-color: var(--md-sys-color-surface);
  margin: 10px 0px 15px 10px;
  resize: none;
}
.textarea-create-menu {
  width: 90%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-color: var(--md-sys-color-primary-container);
  border-radius: 10px;
  background-color: var(--md-sys-color-surface);
  margin: 10px 0px 15px 10px;
  resize: none;
}
.button-create-menu{
  background-color: var(--md-sys-color-tertiary-container);
  border: none;
  color: var(--md-sys-color-on-tertiary-container);
  text-decoration: none;
  padding: 16px 32px;
  margin: 4px 2px;
  border-radius: 10px;
  cursor: pointer;
}
.button-upload-file{
  background-color: var(--md-sys-color-primary-container);
  border: none;
  color: var(--md-sys-color-on-primary-container);
  text-decoration: none;
  padding: 10px 20px;
  margin: 4px 2px;
  border-radius: 10px;
  cursor: pointer;
}
</style>