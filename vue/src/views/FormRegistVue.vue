<template>
  <div>
    <!-- form regist -->
    <form v-if="!registrationSuccess" @submit.prevent="submitForm">
      <label>Nama</label><br />
      <input type="text" v-model="nama" /><br /><br />

      <label>Email</label><br />
      <input type="email" v-model="email" /><br /><br />

      <label>Asal Sekolah</label><br />
      <input type="text" v-model="asal_sekolah" /><br /><br />

      <button type="submit">Submit</button>
    </form>

    <!-- info habis regist -->
    <div v-if="registrationSuccess">
      <p>Registrasi berhasil!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: "",
      email: "",
      asal_sekolah: "",
      registrationSuccess: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        const req = await fetch("http://localhost:3001/api/registrasi", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nama: this.nama,
            email: this.email,
            asal_sekolah: this.asal_sekolah,
          }),
        });

        if (req.ok) {
          this.registrationSuccess = true;
          this.clearForm();
        } else {
          console.error(`Registrasi gagal dengan status: ${req.status}`);
        }
      } catch (err) {
        console.error(err);
      }
    },
    clearForm() {
      this.nama = "";
      this.email = "";
      this.asal_sekolah = "";
    },
  },
};
</script>

<style></style>
